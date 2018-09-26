let audio = document.getElementById("shuter");
let landAudio = document.getElementById("landAudio");
let flowerAudio = document.getElementById("flowerShuter");
let wildfileSound = document.getElementById("wildfileSound");
let portSound = document.getElementById("portAudio");

// start of home
function takePhoto() {
    $('.photoContainer').css('display', 'none')
    setTimeout(() => {
        $('.flash').css('display', 'inline')

    }, 2000)

    setTimeout(() => {

        $('.flash').css('display', 'none')
    }, 3000)

    setTimeout(() => {
        audio.play();

    }, 2500)
    setTimeout(() => {
        $('.app').append(`<div class="home">
        <div class="text">
                    <h1>Kirmanj Mzuri</h1>
                    <h2>photographer</h2>
            </div>
        </div>  `)
    }, 3000)

}

$("#home").on('click', () => {
    $('.flower').css('display', 'none')
    $('.wildContainer').css('display', 'none');
    $('.addFrom').css('display', 'none');
    $('.bio').css('display', 'none')
    $('.portrait').css('display', 'none');
    $('.photoContainer').css('display', 'none')
    $("body").css("background-image", "url(js/IMG_3345.JPG)").css("background-size", "cover");
    takePhoto();
})
$("#home").click();

// end of home






//start of landsapce code
let landCon = false;
$("#landScape").on('click', () => {
    $('.wildContainer').css('display', 'none');
    $('.home').css('display', 'none')
    $('.portrait').css('display', 'none');
    $('.bio').css('display', 'none')
    $('.flower').css('display', 'none')
    $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )').css('background-size', 'cover')
    $('.photoContainer').css('display', 'inline')
    axios.get('http://localhost:3000/photos')
        .then(function (photos) {
            photos.data.forEach(photo => {
                axios.get('http://localhost:3000/categories')
                    .then(function (cats) {
                        cats.data.forEach(cat => {
                            if (cat.id == photo.categoryId) {
                                if (cat.id == 1) {
                                    if (landCon == false) {
                                        landContainer();
                                        landCon = true;
                                    }
                                    landPhoto(photo.title, photo.url, photo.description, photo.date, cat.name);
                                }
                            }
                        })
                    });
            });
        });
})

function landTake() {
    setTimeout(() => {
        $('.photoContainer').css('display', 'none');
        $('.flash').css('display', 'inline')
    }, 200)
    setTimeout(() => {
        $('.photoContainer').css('display', 'inline');
        $('.flash').css('display', 'none')
    }, 500)
    setTimeout(() => {
        $('.photoContainer').css('display', 'inline');
        $('.flash').css('display', 'inline')
    }, 700)
    setTimeout(() => {
        $('.photoContainer').css('display', 'inline');
        $('.flash').css('display', 'none')
    }, 900)
    setTimeout(() => {
        $('.flash').css('display', 'none')
    }, 1000)
    setTimeout(() => {
        landAudio.play();
    }, 500)
}

function landContainer() {
    $('.app').append(`
    <div class="photoContainer">
            <h1>Landscape</h1>
            <div class="images"> </div>
    </div>`);
}

function landPhoto(title, url, desc, date, cat) {
    landTake();
    $('.images').append(`<div class="image">
    <img src="${url}" alt="">
    <div class="imageCap">
        <h3>${cat}</h3>
        <h4>${title}</h4>
        <h6>${date}</h6>
        <h4>${desc}</h4>
      </div>
      </div>`);
    imgCapDisp();
}

function imgCapDisp() {
    $('.images .image img').mouseover(function () {
        let p = $(this).closest('div');
        let text = p.find('.imageCap');
        $(text).css("margin-top", '-100px').css("transition", "all 1s")
        $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )')
        $('.images .image img').mouseleave(function () {
            $('.images .image .imageCap').css("margin-top", '0px').css("transition", "all 1s")
        });
    });
};
//end of landsapce code

