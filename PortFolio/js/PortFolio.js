$(function () {
    // $('.description_button').on('click', function () {
    //     var offset = $('.description').offset() || { top: 0, left: 0 };
    //     $(window).scrollTop(offset.top);
    // });
    // $('.myprofile_button').on('click', function () {
    //     var offset = $('.myprofile').offset() || { top: 0, left: 0 };
    //     $(window).scrollTop(offset.top);
    // });
    $('.hedarmenulist a').click(function(){
        let speed = 500;
        let target= $('.' + $(this).attr("class").replace('_button', ''));
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position + 170}, speed, "swing");
        // alert(href);
        return false;
      });
});
