// Part 1: Initial Login AJAX Call
$(document).ready(function () {
    // Assuming your login form has the id 'login-form'
    $('#login-form').on('submit', function (e) {
        e.preventDefault();
        var form = this;

        $.ajax({
            url: '/login',  // This is assuming your login POST route is '/login'
            type: 'POST',
            data: $(form).serialize(),
            beforeSend: function () {
                $('#login-button').prop('disabled', true);  // Disabling login button before request
            },
            success: function (response) {
                if (response.success) {
                    // Assuming the new page content is wrapped in a div with id 'content-wrapper'
                    $('#content-wrapper').load('/dashboard #content-wrapper>*', ""); // Assuming redirect to '/dashboard'
                } else {
                    toastr.error(response.message);  // Displaying error message
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX error: ", textStatus, errorThrown);
                toastr.error('An error occurred. Please try again.');
            },
            complete: function () {
                $('#login-button').prop('disabled', false);  // Re-enabling login button
            }
        });
    });
});

// Part 2: Modal Loading on Click
$(document).ready(function () {
    // Assuming your login button has the id 'login-button'
    $('#login-button').on('click', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/login/modal',  // This is assuming you have a route '/login/modal' that returns the login modal view
            method: 'GET',
            success: function (response) {
                // Assuming the modal body has the id 'login-modal-body'
                $('#login-modal-body').html(response);
                // Assuming the modal itself has the id 'login-modal'
                $('#login-modal').modal('show');
            }
        });
    });
});
