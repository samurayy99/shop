import './commonImports';


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
        } else if (!captcha) {
            alert('Captcha is required');
            return;
        }
        if (!captcha || captcha.length < 5) {
            alert("Invalid Captcha");
            return false;
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
            error: function (jqXHR) {
                console.error('AJAX error:', jqXHR.statusText);
                console.error('Validation errors:', jqXHR.responseJSON.errors);

                // Automatically refresh the captcha image
                $.get('/refresh-captcha', function (data) {
                    $("#captcha-img").attr('src', data);
                });
            }
        });
    });
});
