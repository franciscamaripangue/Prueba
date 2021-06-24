$(function(){
 $("a").click(function(event){
     if (this.hash !== "") {
         event.preventDefault();
         var gato = this.hash;

         $("html,body").animate({
             scrollTop: $(gato).offset().top}
         }, 800, funtion(){
             Window.location.hash = gato:
         });

     }
 });

});

$(function () {
    $('[data-toggle="popover"]').popover()
    })
    