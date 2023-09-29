// auth-login.js
$(document).ready(function () {
    $("#loginModal .auth-login-form").on("submit", function (e) {
        e.preventDefault();
        const form = $(this);
        $("#login-button").prop("disabled", true);

        let captchaResponse = $("input[name='captcha']").val();

        $.ajax({
            url: "/auth/login",
            type: "POST",
            data: form.serialize() + "&captcha=" + captchaResponse,
            success: function (res) {
                if (res.success) {
                    window.location.href = res.redirectUrl;
                } else {
                    alert(res.message);
                }
            },
            error: function (err) {
                alert('An error occurred. Please try again.');
            }
        });
    });
});