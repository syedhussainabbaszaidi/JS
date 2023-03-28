$(document).on('click', '.globo-formbuilder-open', function () {
    let product_name = $(this).parent('div').find('h3.product-name').text();
    let treatment_name = $(this).parent('div').find('input.treatment_name:checked').val();
    
    $(this).parent('div').find('.globo-form-publish-modal input#110611-text-2').val(product_name);
    $(this).parent('div').find('.globo-form-publish-modal input#110611-text-3').val(treatment_name);

    let check_popup = setInterval(() => {
        if($(this).parent('div').find('.globo-form-publish-modal').length) {
            $(this).parent('div').find('.globo-form-publish-modal input#110611-text-2').val(product_name);
            $(this).parent('div').find('.globo-form-publish-modal input#110611-text-3').val(treatment_name);
            clearInterval(check_popup);
        }
    }, 100);
})

//textbox disabled 

$(document).on('click', '.globo-formbuilder-open', function () {
    let product_name = $(this).parent('div').find('h3.product-name').text();
    let treatment_name = $(this).parent('div').find('input.treatment_name:checked').val();
    
    $(this).parent('div').find('.globo-form-publish-modal input#110611-text-2').val(product_name).css({
        'pointer-events': 'auto',
        'cursor': 'not-allowed',
    }).attr('readonly','readonly');
    $(this).parent('div').find('.globo-form-publish-modal input#110611-text-3').val(treatment_name).css({
        'pointer-events': 'auto',
        'cursor': 'not-allowed',
    }).attr('readonly','readonly');

    let check_popup = setInterval(() => {
        if($(this).parent('div').find('.globo-form-publish-modal').length) {
            $(this).parent('div').find('.globo-form-publish-modal input#110611-text-2').val(product_name).css({
                'pointer-events': 'auto',
                'cursor': 'not-allowed',
            }).attr('readonly','readonly');
            $(this).parent('div').find('.globo-form-publish-modal input#110611-text-3').val(treatment_name).css({
                'pointer-events': 'auto',
                'cursor': 'not-allowed',
            }).attr('readonly','readonly');
            clearInterval(check_popup);
        }
    }, 100);
})
