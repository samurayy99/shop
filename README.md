# Webshop Redesign Collaboration Guide

## Project Overview
- **Type**: E-commerce Webshop
- **Objective**: Transition to a Single Page Application (SPA) with a focus on minimalistic design, user-friendliness, and maximized server-side operations for enhanced security and anonymity.

## Technical Stack
- **Backend**: Laravel (PHP)
- **Frontend**: Transition from jQuery to a suitable SPA framework.



## Detailed Technical Architecture

### Backend Architecture
- **Framework**: Laravel (PHP)
- **Authentication**: Managed through `AuthController.php` (username, password, captcha).
- **Bitcoin Transactions**: Managed by `BitcoinCheck.php`.
- **Validation**: Utilizes Laravel’s built-in validation, including captcha validation.
- **Routes**: Defined within `web.php`
- **Middleware**: Includes custom middleware for specific functionalities.
- **Service Providers**: Potential usage of custom service providers.

### Frontend Architecture
- **Technologies**: JavaScript (jQuery), HTML/CSS (Blade templates).
- **Captcha**: Implemented within login forms.
- **Assets**: CSS and JS stored within `/public/app-assets/`.
- **Client-Side Logic**: Managed by scripts like `/public/app-assets/js/scripts/pages/auth-login.js`.

### File and Directory Structure
- **Backend Logic**: `app/Http/Controllers/AuthController.php`.
- **Frontend Forms**: `/resources/views/auth/login.blade.php` and `/resources/views/auth/register.blade.php`.
- **Main Layout**: `/resources/views/base.blade.php`.
- **JavaScript Logic**: `/public/app-assets/js/scripts/pages/auth-login.js`.
- **Middleware**: `app/Http/Middleware/`.

## Vision for Future SPA Redesign
- **Showcase Products**: Display products with images, descriptions, and prices.
- **Shopping Cart**: Enable users to add products to a shopping cart.
- **Product & Category Management**: Managed through the admin area, with a crucial presentation on the one-page layout.

## Future Layout Details
- **Hero Header**: No navigation bar, menu items integrated into the hero section.
- **About Us**: Section just below the hero header.
- **Product Category Buttons**: Two attractive buttons with category pictures as backgrounds, opening a modal displaying products from the selected category upon click.

## Authentication Details
- **Mechanism**: Username, password, and captcha without utilizing email.

## Bitcoin and Ticket Functionalities
- **Bitcoin Transactions**: Managed by `BitcoinCheck.php`.
- **Ticket System**: [Details to be explored and documented]

## MVC Architecture in the Webshop
- **Models**: Represent data structures, perform data processing, and define relationships.
- **Views**: Display data to the user, generating HTML sent to the browser.
- **Controllers**: Handle user requests, coordinate models and views.
- **Routes**: Define URLs and map them to specific controller actions.
- **Middleware**: Filter HTTP requests entering the application.
- **Service Providers**: Bootstrap the Laravel application.
- **Eloquent ORM**: Interact with the database using object-oriented syntax.
- **Artisan Console**: Provide helpful commands for common tasks.
- **Blade Templating Engine**: Allow the use of plain PHP code in views.

## Security and Anonymity
- **Data Transmission**: Ensure secure data transmission using HTTPS and other secure protocols.
- **Data Storage**: Safeguard stored data with encryption and secure access controls.
- **User Authentication**: Ensure robust and secure user authentication mechanisms.
- **Bitcoin Transactions**: Ensure the security and anonymity of Bitcoin transactions.

## Note 
- This README is designed to assist ChatGPT in understanding the project structure, goals, and technical architecture for the redesign collaboration. It will be deleted post-redesign.

Disclaimer: This is written from a beginner user. Chatgpt should always do its own research. DYOR!
