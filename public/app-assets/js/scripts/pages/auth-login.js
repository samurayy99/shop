$(document).ready(function () {
    $('#loginModal .auth-login-form').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        $.ajax({
            url: '/auth/login',  // Updated URL to match Laravel route
            type: 'POST',
            data: $(form).serialize(),
            beforeSend: function () {
                $('#login-button').prop('disabled', true);
            },

            success: function (response) {
                if (response.status === 200) {  // Updated condition to match Laravel response
                    window.location.href = '/admin'; // Redirect to your admin panel
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
