jQuery(document).ready(function () {
    $('#btnclicked').click(function () {
        console.log("I click");
    });
    $('#btnfadeout').click(function () {
        $('#txtfadeout').fadeOut(100);
    });
    $('#btnappend').click(function () {
        $('#txtappend').append(" Test me");
    });
    $('#btnfadein').click(function () {
        $('#txtfadein').hide().fadeIn();
    });
    $('#tbtnadd').click(function () {
        $('#txtadd').addClass("rdtxt");
    });
    $('#btnhtml').click(function () {
        console.log($('#txthtml').html());
    });
    $('#btntext').click(function () {
        console.log($('#txttext').text());
    });
    $('#btnval').click(function () {
        console.log($('#txtval').val());
        console.log($('#btnval').val());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    });
    $('#btnhide').click(function () {
        $('#txthide').hide();
    });
    $('#btnshow').click(function () {
        $('#txthide').show();
    });
    $('#btnslide').click(function () {
        $('#txtslide').hide().slideDown("slow", function () {
            // Animation complete.
        });
    });
});