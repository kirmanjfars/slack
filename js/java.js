let currentUser = [];
let senderUser = [];
function userLoad(r){

  let name = $(".clientHeaderUser h4").text();
  axios.get('http://localhost:3000/users')
  .then(function  (users) {    
    users.data.forEach(user=>{
      if(user.name ==  name){
        currentUser.pop();
        currentUser.push(user)
      } 
     
      if(user.name == r){
        senderUser.pop();
        senderUser.push(user)
      }
    })

    $('.chatBody').append(`<div class="friend${senderUser[0].id}">`)

  }) 
}




function loadChannel(){
  axios.get('http://localhost:3000/channels')
  .then(function (channels) {   
    channels.data.forEach(channel => {
      $('.channelList').append(`<div class="channelListItem flexRow">
      <p>#</p> <p class="name">${channel.name}</p>
  </div>`);
    });
  })
}

function loadUser(){
  axios.get('http://localhost:3000/users')
  .then(function (users) {
    
        users.data.forEach(user => {
      let str = $(".clientHeaderUser h4").text();
      
      if(user.name== str){
       
      }else{ 

      $('.directMes').append(`<div class=" ${user.id}user directMesItem  flexRow">
      <i class="fas fa-circle"></i> <p class="name">${user.name}</p>
      </div>`);
        
     }
    
     $(".directMesItem").click(function(){  
      var className = $(this).attr('class');
       classId = parseInt(className);
       console.log(classId)
       if(user.id==(classId+1)){
        let p = $(this).find("p");
        p = p.text();
        friendChat(this, p, classId);
       }
      })

     if(user.status=="active"){
      $(`.${user.id}user  i`).css("color", "#177572").css("font-weight","bold");
     }else{
      $(`.${user.id}user  i`).css("color", "rgb(124, 118, 122)").css("font-weight","bold");
     }
    });

    let riceiver = $(".1user p").text();
    userLoad(riceiver);
    chatLoad();

    })
}

function friendChat(elment, name, classId){

  axios.get('http://localhost:3000/users')
  .then(function (users) {
        users.data.forEach(user => {
          if(user.id !== classId){
            $(`.friend${user.id+1}`).css("display", "none");
          }

  })})

  $(`.friend${senderUser[0].id}`).css("display", "none");

  axios.get('http://localhost:3000/users')
  .then(function  (users) {    
    users.data.forEach(user=>{
      if(user.name == name){
        senderUser.pop();
        senderUser.push(user)
      }
    })
    $(".friendInfo h3").html(name)
    $('.chatBody').append(`<div class="friend${senderUser[0].id}">`);
    chatLoad();
  }) 

}

$(".writeSms input").keypress(function(e){
  let sms = $("#userSms").val();
  let time = new Date();
  let hour = time.getHours() ; 
  let min = time.getMinutes();
  let day;
  if(hour<=12){
    day = "AM"
  }else{
    day = "PM"
    hour -= 12;
  }
  if(min<10){
    min = "0"+min;
  }
  time = hour + ":" + min+ " "+ day;
   let writerName = $( "h4" ).last().text();
   if(writerName !== currentUser[0].name){
      if(e.keyCode==13){    
          $('.chatBody').append(
              ` <div class="sms flexRow">
                                <img src="${currentUser[0].imgAddres}">
                                 <div class="smsText">
                                    <div class="userName flexRow">
                                          <h4>${currentUser[0].name}</h4><p>${time}</p>
                                    </div>
                                    <p>${sms}</p>  
                                 </div>
                            </div> `
          );
          $('#userSms').val(" ");
          $('html, .chatBody').scrollTop( $(document).height() );
      }}else{
        if(e.keyCode==13){
          $('.smsText').last().append(` <p>${sms}</p>  `)
          $('#userSms').val(" ");
          $('html, .chatBody').scrollTop( $(document).height() );
        }
    }
})


let friendId = 2;
let id =1;

 let chatLoad = () =>{
  
  let time = new Date();
  let hour = time.getHours() ; 
  let min = time.getMinutes();
  let day;
  if(hour<=12){
    day = "AM"
  }else{
    day = "PM"
    hour -= 12;
  }

  time = hour + ":" + min+ " "+ day;

    
  axios.get('http://localhost:3000/messages')
  .then(function (messages) {
  messages.data.forEach(message => {

    let writerName = $( "h4" ).last().text();
   
     if((message.reciverId == senderUser[0].id && message.senderId == currentUser[0].id)||(message.reciverId == currentUser[0].id  && message.senderId == senderUser[0].id)){
      if(message.senderId == senderUser[0].id){ 
        if(writerName !== senderUser[0].name){
          
        $(`.friend${senderUser[0].id}`).append(
          ` <div class="sms flexRow">
                            <img src="${senderUser[0].imgAddres}">
                            <div class="smsText">
                                <div class="userName flexRow">
                                      <h4>${senderUser[0].name}</h4><p>${message.time}</p>
                                </div>
                                <p>${message.text}</p>  
                            </div>
            </div>`);
          }else{
              $('.smsText').last().append(` <p>${message.text}</p>  `)
              $('html, .chatBody').scrollTop( $(document).height() );
            }
      }else if(message.senderId == currentUser[0].id){
        if(writerName !== currentUser[0].name ){
        $(`.friend${senderUser[0].id}`).append(
          ` <div class="sms flexRow">
                            <img src="${currentUser[0].imgAddres}">
                             <div class="smsText">
                                <div class="userName flexRow">
                                      <h4>${currentUser[0].name}</h4><p>${message.time}</p>
                                </div>
                                <p>${message.text}</p>  
                             </div>
            </div> `);
            
        }else{
          $('.smsText').last().append(` <p>${message.text}</p>  `)
          $('html, .chatBody').scrollTop( $(document).height() );
        }
      }
     }
    
})

$('html, .chatBody').scrollTop( $(document).height() );
}) }




function login(){
  
  let username = $(".usernameForm").val();
  let pass = $(".pass").val();
  
  axios.get('http://localhost:3000/users')
  .then(function (users) {
    users.data.forEach(user => {
          if(username == user.name && pass == user.pass){
            $(".clientHeaderUser h4").html(username)
            $(`.app`).css("display", "flex");
            $(`#myForm`).css("display", "none");
            $(`.${user.id}user `).css("display", "none");
          }
    })
    
    loadUser();
    loadChannel();

  })
}