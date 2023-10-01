$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();

        const username = $("#username-field").val();
        const password = $("#password-field").val();
        const captcha = $("#captcha").val();

        if (username === "" || password === "" || captcha === "") {
            alert("All fields are required.");
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
            error: function (jqXHR) {
                if (jqXHR.status === 422) {
                    $("#captcha-img").html(jqXHR.responseJSON.new_captcha);
                }
            }
        });
    });
});