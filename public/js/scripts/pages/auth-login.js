// auth-login.js
$(document).ready(function () {
    $("#loginModal .auth-login-form").on("submit", function (e) {
        e.preventDefault();
        const form = $(this); // Custom: Store the form element in a variable
        $("#login-button").prop("disabled", true); // Custom: Disable the login button during the request

        $.ajax({
            url: "/auth/login", // Custom: Adjust this URL to match your specific Laravel POST route for login
            type: "POST",
            data: form.serialize(),
            success: function (res) {
                // Custom: Implement success logic
            },
            error: function (err) {
                // Custom: Implement error handling
            }
        });
    });
});