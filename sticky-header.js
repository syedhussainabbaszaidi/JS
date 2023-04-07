<style>
.sticky {
  position: fixed;
  top: 0;
  left: 0px;
  background: #fff;
  animation: slideDown 0.5s forwards;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0px 100px;
}


@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
</style>

    <script>
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.header').height()) {
        $('.header').addClass('sticky');
        //$('header').css('margin-top', $('.header').height());
        } 
        else {
        $('.header').removeClass('sticky');
        //$('header').css('margin-top', '');
        }
    });
    </script>
