// Part 1: Initial Login AJAX Call
$(document).ready(function () {
    $('#login-form').on('submit', function (e) {
        e.preventDefault();
        var form = this;

        $.ajax({
            url: $(form).attr('action'),  // Assuming your form's action attribute is set to the correct endpoint
            type: 'POST',
            data: $(form).serialize(),
            beforeSend: function () {
                $('#login-button').attr('disabled', 'disabled');
            },
            success: function (response) {
                if (response.success) {
                    $.get(response.redirect, function (data) {
                        $('#content-wrapper').html($(data).find('#content-wrapper').html());
                    });
                } else {
                    toastr.error(response.message);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX error: ", textStatus, errorThrown);
                toastr.error('An error occurred. Please try again.');
            },
            complete: function () {
                $('#login-button').removeAttr('disabled');
            }
        });
    });
});

// Part 2: Modal Loading on Click
$(document).ready(function () {
    $('#login-button').on('click', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/auth/login',  // Update this URL based on your routes
            method: 'GET',
            success: function (response) {
                $('#login-modal-body').html(response);
                $('#login-modal').modal('show');
            }
        });
    });
});
