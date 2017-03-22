# Heuricode 

  A Web-based Programming Supplementary and Assessment Tool for Novice Programmers. With this tool a novice programmer who is new to C/C++/Java will be guided in learning the programming language he choose. Giving a particular Subject Area, Counting types of errors, showing his/her training progress, and etc. is the way Heuricode will guide the novice programmer

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

### Screenshots
	I have some screenshots here that you could expect after installing Heuricode


#### Home Page

![17036540_1268408509912434_187158146_o](https://cloud.githubusercontent.com/assets/17507366/24222468/28d824dc-0f8d-11e7-96e1-76454de7d224.png)

![17091129_1268410566578895_188626961_o](https://cloud.githubusercontent.com/assets/17507366/24222417/f15a0fd4-0f8c-11e7-95ff-3153ef9ca883.png)

#### Problem Details
![17091011_1268410893245529_469525612_o](https://cloud.githubusercontent.com/assets/17507366/24222486/44f23b12-0f8d-11e7-8543-1136e7346d9e.png)

	The user will be given a problem to solve in order to assess his skills in programming..
	He/she may choose Programming language in this page. C, C++ or Java.

#### Solving The Problem
![17036122_1268411173245501_603313425_o](https://cloud.githubusercontent.com/assets/17507366/24222497/4f01cb04-0f8d-11e7-99c7-2977f4e90ac7.png)

	This is the expected view of the page when the user starts the problem

#### Showing the Output of the Source code
![17092980_1268411779912107_2047156083_o](https://cloud.githubusercontent.com/assets/17507366/24222511/5c59fb6e-0f8d-11e7-8e5c-1f2e8c7f7064.png)
	
	This is what the user expect to see when he/she compiles the code. Output will be displayed. :)
	
#### Badge
![17035814_1268412993245319_374446526_o](https://cloud.githubusercontent.com/assets/17507366/24222587/8a0a7764-0f8d-11e7-9ab4-5a546adf6565.png)
	
	The user will be given a badge based on different conditions. This is the view when the user received a badge
#### Result
![17015146_1268413453245273_505748738_o](https://cloud.githubusercontent.com/assets/17507366/24222600/90b9f7ba-0f8d-11e7-8fa3-6bc4da8706fa.png)
	
	Heuricode will show the user the result of the test. Heuricode can also give him/her a Tips and Reinforcement.
	
#### Statistical Progress
![17035966_1268414366578515_1673537432_o](https://cloud.githubusercontent.com/assets/17507366/24222608/96a34488-0f8d-11e7-92bc-d22a8f066680.png)

	There is a link in Heuricode that will let the user review his progress in learning programming

#### Badge Review
![17093205_1268414483245170_1208481716_o](https://cloud.githubusercontent.com/assets/17507366/24222613/9cdd0f14-0f8d-11e7-8036-560fe75f0114.png)
		
	The user can also review all the badges he/she achieved.

#### Login
![17091256_1268407289912556_98876329_o](https://cloud.githubusercontent.com/assets/17507366/24222396/dcba873e-0f8c-11e7-8e75-cfcf99118a0b.png)

#### Register
![17092893_1268407746579177_1030377618_o](https://cloud.githubusercontent.com/assets/17507366/24222404/e50a91ea-0f8c-11e7-8be0-4ce714322d07.png)



## Multiplayer

	Heuricode also has a Multiplayer feature. This will be unlocked when the user got level 20 in all subject area. 
	With this,they can compete with other online players. The first one to solve the problem is the winner. 
	
	Developer can change the user's level in the database to quickly experience multiplayer feature. 
	
	I used AngularFire to handle this feature.
	
