// Import jQuery
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';

$(function () {
    'use strict';

    var pageLoginForm = $('.auth-login-form');

    if (pageLoginForm.length) {
        pageLoginForm.validate({
            rules: {
                'username': {
                    required: true
                },
                'password': {
                    required: true
                },
                'captcha': {
                    required: true
                }
            },
            messages: {
                'username': {
                    required: "Please enter your username."
                },
                'password': {
                    required: "Please enter your password."
                },
                'captcha': {
                    required: "Please enter the captcha."
                }
            },
            submitHandler: function (form) {
                $.ajax({
                    url: $(form).attr('action'),
                    type: 'POST',
                    data: $(form).serialize(),
                    success: function (response) {
                        if (response.success) {
                            // Load the new page content without a full page reload
                            $.get(response.redirect, function (data) {
                                $('#content-wrapper').html($(data).find('#content-wrapper').html());
                            });
                        } else {
                            console.error(response.message);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.error("AJAX error: ", textStatus, errorThrown);
                        console.error('An error occurred. Please try again.');
                    }
                });
            }
        }); // Added closing parenthesis and brace here
    }
}); // Added closing parenthesis here