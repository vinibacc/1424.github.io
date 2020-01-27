$(window).scroll(function() {
    if ($(this).scrollTop() < ($('#ar').offset().top) - 300) {
        $(".nav-title").text('Estande Interativo');
    }
    if ($(this).scrollTop() > ($('#ar').offset().top) - 300) {
        $(".nav-title").text('Realidade Aumentada');
        $('#ar .hide').removeClass('hide');
    }
    if ($(this).scrollTop() > ($('#tour').offset().top) - 300) {
        $(".nav-title").text('Tour Virtual 360Â°');
    }
});


$('#tourtags #ra').click(function() {
    $("#modal1 h3").text('Realidade Virtual');
    $("#modal1 p").text('As filmagens e fotos em 360Â° sÃ£o compatÃ­veis com equipamentos de Realidade Virtual que possibilitam' +
        ' uma imersÃ£o ao usuÃ¡rio, esse poderÃ¡ ter uma prÃ©via de experiÃªncias a serem usufruÃ­das no seu local.');
    $("#modal1 iframe").attr('src', 'https://www.youtube.com/embed/KMpdkfzlS2E')
    $("#modal1 img").css('display', 'none');
    $("#modal1 iframe").css('height', '200px');
});
$('#tourtags #ms').click(function() {
    $("#modal1 h3").text('Midias Sociais');
    $("#modal1 p").text('Os vÃ­deos e fotos em 360Â° podem ser usados nas diversas mÃ­dias sociais, como: Facebook, YouTube em' +
        'sua forma nativa e tambÃ©m Ã© possÃ­vel usar no Instagram e WhatsApp.');
    $("#modal1 iframe").attr('src', 'https://www.youtube.com/embed/fdJ90Y0SyD8')
    $("#modal1 iframe").css('height', '200px');
    $("#modal1 img").css('display', 'none');
});

$('#tourtags #gsv').click(function() {
    $("#modal1 h3").text('Google Street View');
    $("#modal1 p").text('O conteÃºdo do Street View tem duas origens: o Google e empresas colaboradoras. PossuÃ­mos o selo' +
        'Google Trusted que nos certifica como fotÃ³grafos de confianÃ§a da Google.');
    $("#modal1 iframe").attr('src', 'https://www.google.com/maps/embed?pb=!4v1571690776064!6m8!1m7!1sCAoSLEFGMVFpcFBrU0VSbDdUM2JiQlQ3aWtwQjZqRXdFNXN2SmxrZ2xvckhINXk5!2m2!1d-31.728781030958!2d-52.382998726639!3f242.37116987533076!4f-4.579722450483018!5f0.7820865974627469')
    $("#modal1 iframe").css('height', '240px');
    $("#modal1 img").css('display', 'block');
});

}