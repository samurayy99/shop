/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/js/auth-register.js ***!
  \***************************************/
(function () {
  if (window.authRegisterHasRun) return;
  window.authRegisterHasRun = true;
  $('#registerForm').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      data: $(this).serialize(),
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      success: function success(response) {
        if (response.success) {
          window.location.href = response.redirect;
        } else {
          toastr.error(response.message);
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error('An error occurred. Please try again.');
      }
    });
  });
})();
/******/ })()
;