//start of Flower code
let folCon = false;
$('#flower').on('click', function dis() {
    if (folCon == false) {
        axios.get('http://localhost:3000/photos')
            .then(function (photos) {
                photos.data.forEach(photo => {
                    axios.get('http://localhost:3000/categories')
                        .then(function (cats) {
                            cats.data.forEach(cat => {
                                if (cat.id == photo.categoryId) {
                                    if (cat.id == 2) {
                                        if (folCon == false) {
                                            folContainer();
                                            folCon = true;
                                        }
                                        volTake();
                                        folPhoto(photo.title, photo.url, photo.description, photo.date, cat.name);
                                    }
                                }
                            })
                        });
                });
            });
    }

    volTake();
})

function volTake() {
    $('.photoContainer').css('display', 'none');
    $('.portrait').css('display', 'none');
    $('.wildContainer').css('display', 'none');
    $('.bio').css('display', 'none')
    $('.addFrom').css('display', 'none');
    $('.home').css('display', 'none');
    $('.flower').css('display', 'inline');
    $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )').css('background-size', 'cover')
    setTimeout(() => {
        $('.timer').css('display', 'inline')
    }, 400)
    setTimeout(() => {
        $('.timer').css('display', 'none')
    }, 600)
    setTimeout(() => {
        $('.flash').css('display', 'inline')
    }, 800)
    setTimeout(() => {
        $('.flash').css('display', 'none')
    }, 1200)
    setTimeout(() => {
        $('.flash').css('display', 'inline')
    }, 1500)
    setTimeout(() => {
        $('.flash').css('display', 'none')
    }, 1700)
    setTimeout(() => {
        flowerAudio.play();
    }, 500)

}

function folPhoto(title, url, desc, date, cat) {

    $('.flImages').append(`<div class="flImage">
    <img src="${url}" alt="">
    <div class="imageCap">
        <h3>${cat}</h3>
        <h4>${title}</h4>
        <h6>${date}</h6>
        <h4>${desc}</h4>
    </div>
    </div>`);
    volCapDisp();
    $('.imageCap').css("visibility", 'hidden')
}

function folContainer() {
    $('.app').append(`
    <div class="flower">  
        <div class="fhead"> <h1>Flowers</h1></div>
        <div class="flImages">
    </div> </div>
    `);
}

function volCapDisp() {
    $(' img').mouseover(function () {
        let p = $(this).closest('div');
        let text = p.find('.imageCap');
        $(text).css("visibility", 'visible').css("width", '99%')
        $(text).css("margin-top", '-100px').css("transition", "all 1s")
        $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )')
        $('img').mouseleave(function () {
            $('.imageCap').css("margin-top", '0px').css("visibility", 'hidden').css("transition", "all 0.5s")
        });
    });
};
//end of Flower code


//start of WildLife code
let arrCounter = 1;
let wilCon = false;
$('#wildlife').on('click', function dis() {


    if (wilCon == false) {
        axios.get('http://localhost:3000/photos')
            .then(function (photos) {
                photos.data.forEach(photo => {
                    axios.get('http://localhost:3000/categories')
                        .then(function (cats) {
                            cats.data.forEach(cat => {
                                if (cat.id == photo.categoryId) {
                                    if (cat.id == 3) {
                                        if (wilCon == false) {
                                            wilContainer();
                                            wilCon = true;
                                        }
                                        wilPhoto(photo.title, photo.url, photo.description, photo.date, cat.name);
                                        wilTake();
                                        arrCounter--;
                                    }
                                }
                            })
                        });
                });
            });
    }
    wilTake();
})


function wilContainer() {
    $('.app').append(`
    <div class="wildContainer">
    <div class="whead"> <h1>Wildlife</h1></div>
    <div class="wildfile"></div></div>
    `);
}



let outer = 4;
let outerFlage = false;
let inner = 2;
let wilRows = 0;
let cols = 0;



