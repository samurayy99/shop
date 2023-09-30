$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();
        let form = $(this);
        let username = $("#login-username").val();  // Make sure this ID matches the Blade file
        let password = $("#login-password").val();  // Make sure this ID matches the Blade file
        let captcha = $("#loginCaptcha").val();  // This is correct as per your Blade file

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
            url: "/auth/login", // Make sure this URL matches your backend route
            type: "POST",
            data: {
                username: username,
                password: password,
                captcha: captcha,
                _token: $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                // Your success logic here, for example:
                window.location.href = '/home';
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Your error logic here, for example:
                if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
                    alert(jqXHR.responseJSON.message);
                } else {
                    alert('Login failed');
                }
            }
        });
    });
});
