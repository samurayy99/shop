/*=========================================================================================
  File Name: auth-register.js
  Description: Auth register js file.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: PIXINVENT
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(function () {
    ('use strict');

    var assetsPath = '../../../app-assets/',
        registerMultiStepsWizard = document.querySelector('.register-multi-steps-wizard'),
        pageResetForm = $('.auth-register-form'),
        select = $('.select2'),
        creditCard = $('.credit-card-mask'),
        expiryDateMask = $('.expiry-date-mask'),
        cvvMask = $('.cvv-code-mask'),
        mobileNumberMask = $('.mobile-number-mask'),
        pinCodeMask = $('.pin-code-mask');

    if ($('body').attr('data-framework') === 'laravel') {
        assetsPath = $('body').attr('data-asset-path');
    }

    // jQuery Validation
    // --------------------------------------------------------------------
    if (pageResetForm.length) {
        pageResetForm.validate({
            /*
            * ? To enable validation onkeyup
            onkeyup: function (element) {
              $(element).valid();
            },*/
            /*
            * ? To enable validation on focusout
            onfocusout: function (element) {
              $(element).valid();
            }, */
            rules: {
                'register-username': {
                    required: true
                },
                'register-email': {
                    required: true,
                    email: true
                },
                'register-password': {
                    required: true
                }
            }
        });
    }

    // multi-steps registration
    // --------------------------------------------------------------------

    // Horizontal Wizard
    if (typeof registerMultiStepsWizard !== undefined && registerMultiStepsWizard !== null) {
        var numberedStepper = new Stepper(registerMultiStepsWizard),
            $form = $(registerMultiStepsWizard).find('form');
        $form.each(function () {
            var $this = $(this);
            $this.validate({
                rules: {
                    username: {
                        required: true
                    },
                    email: {
                        required: true
                    },
                    password: {
                        required: true,
                        minlength: 8
                    },
                    'confirm-password': {
                        required: true,
                        minlength: 8,
                        equalTo: '#password'
                    },
                    'first-name': {
                        required: true
                    },
                    'home-address': {
                        required: true
                    },
                    addCard: {
                        required: true
                    }
                },
                messages: {
                    password: {
                        required: 'Enter new password',
                        minlength: 'Enter at least 8 characters'
                    },
                    'confirm-password': {
                        required: 'Please confirm new password',
                        minlength: 'Enter at least 8 characters',
                        equalTo: 'The password and its confirm are not the same'
                    }
                }
            });
        });

        $(registerMultiStepsWizard)
            .find('.btn-next')
            .each(function () {
                $(this).on('click', function (e) {
                    var isValid = $(this).parent().siblings('form').valid();
                    if (isValid) {
                        numberedStepper.next();
                    } else {
                        e.preventDefault();
                    }
                });
            });

        $(registerMultiStepsWizard)
            .find('.btn-prev')
            .on('click', function () {
                numberedStepper.previous();
            });

        $(registerMultiStepsWizard)
            .find('.btn-submit')
            .on('click', function () {
                var isValid = $(this).parent().siblings('form').valid();
                if (isValid) {
                    alert('Submitted..!!');
                }
            });
    }

    // select2
    select.each(function () {
        var $this = $(this);
        $this.wrap('<div class="position-relative"></div>');
        $this.select2({
            // the following code is used to disable x-scrollbar when click in select input and
            // take 100% width in responsive also
            dropdownAutoWidth: true,
            width: '100%',
            dropdownParent: $this.parent()
        });
    });

    // credit card

    // Credit Card
    if (creditCard.length) {
        creditCard.each(function () {
            new Cleave($(this), {
                creditCard: true,
                onCreditCardTypeChanged: function (type) {
                    const elementNodeList = document.querySelectorAll('.card-type');
                    if (type != '' && type != 'unknown') {
                        //! we accept this approach for multiple credit card masking
                        for (let i = 0; i < elementNodeList.length; i++) {
                            elementNodeList[i].innerHTML =
                                '<img src="' + assetsPath + 'images/icons/payments/' + type + '-cc.png" height="24"/>';
                        }
                    } else {
                        for (let i = 0; i < elementNodeList.length; i++) {
                            elementNodeList[i].innerHTML = '';
                        }
                    }
                }
            });
        });
    }

    // Expiry Date Mask
    if (expiryDateMask.length) {
        new Cleave(expiryDateMask, {
            date: true,
            delimiter: '/',
            datePattern: ['m', 'y']
        });
    }

    // CVV
    if (cvvMask.length) {
        new Cleave(cvvMask, {
            numeral: true,
            numeralPositiveOnly: true
        });
    }

    // phone number mask
    if (mobileNumberMask.length) {
        new Cleave(mobileNumberMask, {
            phone: true,
            phoneRegionCode: 'US'
        });
    }

    // Pincode
    if (pinCodeMask.length) {
        new Cleave(pinCodeMask, {
            delimiter: '',
            numeral: true
        });
    }

    // Include this block of code in your existing auth-register.js file

    // Target the form using its action attribute
    var formAction = $('#registration-form').data('action');  // Assume you've set this data-action in your Blade template

    $('form[action="' + formAction + '"]').on('submit', function (e) {
        e.preventDefault();  // Prevent the default form submission behavior

        // Disable the register button to prevent multiple submissions
        $(this).find('button[type="submit"]').attr('disabled', 'disabled');

        $.ajax({
            url: formAction,  // URL for the AJAX POST request
            type: 'POST',
            data: $(this).serialize(),  // Serialize the form data for the AJAX request
            dataType: 'json',  // Expected return type of the response
            success: function (response) {
                if (response.success) {
                    window.location.href = formAction.replace('registration', 'login');  // Redirect to login page, assuming a similar URL structure
                } else {
                    toastr.error(response.message || 'Registration failed. Please try again.');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('AJAX error:', textStatus, errorThrown);
                toastr.error('An error occurred during registration. Please try again.');
            },
            complete: function () {
                // Re-enable the register button
                $(this).find('button[type="submit"]').removeAttr('disabled');
            }.bind(this)
        });
    });
});