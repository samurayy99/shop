// Import imagesLoaded
import imagesLoaded from 'imagesloaded';

document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  // Setup CSRF token for AJAX POST requests
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const pageLoginForm = document.querySelector('.auth-login-form');

  if (pageLoginForm) {
    // Add your validation logic here
    pageLoginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(pageLoginForm);
      const actionUrl = pageLoginForm.getAttribute('action');

      fetch(actionUrl, {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': csrfToken
        },
        body: formData,
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.success) {
          // Check if data.redirect is not undefined
          if (data.redirect) {
            // Load the new page content without a full page reload
            fetch(data.redirect, {
              credentials: 'same-origin'
            })
            .then(response => response.text())
            .then(html => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
              document.querySelector('#content-wrapper').innerHTML = doc.querySelector('#content-wrapper').innerHTML;
            });
          } else {
            console.error('Redirect URL is undefined.');
          }
        } else {
          console.error(data ? data.message : 'Response is undefined.');
        }
      })
      .catch((error) => {
        console.error("AJAX error: ", error);
        console.error('An error occurred. Please try again.');
      });
    });
  }
});