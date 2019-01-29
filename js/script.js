$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });



  loadGallery(true, 'a.thumbnail');

   //This function disables buttons when needed
   function disableButtons(counter_max, counter_current){
       $('#show-previous-image, #show-next-image').show();
       if(counter_max == counter_current){
           $('#show-next-image').hide();
       } else if (counter_current == 1){
           $('#show-previous-image').hide();
       }
   }

   /**
    *
    * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
    * @param setClickAttr  Sets the attribute for the click handler.
    */

   function loadGallery(setIDs, setClickAttr){
       var current_image,
           selector,
           counter = 0;

       $('#show-next-image, #show-previous-image').click(function(){
           if($(this).attr('id') == 'show-previous-image'){
               current_image--;
           } else {
               current_image++;
           }

           selector = $('[data-image-id="' + current_image + '"]');
           updateGallery(selector);
       });

       function updateGallery(selector) {
           var $sel = selector;
           current_image = $sel.data('image-id');
           $('#image-gallery-image').attr('src', $sel.data('image'));
           disableButtons(counter, $sel.data('image-id'));
       }

       if(setIDs == true){
           $('[data-image-id]').each(function(){
               counter++;
               $(this).attr('data-image-id',counter);
           });
       }
       $(setClickAttr).on('click',function(){
           updateGallery($(this));
       });
   }

});