function wilPhoto(title, url, desc, date, cat) {
    $('.wildfile ').css('margin', '0px 5% 0px 5%');
    $('.whead').css('margin', '-25px 5% 0px 5%');

    if (outer == 4 && inner > 0) {
        if (outerFlage == false) {
            $('.wildfile').append(`<div class="col10 row rowd${wilRows}"></div>`);
            falge = true;
               console.log(outer, inner, desc)
        }

         
        if (inner == 2) {
            $(`.rowd${wilRows}`).append(`<div class="col7"> 
            <img src="${url}" alt="">
            <div class="imageCap">
                <h4>${cat}</h4>
                <h5>${title}</h5>
                <h6>${date}</h6>
                <h5>${desc}</h5></div>`);
              
            inner--;
        }else if(inner == 1) {
            $(`.rowd${wilRows}`).append(`<div class="col3"> 
            <img src="${url}" alt="">
            <div class="imageCap">
                <h4>${cat}</h4>
                <h5>${title}</h5>
                <h6>${date}</h6>
                <h5>${desc}</h5></div>`);
            inner = 3;
            outer=3;
            wilRows++;
            outerFlage = false;
        }
       
      
    }else if (outer == 3 && inner > 0) {
        if (outerFlage == false) {
            $('.wildfile').append(`<div class="col10 row rowd${wilRows}"></div>`);
            falge = true;
        } 
        
        
        if (inner == 3) {
            $(`.rowd${wilRows}`).append(`<div class="bee col4">
            <img src="${url}" alt="">
            <div class="imageCap">
                <h4>${cat}</h4>
                <h5>${title}</h5>
                <h6>${date}</h6>
                <h5>${desc}</h5>
            </div>  </div> 
            `);
            inner--;
        }else if (inner == 2) {
            $(`.rowd${wilRows}`).append(`<div class="colum col6 cold${cols}  hours">
            <div class="f">
            <img src="${url}" alt="">
            <div class="imageCap">
                <h4>${cat}</h4>
                <h5>${title}</h5>
                <h6>${date}</h6>
                <h5>${desc}</h5>
            </div>
            </div>  
            </div> 
            `);
            inner--;
        }else if (inner == 1) {
            $(`.cold${cols}`).append(`
            <div class="t">
            <img src="${url}" alt="">
            <div class="imageCap">
                <h4>${cat}</h4>
                <h5>${title}</h5>
                <h6>${date}</h6>
                <h5>${desc}</h5>
                </div></div>`);
            inner = 3;
            outer = 2;
            wilRows++;
            cols++;
            outerFlage = false;
        }
    }else if (outer == 2 && inner > 0) {
        if (outerFlage == false) {
            $('.wildfile').append(`<div class="col10 row rowd${wilRows}"></div>`);
            falge = true;
        }

        if (inner == 3) {
            $(`.rowd${wilRows}`).append(`
            <div class="col2"> <img src="${url}" alt="">
            <div class="imageCap">
                <h4>${cat}</h4>
                <h5>${title}</h5>
                <h6>${date}</h6>
                <h5>${desc}</h5>
            </div></div> `);
            inner--;
        }

        if (inner == 2) {
            $(`.rowd${wilRows}`).append(`
            <div class="col6"> 
            <img src="${url}" alt="">
            <div class="imageCap">
                <h4>${cat}</h4>
                <h5>${title}</h5>
                <h6>${date}</h6>
                <h5>${desc}</h5>
            </div></div>`);
            inner--;
        }

        if (inner == 1) {
            $(`.rowd${wilRows}`).append(`
        <div class="col2"> <img src="${url}" alt="">
        <div class="imageCap">
            <h4>${cat}</h4>
            <h5>${title}</h5>
            <h6>${date}</h6>
            <h5>${desc}</h5>
        </div></div> `);
            inner = 1;
            outer = 1;
            outerFlage = false;
            wilRows++;
        }
    }else if (outer == 1 && inner > 0) {
        $('.wildfile').append(`<div class="col10 last rowd${wilRows}">
            <img src="${url}" alt="">
            <div class="imageCap">
                <h4>${cat}</h4>
                <h5>${title}</h5>
                <h6>${date}</h6>
                <h5>${desc}</h5>
            </div>
            </div>`);
        outer = 4;
        inner = 2;
        wilRows++;
    }


    wilCapDisp();
    $('.imageCap').css("display", 'none').css("height", '110px')

}



