   jQuery(document).ready(function() {

    const $grilleButtons = jQuery('.cg3m-grille-button');
    const $imgToggle = jQuery('img.img-toggle');

    $grilleButtons.click(function() {
        
        if ($imgToggle.attr('src').includes('CG3M-System-Featured-1200x735.png')) {
            $imgToggle.attr('src', 'https://cdn.shopify.com/s/files/1/0795/9203/0486/files/CG3M-System-Featured-NoGrille-1200x735.png?v=1693493647');
        } else {
            $imgToggle.attr('src', 'https://cdn.shopify.com/s/files/1/0795/9203/0486/files/CG3M-System-Featured-1200x735.png?v=1693493647');
        }

        
        $grilleButtons.removeClass('grille-button-active');

       
        jQuery(this).addClass('grille-button-active');
    });
});
