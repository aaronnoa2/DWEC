$( document).ready(function() {
   $('#1').css('opacity','0');
   $('#start').click(function () {
       leftt = $('#1').css('left');
       console.log(leftt);
       $('#1').animate({opacity:1});
       $("#1").animate({left: parseInt(leftt) - 200 + 'px'});
   });
});