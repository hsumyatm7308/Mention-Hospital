$(document).ready(function(){
    // console.log('');


    //Start Header Section 

    // start banner 
    $(".carousel").carousel({
        interval:1000
    })
    // end banner 
    // End Header Section 

    // start info section 
    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();
        console.log(getscrollpoint)

        if(getscrollpoint >= 220){
            $("infotext").addClass('fromlefts');
            $('.infopic').addClass('fromrights')
        }else{
            $("infotext").removeClass('fromlefts');
            $('.infopic').removeClass('fromrights')
        }
    })
    // end info section 
   });



//    start vedio 
$("#videos").click(function(){

    var getmodal = $(this).data("bs-target");
    var getvideosrc = $(this).data("video");
    var videooulwithauto = getvideosrc + "?autoplay=1";

    $(getmodal+ " iframe").attr("src",videooulwithauto)

    $(getmodal + "button.btn-close").click(function(){
        $(getmodal + " iframe").attr("src",getvideosrc)
    });

    $(getmodal).click("hidden.bs.modal", function(){
        $(getmodal + " iframe").attr("src",getvideosrc)
    })

})
// end vedio 

//  start premises section 
$('#light-slider').lightSlider({
    item:4,
    speed: 600, //ms'
        // auto: true,
        loop: true,
      slideMove:1
}).play();
// end premises section 

// start pricing section 
$(window).scroll(function(){
    let getscroll = $(this).scrollTop();
    console.log(getscroll);

    if(getscroll >= 2450){
        $(".cardones").addClass("movelefts")
        $(".cardtwos").addClass("moverights")
        $(".cardthrees").addClass("movebottoms")
    }else{
        $(".cardones").removeClass("movelefts")
        $(".cardtwos").removeClass("moverights")
        $(".cardthrees").removeClass("movebottoms")
    }
})

// end pricing section 

// start join us section 
$("#accordion").accordion();
// end join us section 

// start footer section 
$("#getyear").text(new Date().getUTCFullYear());
// end footer section 





// By Jquery 
// start progress 
// $(window).scroll(function(){
//     var getprogress = $("#progress");
//     var getprogressvalues = $("#progressvalues");
//     var getscrolltop = $(this).scrollTop();

//     console.log(getscrolltop);

//     var getscrollheight = $(document).height();
//     console.log(getscrollheight)
//     var getclientheight = $(window).height();
//     console.log(getclientheight)
//     var calcheight = getscrollheight - getclientheight;
//     console.log(calcheight)
//     var getfinalheight = Math.round(getscrolltop * 100 / calcheight)
//     console.log(getfinalheight);

//     getprogressvalues.text(`${getfinalheight}%`);

//     getprogress.css("background",`conic-gradient(steelblue ${getfinalheight}% ,#eee) ${getfinalheight}%`)

//     // the whole pj's height  - clien height(current view height)
//     //() scrool top * 100   )    /   ( the whole pj's height  - clien height(current view height))

// });
// end progress 

// By Javascript 
var getprogress = document.getElementById("#progress");
var getprogressvalues = document.getElementById("#progressvalues");
var  getscrollheight =document.documentElement.scrollHeight
 console.log(getscrollheight);
 var getclientheight = document.documentElement.clientHeight;
 console.log(getclientheight);
 var calcheight = getscrollheight - getclientheight;
 var getfinalheight = Math.round(getscrollheight * 100 / calcheight)
 console.log(getfinalheight);

//  getprogressvalues.text(`${getfinalheight}%`);

    //  getprogress.css("background",`conic-gradient(steelblue ${getfinalheight}% ,#eee) ${getfinalheight}%`)

    // getprogressvalues.text();


    getfinalheight.innerText = `${getfinalheight}%`;
    getfinalheight.style.background = `conic-gradient(steelblue ${getfinalheight}%, #eee) ${getfinalheight}%`
 
   

