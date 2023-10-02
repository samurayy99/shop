// commonImports.js

// commonImports.js

import $ from 'jquery';

export function redirectTo(path) {
    window.location.href = path;
}

export function isAdmin(user) {
    return user && user.role === 'admin';
}
