 Webshop is built on Laravel, which is a PHP framework that follows the MVC (Model-View-Controller) architectural pattern. Here's a brief      
  overview of how this architecture works in your application:                                                                                       
                                                                                                                                                     
    1 Models: Models represent the data structure of your application. They interact with the database, perform data processing, and define          
      relationships between different data entities. In your webshop, you likely have models for products, categories, orders, users, transactions,  
      backups, and FAQs.                                                                                                                             
    2 Views: Views are responsible for displaying data to the user. They are the templates that generate the HTML that is sent to the browser. In    
      your current multi-page application, each route returns a different view. In the single-page application, there will be a single view that     
      dynamically updates based on the data.                                                                                                         
    3 Controllers: Controllers handle user requests and coordinate the models and views. They receive input from the user, interact with the models  
      to process the data, and then pass the data to the views to be displayed. In your webshop, you have controllers for handling products,         
      categories, orders, users, transactions, backups, and FAQs.                                                                                    
    4 Routes: Routes define the URLs of your application and map them to specific controller actions. In your current application, you have routes   
      for each page. In the single-page application, the routes will return data instead of views.                                                   
    5 Middleware: Middleware provides a way to filter HTTP requests entering your application. For example, Laravel includes a middleware that       
      verifies the user of your application is authenticated.                                                                                        
    6 Service Providers: Service providers are the central place of all Laravel application bootstrapping. Your own application, as well as all of   
      Laravel's core services are bootstrapped via service providers.                                                                                
    7 Eloquent ORM: Laravel includes Eloquent, an Object-Relational Mapper (ORM) that makes it easy to interact with your database using             
      object-oriented syntax.                                                                                                                        
    8 Artisan Console: Laravel includes Artisan, a command-line interface that provides helpful commands for common tasks such as migrating your     
      database or generating boilerplate code for new controllers.                                                                                   
    9 Blade Templating Engine: Laravel includes Blade, a simple yet powerful templating engine. Unlike other PHP templating engines, Blade does not  
      restrict you from using plain PHP code in your views.       

    Key Admin Controllers:
* 		BackupController.php
    * Functions: createBackup, deleteBackup, downloadBackup, index
    * Usages: backups, fileName
* 		BitcoinSettingsController.php
    * Functions: index, sendBitcoin, update
    * Usages: request, status, transaction
* 		DashboardController.php
    * Functions: create, destroy, edit, index, show, store, update
    * Usages: request
* 		OrderController.php
    * Functions: create, destroy, edit, index, show, store, update
    * Usages: order, request
* 		ProductCategoryController.php
    * Functions: create, destroy, edit, index, show, store, update
    * Usages: category, product, products, removedProducts, request, validated
* 		ProductController.php
    * Functions: create, destroy, destroyById, edit, handleProductRequest, index, show, store, toggleListing, update, updateOrder
    * Usages: product, productIds, request, validated
* 		SettingsController.php
    * Functions: create, destroy, edit, index, show, store, update
    * Usages: appName, css_background_url, css_primary_color, pgp_key, request
* 		TicketController.php
    * Functions: add, closeOpenTicket, create, destroy, index, show, store, update, updateUserBalance
    * Usages: messages, order, request, ticket, ticketMessage, ticket_id, user, user_id, validated
* 		TransactionsController.php
    * Functions: create, deepSearch, destroy, edit, index, show, store, update
    * Usages: client, method, query, request, status, transaction
* 		UserController.php
    * Functions: create, destroy, destroyRequest, edit, index, show, store, update
    * Usages: request, user, validated
 

      

      
