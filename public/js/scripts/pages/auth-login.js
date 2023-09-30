$("#login-form").submit(function (e) {
    e.preventDefault();
    let form = $(this);
    let username = $("#login-username").val();
    let password = $("#login-password").val();
    let captcha = $("#loginCaptcha").val();

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
            // Log the validation errors
            console.error('Validation errors:', jqXHR.responseJSON.errors);
            if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
                alert(jqXHR.responseJSON.message);
            } else {
                alert('Login failed');
            }
        }
    });
});