// const box = document.getElementsByClassName('listItem')[0];
// const containers = document.getElementsByClassName('list')



let box;
var isDragging = false;

$(".listItem").mouseenter(function(){
  $(this).css('display', 'block')
})


$(".listItem")
.mousedown(function() {
    isDragging = false;
     box = this;
    const containers = document.getElementsByClassName('list')
    for(const container of containers) {
      container.addEventListener("dragover", dragovero)
      container.addEventListener("dragenter", dragentero)
      container.addEventListener("drop", dropo)
    }
    
    function dragovero(e) {
        e.preventDefault()
      }
    
      function dragentero(e) {
        e.preventDefault()
        $(box).css("background-color", 'rgb(215, 220, 223)').css("color", "rgb(215, 220, 223)")
      }
    
      function dropo() {
        let lists = $(this).closest(".list")
        let list = lists.find(".listItems");
        list.append(box);
        console.log(list)
        $(box).css("background-color", 'white').css("color", "rgb(73, 72, 72)")
      
      }
})
.mousemove(function() {
    isDragging = true;
     })
.mouseup(function() {
    var wasDragging = isDragging;
    isDragging = false;
    if (!wasDragging) {
        $("#throbble").toggle();
    }
    box = undefined;
});


$('.addlist').on('click', function(){
  let text = $(this).closest(".addlist")
  let form = text.find('.form');
  let addText = text.find('.addText');
  $(form).css('display', 'inline');
  $(addText).css('display', 'none');

  $('#can').on('click', function(e){
    $("#texta").css('display', 'none');
    $(".btn").css('display', 'none');
     
  }).bind(this)
 
})

$("#add").on('click', function(){
  let text =  $("#texta").val();
  let l = $(this).closest('.list');
  let k = l.find(".listItems")
  $(k).append(`<div draggable="true" class="listItem">
  <p>${text}</p>
  <i class="fas fa-pen"></i>
   </div>`)
 })

 

























//  <div class="boards">
//  <div class="boardsMenus">
//      <div class="boardsMenu">
//      <div class="bmItem">
//          <i class="fab fa-trello"></i>
//          <p>Boards</p>
//      </div>
//      <div class="bmItem">
//          <i class="fas fa-home"></i>
//          <p>Home</p>
//      </div>
//  </div>
//  <div class="teams">
//          <h4>Teams</h4>
//          <div class="cmItem">
//              <i class="fas fa-plus"></i>
//              <p>Create a Team</p>
//      </div>
//  </div>
//  </div>

//  <div class="boardProjects">
//      <h4>  <i class="fas fa-user-alt"> </i> <p>Personal Boards</p></h4>
//     <div class="projects">
//       <div class="boardProject">
//          <h4>Photography project</h3>
//      </div>
//      <div class="boardProject">
//          <h4>trash</h4>
//      </div>
//      <div class="cnBoard">
//          <h5>Create new board...</h5>
//      </div>
//     </div>
//  </div>
// </div>
