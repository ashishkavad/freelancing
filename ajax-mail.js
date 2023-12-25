/*---------------------------------
   Contact Form ajax email send
---------------------------------*/
(function($) {
    'use strict';

    //  Regular Expressions
    var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var expLettersOnly = /^[A-Za-z ]+$/;
    var phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    //  Validates the fileds
    function validateField ( field ) {
        var errorText = "",
            error = false,
            value = field.val(),
            siblings = field.siblings(".alert-error");

        // Test the name field minium length geter then 2 and number check
        if ( field.attr("name") === "name" ) {
            if ( !validateLength( value, 2 ) ) {
                error = true;
                errorText += '<i class="fa fa-info-circle"></i> The name is too short!<br>';
                jQuery('input[name="name"]').addClass('input-error');
            } else {
                jQuery('input[name="name"]').removeClass('input-error');
            }
            if ( !expLettersOnly.test( value ) ) {
                error = true;
                errorText += '<i class="fa fa-info-circle"></i> The name can contain only letters and spaces!<br>';
                jQuery('input[name="name"]').addClass('input-error-2');
            } else {
                jQuery('input[name="name"]').removeClass('input-error-2');
            }
        }

        // Test the email field
        if ( field.attr("name") === "email" ) {
            if ( !expEmail.test( value ) ) {
                error = true;
                errorText += '<i class="fa fa-info-circle"></i> Enter correct email address!<br>';
                jQuery('input[name="email"]').addClass('input-error');
            } else {
                jQuery('input[name="email"]').removeClass('input-error');
            }
        }

        // Test the phone number field
        if ( field.attr("name") === "phone") {
            if ( !phonePattern.test(value)) {
                    error = true;
                    errorText += '<i class="fa fa-info-circle"></i> Enter correct Phone Number!<br>';
                    $('input[name="phone"]').addClass('input-error');
            } else {
                $('input[name="phone"]').removeClass('input-error');
            }
        }

        if (field.attr("name")==="message") {
            if (!validateLength(value,10)) {
                error = true;
                errorText += '<i class="fa fa-info-circle"></i> Enter correct Message Most 9 charectcher!<br>';
                jQuery('textarea[name="message"]').addClass('input-error');
            }else {
                jQuery('textarea[name="message"]').removeClass('input-error');
            }
        }

        // Display the errors
        siblings.html(errorText);
    }

    //  Checks if a field has the correct length
    function validateLength ( fieldValue, minLength ) {
        return ( jQuery.trim( fieldValue ).length > minLength );
    }

    //  Validate form When type in input field
    jQuery( '.contact-form' ).on( 'keyup', 'input.required', function() {
        validateField( jQuery(this) );
    });

    //  Validate form When type in input field
    jQuery( '.contact-form' ).on( 'keyup', 'textarea.required', function() {
        validateField( jQuery(this) );
    });
    

    //  AJAX call
    jQuery('.contact-form').submit(function(e) {
        e.preventDefault();

        //call the check input valid or not
        jQuery('.contact-form input.required, .contact-form textarea.required').each(function( index, el ) {
            validateField( jQuery(this) ); 
        });

        // check if has class any error-class into the field
        if ( jQuery('.contact-form input, .contact-form textarea').hasClass('input-error') || jQuery('.contact-form input, .contact-form textarea').hasClass('input-error-2') ) {
            return false;
        }

    });

})(jQuery);