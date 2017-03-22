# Heuricode 

  A Web-based Programming Supplementary and Assessment Tool for Novice Programmers. With this tool a novice programmer who is new to C/C++/Java will be guided in learning the programming language he choose. Giving a particular Subject Area, Counting types of errors, showing his/her training progress, and etc. is the way Heuricode will guide the novice programmer

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Composer
Node
Bower
XAMPP/WAMPP 
Virtual host
### Installing

1. Clone the project
2. Update the dependencies using Composer.
	- to do this open command prompt. go to the root of this project ang type "composer update".
3. create virtual host for this project..

4. create a database

NOTE: You should have a knowledge in laravel to follow steps 4 & 5.

5. Create and configure .env file 
	-you can use the .env-sample located at the root folder to help you configure the database name, hostname, password and etc. 
6. Migrate tables and seed data
	- open cmd, go to the root folder and type 'php artisan migrate'. After the migration you are now ready to seed the constant data. Now type to the comand line 'php artisan db:seed'. (Without the quotes).

7. Install modules and components using Node and Bower
	- Open cmd, go to the root folder of the project and type 'npm install' without the quotes.
	- While still using the cmd, go to public folder and type 'bower install' without the quotes

