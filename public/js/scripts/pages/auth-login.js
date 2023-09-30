$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();
        let form = $(this);
        let username = $("#username").val();
        let password = $("#password").val();
        let captcha = $("#loginCaptcha").val();


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