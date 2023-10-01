$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();

        // Fetch form data
        const username = $("#username-field").val();
        const password = $("#password-field").val();
        const captcha = $("#captcha").val(); // Ensure this is the correct ID for the captcha input field

        // Debug logging
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Captcha:", captcha);
        console.log("Captcha value sent in AJAX request:", captcha);

        // Validate form data
        if (username === "" || password === "" || captcha === "") {
            alert("Username, password, and captcha are required.");
            return;
        }

        // AJAX call for login
        $.ajax({
            type: 'POST',
            url: '/auth/login',
            data: {
                _token: $('meta[name="csrf-token"]').attr('content'),
                username: username,
                password: password,
                captcha: captcha // Ensure this matches the name in the server-side validation rules
            },
            success: function (response) {
                console.log("AJAX Success:", response);
                window.location.href = '/home';
            },
            error: function (jqXHR) {
                console.error('AJAX error:', jqXHR.statusText);
                console.error('Validation errors:', jqXHR.responseJSON.errors);
                if (jqXHR.status === 422) {
                    // Replace the captcha image
                    $("#captcha-img").html(jqXHR.responseJSON.new_captcha);
                }
            }
        });
    });
});