function wilTake() {

    $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )').css('background-size', 'cover')
    setTimeout(() => {
        $('.wildfile img').css('width', '150%')
        wildfileSound.play();
    }, 900)
    $('.wildContainer').css('display', 'inline');
    setTimeout(() => {
        $('.wildfile img').css('width', '200%')
    }, 1200)
    setTimeout(() => {
        $('.wildfile img').css('width', '150%')
    }, 1600)
    setTimeout(() => {
        $('.wildfile img').css('width', '99%')
    }, 1800)
    $('.photoContainer').css('display', 'none');
    $('.bio').css('display', 'none')
    $('.flower').css('display', 'none');
    $('.portrait').css('display', 'none');
    $('.addFrom').css('display', 'none');
    $('.home').css('display', 'none');
    $('.wildlife').css('display', 'inline');

};

function wilCapDisp() {
    $('.wildfile .col10 img').mouseover(function () {
        let p = $(this).closest('div');
        let name = p.attr('class');

        if (name == "f") {
            $(`.${name}`).css("margin-bottom", '12px')
        }

        let text = p.find('.imageCap');
        $(text).css("display", 'block').css("width", '99%').css("transition", "all 1s")
        $(text).css("margin-top", '-122px').css("transition", "all 1s")
        $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )')
        $(p).mouseleave(function () {
            $('.imageCap').css("margin-top", '0px').css("display", 'none').css("transition", "all 0.5s")
            if (name == "f") {
                $(`.${name}`).css("margin-bottom", '0px')
            }
        });
    });
};



//end of WildLife code

//start of Portraiture code
let porCon = false;
$('#portrait').on('click', function dis() {
    if (porCon == false) {
        $('.photoContainer').css('display', 'none');
        $('.flower').css('display', 'none');
        $('.bio').css('display', 'none')
        $('.wildContainer').css('display', 'none');
        $('.addFrom').css('display', 'none');
        $('.home').css('display', 'none');
        $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )').css('background-size', 'cover')
        axios.get('http://localhost:3000/photos')
            .then(function (photos) {
                photos.data.forEach(photo => {
                    axios.get('http://localhost:3000/categories')
                        .then(function (cats) {
                            cats.data.forEach(cat => {
                                if (cat.id == photo.categoryId) {
                                    if (cat.id == 4) {
                                        if (porCon == false) {
                                            porContainer();
                                            porCon = true;
                                        }
                                        porPhoto(photo.title, photo.url, photo.description, photo.date, cat.name);
                                        porTake();
                                    }
                                }
                            })
                        });
                });
            });
    }
    porTake();
})

function porContainer() {
    $('.app').append(`
    <div class="portrait">
    <div class="fhead"> <h1>Portraiture</h1></div>
    <div class="colum col10 porCol"> </div>
    </div>
  
    `);

    $('.porCol').css('margin-left', '4%')
}
let count = 3;
let rows = 0;

function porTake() {
    setTimeout(() => {
        portSound.play();
    }, 500)
    setTimeout(() => {
        $('.flash').css('display', 'inline')
    }, 500)
    setTimeout(() => {
        $('.flash').css('display', 'none').css('height', '2000')
    }, 1100)
    setTimeout(() => {
        portTake();
    }, 600)
    $('.wildContainer').css('display', 'none');
    $('.home').css('display', 'none')
    $('.bio').css('display', 'none')
    $('.addFrom').css('display', 'none');
    $('.flower').css('display', 'none')
    $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )')
    $('.photoContainer').css('display', 'none');
    $('.portrait').css('display', 'inline');
};

function porPhoto(title, url, desc, date, cat) {
    if (count == 3) {
        $('.porCol').append(`<div class=" row row${rows}"> </div>`);
    }
    if (count > 0) {
        $(`.row${rows}`).append(`
        <div class="portimg col3">
        <img src="${url}" alt="">
        <div class="imageCap">
            <h4>${cat}</h4>
            <h5>${title}</h5>
            <h6>${date}</h6>
            <h5>${desc}</h5>
        </div>
        </div>
         `);
        count--;
        if (count == 0) {
            count = 3
            rows++;
        }
    }
    porCapDisp();
    $('.imageCap').css("visibility", 'hidden').css("height", '120px')

}

