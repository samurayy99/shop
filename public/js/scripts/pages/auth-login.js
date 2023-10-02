$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();

        const username = $("#username-field").val();
        const password = $("#password-field").val();
        const captcha = $("#captcha").val();

        // Validate the data before sending the request
        if (!username || username.length > 30) {
            alert('Username is required and should not exceed 30 characters');
            return;
        } else if (!password || password.length < 6) {
            alert('Password is required and should be at least 6 characters');
            return;
        } else if (!captcha || captcha.length < 5) {  // Replace '5' with the actual minimum length of your captchas
            alert('Captcha is required and should not be less than 5 characters');
            return;
        }

        $.ajax({
            type: 'POST',
            url: '/auth/login',
            data: {
                _token: $('meta[name="csrf-token"]').attr('content'),
                username: username,
                password: password,
                captcha: captcha
            },
            success: function (response) {
                window.location.href = '/home';
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('AJAX error:', textStatus, errorThrown, jqXHR.responseJSON);
                if (jqXHR.status === 422) {
                    $("#captcha-img").html(jqXHR.responseJSON.new_captcha);
                } else if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
                    alert(jqXHR.responseJSON.message);
                } else {
                    alert('Login failed');
                }
            }
        });
    });
});