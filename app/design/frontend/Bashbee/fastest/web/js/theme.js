require(['jquery', 'jquery.bootstrap'], function ($) {
    $('a.showcart').click(function(e){
        e.preventDefault();
        $('.block-minicart').css({"right": "0"})
        $('.minicart-wrapper').addClass('active');
    });
    $('div.minicart-overlay').click(function(){
        resetMinicart();
    });
    $(document).on('click', '#minicart-close', function(){ 
        resetMinicart();
    });
    $(document).on('click', '#mini-cart-btn-checkout', function(){ 
        resetMinicart();
    });
    $(document).on('click', '.close-minicart', function(){ 
        resetMinicart();
    });
    function resetMinicart(){
        $('.block-minicart').css({"right": "-380px"})
        $('.minicart-wrapper').removeClass('active');
    }
    $('.page-header .header.links').clone().appendTo('#store\\.links');
});