function porCapDisp() {
    $(' img').mouseover(function () {
        let p = $(this).closest('div');
        let text = p.find('.imageCap');
        $(text).css("visibility", 'visible').css("width", '100%')
        $(text).css("margin-top", '-110px').css("transition", "all 1s")
        $('body').css('background', 'linear-gradient(90deg, #7C7B78 , #61727A )')
        $('img').mouseleave(function () {
            $('.imageCap').css("margin-top", '0px').css("visibility", 'hidden').css("transition", "all 0.5s")
        });
    });
};
//end of Portraiture code





/* Start of Add Photo */

let forFlage = false;

$("#addPhoto").on('click', function () {

    $('.wildContainer').css('display', 'none');
    $('.home').css('display', 'none')
    $('.portrait').css('display', 'none');
    $('.flower').css('display', 'none')
    $('.photoContainer').css('display', 'none');
    $('.bio').css('display', 'none')
    $('.addFrom').css('display', 'flex');
    if (forFlage == false) {
        forFlage=true;

        $('.app').append(`
        <form class="addFrom">
        <label>Title of Image</label>
        <input id="title" type="text" placeholder="Enter Title of Image">
        <label>URL of Image</label>
        <input id="image" type="text" placeholder="Enter URL of Image">
        <label>Date of Image</label>
        <input id="dateOfImg" type="date" placeholder="Enter Date of Image">
        <label>Description of Image</label>
        <input id="desc" type="text" placeholder="Enter Description of Image">
        <label> Category</label>
        <select id="category">
            <option value="lanscape">Landscape</option>
            <option value="flower">Flower</option>
            <option value="wildlife">Wildlife</option>
            <option value="portrait">Portraiture</option>
        </select>
        <div class="btn">
        <button type="button" id="add" onclick="create()" ">ADD</button>
        <button>CANCEL</button>
        </div>
    </form>`);
    }

})

let postId=2;


function create() {
    let catId;
    let newTitle = $('#title');
    let newUrl = $('#image');
    let newDate = $('#dateOfImg');
    let newDesc = $('#desc');
    let newCat = $('#category');
    postId++;
    if (newCat.val() == "lanscape") {
        catId = 1;
    }

    if (newCat.val() == "flower") {
        catId = 2;
    }

    if (newCat.val() == "wildlife") {
        catId = 3;
    }

    if (newCat.val() == "portrait") {
        catId = 4;
    }
    axios.post('http://localhost:3000/photos', {
            id: postId,
            title: newTitle.val(),
            url: newUrl.val(),
            categoryId: catId,
            description: newDesc.val(),
            date: newDate.val()
        })
        .then(function (res) {
            console.log(res);
            newTitle.innerHTML = "";
            newUrl.innerHTML = "";
            newDate.innerHTML = "";
            newDesc.innerHTML = "";
        })
}






/* End of Add Photo */



/* start of BIO */

let bioFlage = false;

$("#bio").on('click', function () {

    $('.wildContainer').css('display', 'none');
    $('.home').css('display', 'none')
    $('.portrait').css('display', 'none');
    $('.flower').css('display', 'none')
    $('.photoContainer').css('display', 'none')
    $('.bio').css('display', 'inline')
    $('.addFrom').css('display', 'none');
    $("body").css("background-image", "url(js/IMG_3345.JPG)").css("background-size", "cover");
    if (bioFlage == false) {
        $('.app').append(` <div class="bio">
    <div class="firstLine col9">
         <div class="biotext col3">
         <p>I am Mzuri, 20 years old, the oldest boy in a 6 member family, I am a student at Salahadin university, in Software Engineering dept, always try to new things and learn from them,  believe in that big goals achieved in hard working</p>
         </div>
         <div class="bioImg col3">
             <img src="images/IMG_4345.JPG">
         </div>
         <div class="abtext col3">
             <p>Nothing gimme more energy than taking a photo, being a photographer is my childhood dream, for me, the nicest music in the world is the shutter sound of my camera, happiest time is that when I capture an image that drowns by god and being  happier when showing others my photos .</p>
         </div>
    </div></div>`);
        bioFlage = true;
    }

})


/* End of BIO */