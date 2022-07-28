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

//    28FR 