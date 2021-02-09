$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    items:1,
})
var open = false;
$(".menu-toggle").click(function(){
    $(".menu ul li").toggle();
    if(!open)
    {
        open = true;
        $(this).html(`Veja as Categorias <i class="fa fa-chevron-up" aria-hidden="true"></i>`)
    }else{
        open = false;
        $(this).html(`Veja as Categorias <i class="fa fa-chevron-down" aria-hidden="true"></i>`)
    }
        

        
});