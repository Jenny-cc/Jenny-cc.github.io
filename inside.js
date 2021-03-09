window.onload = function(){

    //change flower word
    function changeColor(){
        $('.flowers').css('color','red');
    }
    $('.flowers').click(changeColor);
    }

    // change sky image
    $(function() {
        $('.image-container').click(function() {
              $('.image-container').css('background-image', 'url(../pictures/cotton.jpg)');
        });
    })
    
