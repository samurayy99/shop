// resources/js/app.js
import $ from 'jquery';
import 'jquery-validation';
import feather from 'feather-icons';

// Make jQuery and Feather Icons globally available
window.$ = window.jQuery = $;
window.feather = feather;

import "./vendors.min.js";
import "./auth-login.js";
import "./auth-register.js";
import "./custom.js";
import "./custom-hidden-admin-login.js"; // Add this line