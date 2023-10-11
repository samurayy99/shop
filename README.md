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

## Undesired Functionalities to be Removed
- **FAQ Functionality**: Dynamic FAQ management and display functionality.
- **Top Seller Functionality**: Managing and displaying top-seller products.
- **Product Stock Functionality**: Displaying product stock information.
- **Custom CSS Controller**: Dynamic CSS changes, especially controlling color from the admin panel.
- **News Functionality**: Related to 'news.blade.php' functionality for posting and displaying news.
- **Jabber Functionality**: Sending messages and managing Jabber settings.

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

## Views in the Webshop

### Admin Views
- **backupManager.blade.php**: Manages backup operations.
- **bitcoinSettings.blade.php**: Handles Bitcoin-related settings.
- **dashboard.blade.php**: Manages the dashboard view and related functionalities.
- **faq/edit.blade.php**: Manages FAQs.
- **faq/index.blade.php**: Manages FAQs.
- **jabber.blade.php**: Handles Jabber-related functionalities.
- **news.blade.php**: Manages news articles and updates.
- **order/show.blade.php**: Manages customer orders.
- **order/view.blade.php**: Manages customer orders.
- **product/add.blade.php**: Manages products.
- **product/edit.blade.php**: Manages products.
- **product/manage.blade.php**: Manages products.
- **product/view.blade.php**: Manages products.
- **settings.blade.php**: Manages general settings.
- **support/tickets.blade.php**: Manages customer support tickets.
- **support/viewTicket.blade.php**: Manages customer support tickets.
- **transaction/view.blade.php**: Manages transactions.
- **user/edit.blade.php**: Manages user accounts.
- **user/view.blade.php**: Manages user accounts.

### Auth Views
- **login.blade.php**: Manages authentication.
- **register.blade.php**: Manages authentication.

### Cashin Views
- **pay.blade.php**: Manages cash-in operations.
- **view.blade.php**: Manages cash-in operations.

### Custom Views
- **css.blade.php**: Manages CSS styles.

### Error Views
- **401.blade.php**: Handles 401 errors.
- **403.blade.php**: Handles 403 errors.
- **404.blade.php**: Handles 404 errors.
- **419.blade.php**: Page expired.
- **429.blade.php**: Too many requests.
- **500.blade.php**: Internal server error.
- **503.blade.php**: Service unavailable.

### Support Views
- **addTicket.blade.php**: Adds a new ticket.
- **tickets.blade.php**: Lists all tickets.
- **viewTicket.blade.php**: Views a specific ticket.

### User Views
- **orders.blade.php**: Manages user orders.
- **requestDelete.blade.php**: Manages delete requests.
- **settings.blade.php**: Manages user settings.
- **vieworder.blade.php**: Views a specific order.

### Main Views
- **base.blade.php**: Base view.
- **faq.blade.php**: FAQ view.
- **flash-message.blade.php**: Flash message view.
- **navBar.blade.php**: Navigation bar view.
- **news.blade.php**: News view.
- **welcome.blade.php**: Welcome view.

### Error Layout Views
- **errors/illustrated-layout.blade.php**: Illustrated error layout view.
- **errors/layout.blade.php**: Error layout view.
- **errors/minimal.blade.php**: Minimal error layout view.

### Shop Views
- **shop/checkout.blade.php**: Checkout view.
- **shop/entry.blade.php**: Entry view.
- **shop/product.blade.php**: Product view.
- **shop/topseller.blade.php**: Top seller view.


## Controllers in the Webshop

- **BackupController.php**: Manages backup operations.
- **BitcoinSettingsController.php**: Handles Bitcoin-related settings.
- **DashboardController.php**: Manages the dashboard view and related functionalities.
- **FAQController.php**: Manages FAQs.
- **JabberController.php**: Handles Jabber-related functionalities.
- **NewsController.php**: Manages news articles and updates.
- **OrderController.php**: Manages customer orders.
- **ProductCategoryController.php**: Manages product categories.
- **ProductController.php**: Manages products.
- **ProductStockController.php**: Manages product stock levels.
- **SettingsController.php**: Manages general settings.
- **TicketController.php**: Manages customer support tickets.
- **TransactionsController.php**: Manages transactions.
- **UserController.php**: Manages user accounts.
- **AuthController.php**: Manages authentication.
- **CashinController.php**: Manages cash-in operations.
- **CheckoutController.php**: Manages the checkout process.
- **Controller.php**: Base controller.
- **CSSController.php**: Manages CSS styles.
- **DeleteRequestController.php**: Manages delete requests.

## Security and Anonymity
- **Data Transmission**: Ensure secure data transmission using HTTPS and other secure protocols.
- **Data Storage**: Safeguard stored data with encryption and secure access controls.
- **User Authentication**: Ensure robust and secure user authentication mechanisms.
- **Bitcoin Transactions**: Ensure the security and anonymity of Bitcoin transactions.

## Note 
- This README is designed to assist ChatGPT in understanding the project structure, goals, and technical architecture for the redesign collaboration. It will be deleted post-redesign.

Disclaimer: This is written from a beginner user. Chatgpt should always do its own research. DYOR!
