$(document).ready(function () {
    $('#loginModal .auth-login-form').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        $.ajax({
            url: '/auth/login',  // This URL matches your Laravel POST route for login
            type: 'POST',
            data: $(form).serialize(),
            beforeSend: function () {
                $('#login-button').prop('disabled', true);
            },
            success: function (response) {
                if (response.status === 200) {  // This should match the JSON response from your Laravel backend
                    window.location.href = response.redirect; // Redirect to the URL provided by the server
                } else {
                    toastr.error(response.message);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX error: ", textStatus, errorThrown);
                toastr.error('An error occurred. Please try again.');
            },
            complete: function () {
                $('#login-button').prop('disabled', false);
            }
        });
    });
});