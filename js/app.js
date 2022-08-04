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