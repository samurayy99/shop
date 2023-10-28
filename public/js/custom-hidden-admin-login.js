/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./resources/js/custom-hidden-admin-login.js ***!
  \***************************************************/
$('#hiddenAdminLoginForm').submit(function (e) {
  e.preventDefault();
  var formData = $(this).serialize();
  if (!formData) {
    toastr.error('Form data is missing. Please check your form inputs.');
    return;
  }
  $.ajax({
    url: $(this).attr('action'),
    type: 'POST',
    data: formData,
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
/******/ })()
;