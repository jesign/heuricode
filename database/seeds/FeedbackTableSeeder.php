<?php

use Illuminate\Database\Seeder;

class FeedbackTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('feedbacks')->insert(array(
		    array(
		    	'id' => '1',
		    	'description' => 'Remember that the modulo operator(%) will return the remainder of 2 numbers. It will be helpful in finding out if a number is odd or even.'),

	    	array('id' => '2',
	    			    	'description' => '1: It is better to set the condition to vowels since there are only 5 vowels which are a,e,i,o and u. \n\n
	    			    	2: The function isalpha(your String here) will check if the input is an alphabet. This function can only be used if you have the string library(string.h) added to your code.'),
	    	array('id' => '3',
	    			    	'description' => 'The operational operators <, <=, >, >= and == are very helpful in the problem in comparison situations.'),
	    	array('id' => '4',
	    			    	'description' => 'The Logical operators AND(&&), OR(||) and NOT(!) will be very helpful in setting the conditions for each color.'),
	    	array('id' => '5',
	    			    	'description' => 'The Logical operators AND(&&), OR(||) and NOT(!) will be very helpful in setting the conditions for each color.'),
	    	array('id' => '6',
	    			    	'description' => 'The conditions are already given as stated above. You only need to set the logic using the correct logical operators. '),
	    	array('id' => '7',
	    			    	'description' => 'The modulo operator(%) will be very helpful in checking if a number has a remainder or not.'),
	    	array('id' => '8',
	    			    	'description' => 'You can create multiple if else statements in the format: if(condition1){ \n//do condition 1\n}else if(condition2){\n//do condition 2
	    										\n}else if(condition3){\n//do condition 3\n}'),
	    	array('id' => '9',
	    			    	'description' => 'You can create multiple if else statements in the format: if(condition1){ \n//do condition 1\n}else if(condition2){\n//do condition 2
	    										\n}else if(condition3){\n//do condition 3\n}'),
	    	array('id' => '10',
	    			    	'description' => 'You will need to check if the first input is 4 in order to get a second input.'),
	    	array('id' => '11',
	    			    	'description' => 'Remember to use the modulo operator (%). It is very helpful in checking if a number is odd or even.'),
	    	array('id' => '12',
	    			    	'description' => 'The modulo operator is very helpful in getting the digit of every number. All you need is to configure the while loop to loop towards every digit.'),
	    	array('id' => '13',
	    			    	'description' => 'For loop is created in the format:\nfor(int num=0;num<how many times you want to loop;num++ ){\n
	    	              						//code that will be run depending on the loop\n	
	    										}'),
	    	array('id' => '14',
	    			    	'description' => 'The while loop has the format:\n
	    									while(condition for the loop to stop){\n\t
	    	     								//code to execute for the loop\n
	    	       
	    										}'),
			array('id' => '15',
					    	'description' => 'The first integer can be used as initializer for the for loop while the second number can be used as the limit.'),
	    	array('id' => '16',
	    			    	'description' => 'A do while is done in the format:\n 
	    									do\n
	    									{\n\t
	    	   								statement(s);\n
	    									}while( condition );'),
	    	array('id' => '17',
	    			    	'description' => 'The modulo operator(%) will be helpful in navigating through each digit.'),
	    	array('id' => '18',
	    			    	'description' => 'You do not need to create arrays if you know how to use the modulo operator(%).'),
	    	array('id' => '19',
	    			    	'description' => 'For loop is created in the format:\nfor(int num=0;num<how many times you want to loop;num++ ){\n\t
	    			    	//code that will be run depending on the loop\n}'),
	    	array('id' => '20',
	    			    	'description' => 'You just need to create a do while loop that will loop 5 times with each loop having to ask user input.'),
	    	array('id' => '21',
	    			    	'description' => 'You just need to add a condition to check if a number is divisible by 3 within the loop.'),
	    	array('id' => '22',
	    			    	'description' => 'You need to add a condition in your while loop to check if a number is a perfect square or not.'),
	    	array('id' => '23',
	    			    	'description' => 'You need to create a condition in your do while loop to stop if the number reaches 0. The break keyword will also be helpful in breaking the loop.'),
	    	array('id' => '24',
	    			    	'description' => 'You need to add a condition in your do while loop to stop if you have already successfully counted how many 2’s are needed.'),
	    	array('id' => '25',
	    			    	'description' => 'While loop is written in the format: \nwhile(condition)\n{\n\t
	    	   statement(s);\n
	    	}'),


			array('id' => '26',
					    	'description' => 'You need to print each elements of the array, you can access an element of the array in the format:\n
			    String myArray[5];\n
			     myArray[2];//contains the element of myArray'),


			array('id' => '27',
	    			    	'description' => 'You need to print each elements of the array, you can access an element of the array in the format:\n
	    	    String myArray[5];\n
	    	     myArray[2];//contains the element of myArray'),
	    	array('id' => '28',
	    			    	'description' => 'You need a loop to access each elements of the array, afterwards you need to set a condition in order to count each numbers that are less than 10.'),
	    	array('id' => '29',
	    			    	'description' => 'You need to cycle each elements of the array with a loop and then set a condition in order to find which elements are the lowest and highest.'),
	    	array('id' => '30',
	    			    	'description' => 'You can access an element of the array in the format:\n
	    	    String myArray[5];\n
	    	     myArray[2];//contains the element of myArray'),
	    	array('id' => '31',
	    			    	'description' => 'You can access an element of the array in the format:\n
	    	    String myArray[5];\n
	    	     myArray[2];//contains the element of myArray'),
	    	array('id' => '32',
	    			    	'description' => 'You can access an element of the array in the format:\n
	    	    String myArray[5];\n
	    	     myArray[2];//contains the element of myArray'),
 			array('id' => '33',
 					    	'description' => 'You can access an element of the array in the format:\n
 			    String myArray[5];\n
 			     myArray[2];//contains the element of myArray'),
	    	array('id' => '34',
	    			    	'description' => 'Once you have used the min and max methods on the array, you can now begin calculating the difference between each.'),
	    	array('id' => '35',
	    			    	'description' => 'Once you have accessed each element of the array, you just need to check if each element is a multiple of 10, also notice that each multiple increases if there is a much larger multiple found.'),
	    	array('id' => '36',
	    			    	'description' => 'You need to scan the array if it has a number 13 so that in adding all the elements of the array, it will then be excluded.'),
	    	array('id' => '37',
	    			    	'description' => 'You need to find the number 2 and number 4 in the array, after that you can check their next element if it follows the condition above.'),
	    	array('id' => '38',
	    			    	'description' => 'You just need to check each element of the array if a number appears 3 times. To do this you just need to loop through each element and count the appearance of each integer.'),
	    	array('id' => '39',
	    			    	'description' => 'You need to find the integer 4 in the elements of the array, once you have its location you can use its element number for the next loop that will print the output.'),
	    	array('id' => '40',
	    			    	'description' => 'You need to create a condition to check if there is a 3 numbers in order. To do that you can check if each element is an increment of 1.'),
//END OF SELECTION AVERAGE

//START OF REPETITION AVERAGE
	    	array('id' => '41',
	    			    	'description' => 'Switch Statements work by adding conditions in each Case.\n
	    	switch(expression)\n\t
	    	    case constant-expression  :\n\t\t
	    	       //code here\n\t\t
	    	       break; //optional\n\t
	    	    case constant-expression  :\n\t\t
	    	         //code here\n
	    	       break; //optional\n
	    	  
	    	    // you can have any number of case statements.\n
	    	    default : //Optional\n
	    	       statement(s);\n
	    	}'),
	    	array('id' => '42',
	    			    	'description' => 'You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.'),
	    	array('id' => '43',
	    			    	'description' => 'Tip: If else if statements are written using the format:\n
	    	if(boolean_expression 1)\n
	    	{\n\t
	    	   // Executes when the boolean expression 1 is true\n
	    	}\n
	    	else if( boolean_expression 2)\n
	    	{\n\t
	    	   // Executes when the boolean expression 2 is true\n
	    	}\n
	    	else if( boolean_expression 3)\n
	    	{\n\t
	    	   // Executes when the boolean expression 3 is true\n
	    	}\n
	    	else \n
	    	{\n\t
	    	   // executes when the none of the above condition is true.\n
	    	}
	    	'),
	    	array('id' => '44',
	    			    	'description' => 'The relational operators >= and <= will be useful in setting the conditions of the problem.'),
	    	array('id' => '45',
	    			    	'description' => 'Tip 1: The relational operators >= and <= will be useful in setting the conditions of the problem.\n
	    	Tip 2: You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.
	    	'),
	    	array('id' => '46',
	    			    	'description' => 'You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.'),

	    	
	    	array('id' => '47',
	    			    	'description' => 'The relational operators >= and <= will be useful in setting the conditions of the problem.
	    	'),
	    	array('id' => '48',
	    			    	'description' => 'You can use length() to get the length of the string. For example.\n
	    	String YourString= “This is a word”;\n
	    	YourString.length(); // Returns the length of the string
	    	'),
	    	array('id' => '49',
	    			    	'description' => 'You can use length() to get the length of the string. For example.
	    	String YourString= “This is a word”;\n
	    	YourString.length(); // Returns the length of the string
	    	'),
			array('id' => '50',
					    	'description' => 'You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.
			'),
	    	array('id' => '51',
	    			    	'description' => 'You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.'),
	    	array('id' => '52',
	    			    	'description' => 'You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.'),
	    	array('id' => '53',
	    			    	'description' => '1: You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.\n\n
	    			    	2: The relational operators >= and <= will be useful in setting the conditions of the problem.'),
	    	array('id' => '54',
	    			    	'description' => ': You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.\n\n
	    			    	2: The relational operators >= and <= will be useful in setting the conditions of the problem.'),
	    	array('id' => '55',
	    			    	'description' => '1: You can use the logical operators || for OR and && for AND in handling multiple conditions in your if else statement.\n\n
	    			    	2: The relational operators >= and <= will be useful in setting the conditions of the problem.
	    			    	'),
	    	array('id' => '56',
	    			    	'description' => 'For loop is written in the format:
	    	for ( initializer; condition; increment )\n
	    	{\n\t
	    	   //what do you want to do inside the loop\n
	    	}'),
	    	array('id' => '57',
	    			    	'description' => 'while loop is written in the format:\n 
	    	while(condition)\n
	    	{\n\t
	    	   statement(s);\n
	    	}'),
	    	array('id' => '58',
	    			    	'description' => 'while loop is written in the format: \n
	    	while(condition)\n
	    	{\n\t
	    	   statement(s);\n
	    	} '),
	    	array('id' => '59',
	    			    	'description' => 'The length() keyword is used in getting the length of a string. For example:
	    	 String yourString=”This is a string”;\n
	    	 yourString.length(); // returns the length of the string including whitespaces.
	    	
	    	'),
	    	array('id' => '60',
	    			    	'description' => '1: Character.isLetter(char) tests if a char is an alphabetic letter.\n\n
	    			    	2: The length() keyword is used in getting the length of a string. For example:
	    	 String yourString=”This is a string”;
	    	 yourString.length(); // returns the length of the string including whitespaces.\n
	    	 Once you get to navigate on the string you just need to find the end of the string and check it.
	    	'),
	    	array('id' => '61',
	    			    	'description' => 'The function tolower(word to be converted) will be very useful in converting entire string.'),
	    	array('id' => '62',
	    			    	'description' => 'To find the longest substring, start reading the string from the left towards the right.'),
	    	array('id' => '63',
	    			    	'description' => '1: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. \n
	    			    	Integer.parseInt(string) converts a string to an int.'),
	    	//NUMBER 9
	    	array('id' => '64',
	    			    	'description' => 'The length() keyword is used in getting the length of a string. For example:
	    	 String yourString=”This is a string”;
	    	 yourString.length(); // returns the length of the string including whitespaces.
	    	Once you have the exact length of the string, you can start checking each of the characters in the string.
	    	
	    	'),
	    	array('id' => '65',
	    			    	'description' => 'The length() keyword is used in getting the length of a string. For example:
	    	 String yourString=”This is a string”;\n
	    	 yourString.length(); // returns the length of the string including whitespaces.\n
	    	Once you have the exact length of the string, you can start checking each of the characters in the string.
	    	'),
			array('id' => '66',
					    	'description' => '1: Character.isLetter(char) tests if a char is a letter.\n\n
					    	2: The length() keyword is used in getting the length of a string. For example:
			 String yourString=”This is a string”;\n
			 yourString.length(); // returns the length of the string including whitespaces.\n
			Once you have the length of the string try navigating through each of the characters and check.
			'),
	    	array('id' => '67',
	    			    	'description' => 'The length() keyword is used in getting the length of a string. For example:\n
	    	 String yourString=”This is a string”;\n
	    	 yourString.length(); // returns the length of the string including whitespaces.\n
	    	Once you have the length of the string try navigating through each of the characters and check.
	    	'),
	    	array('id' => '68',
	    			    	'description' => 'Fibonacci series are a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. so they follow the formula N=(n1 + n2).
	    	'),
	    	array('id' => '69',
	    			    	'description' => 'For loop is written in the format:\n
	    	for ( initializer; condition; increment )\n
	    	{\n
	    	   \t//what do you want to do inside the loop\n
	    	}
	    	'),
			array('id' => '70',
					    	'description' => 'For loop is written in the format:\n
			for ( initializer; condition; increment )\n
			{\n
			   \t//what do you want to do inside the loop\n
			}'),
//END OF REPETITION AVERAGE

//START OF SELECTION HARD

	    	array('id' => '71',
	    			    	'description' => 'The relational and logical operators are very much present in this problem. Make sure to check if each condition is correct and read the problem carefully to identify the conditions. '),
	    	array('id' => '72',
	    			    	'description' => 'The relational and logical operators are very much present in this problem. Make sure to check if each condition is correct and read the problem carefully to identify the conditions. '),
	    	array('id' => '73',
	    			    	'description' => 'The relational and logical operators are very much present in this problem. Make sure to check if each condition is correct and read the problem carefully to identify the conditions. '),
	    	array('id' => '74',
	    			    	'description' => 'Make sure to set the relational and logical operators correctly and read the instructions carefully so that you will understand what to put in your conditions.'),
	    	array('id' => '75',
	    			    	'description' => 'Be careful in reading the inputted string. The logical and operational operators needs to be very sure in order for the conditions to be correct. Read the instructions as well for clarity in understanding the test cases.'),
	    	array('id' => '76',
	    			    	'description' => 'The circles will overlap if the distance between their centers is between the sum and the difference of their radii.'),

	    	/////////////
	    	array('id' => '77',
	    			    	'description' => 'Be careful in converting the numbers to roman numerals. There are certain rules to follow.'),
	    	array('id' => '78',
	    			    	'description' => 'Check your operational operators in your conditions to make sure that they are exactly the ones stated on the problem.'),
	    	array('id' => '79',
	    			    	'description' => 'strrev is very useful in reversing the inputted string.  For example:\n
	    	String yourString=”This is a string”;\n
	    	strrev(yourString)// reverses the string specified by the user.
	    	'),
	    	array('id' => '80',
	    			    	'description' => 'Be careful in converting the amount and make sure to use float since it will automatically round off any number to 2 decimal places.'),
	    	
//END OF SELECTION HARD

//START REPETITION HARD
	    	array('id' => '81',
	    			    	'description' => 'Remember to take note of the conversion formulas in converting the inputs.'),
	    	array('id' => '82',
	    			    	'description' => 'When encrypting the word, be mindful of the inputted integer which is the shift since it will be the amount of shifts in the caesar cipher. '),
	    	array('id' => '83',
	    			    	'description' => 'Remember to refer to the Vignere table to guide you in encrypting the word.'),
	    	array('id' => '84',
	    			    	'description' => 'Remember to use division. It will be helpful in calculating the amount of weeks the water will last.'),
	    	array('id' => '85',
	    			    	'description' => 'Remember to use .length() to get the exact length of the array. It will be useful in setting the maximum repetition of the for loop.'),
	    	array('id' => '86',
	    			    	'description' => 'Remember to read the instructions to understand the purpose of each operator. The AND, OR, XOR and NOR conditions are specified in the instructions.'),
	    	array('id' => '87',
	    			    	'description' => 'Remember to use the modulo operator to navigate through each digit of the ticket. Using the modulo operator with a loop will help you get each digit one by one of the integer.'),

	    	array('id' => '88',
	    			    	'description' => 'Remember that the loop stops when the word “end” is found.'),
	    	array('id' => '89',
	    			    	'description' => 'Remember to  use the first input as the start of the loop and the second input as the ending of the loop.'),
	    	array('id' => '90',
	    			    	'description' => 'Remember that factorial is the product of all positive integers less than or equal to n
	    			    	so remember to use multiplication in figuring out the algorithm.'),
	    	array('id' => '91',
	    			    	'description' => 'Remember to arrange your asterisks that it will closely resemble a diamond.'),
	    	array('id' => '92',
	    			    	'description' => 'Remember to arrange your asterisks that it will slowly resemble a right triangle.'),
	    	array('id' => '93',
	    			    	'description' => 'Remember to arrange the strings carefully that it will slowly resemble a diamond and 
	    			    	read the instructions so that you will know what to put in your looping conditions.'),
	    	array('id' => '94',
	    			    	'description' => 'Remember to read the instructions to further understand how to convert a word into Pig Latin.'),
	    	array('id' => '95',
	    			    	'description' => 'Remember to read the instructions to further understand how to convert a word into Pig Latin.'),

//END OF REPETITION HARD

//START OF ARRAY HARD

	    	array('id' => '96',
	    			    	'description' => 'Remember to read carefully the login in order to understand what algorithm to use in printing the last person standing.'),
	    	array('id' => '97',
	    			    	'description' => 'Remember that the goal of the program is to place a configuration in which you are to place 8 queens on a 8x8 board such that each queen will not block each other. You can try drawing the board to visualize the positions of each queen.'),
	    	array('id' => '98',
	    			    	'description' => 'In order to find out if there is a clump, you need to compare the first element of the array to his next and so on and so forth until there is a next digit that is not identical to the series. To do this you need to scan each element of the array so a looping statement is necessary.'),
	    	array('id' => '99',
	    			    	'description' => 'Remember you need to create a sorting algorithm in order to sort the elements of the array. A simple sorting algorithm would be the bubble sort in which it is done through 2 for looping statements.'),
	    	array('id' => '100',
	    			    	'description' => 'Remember you need to create a sorting algorithm in order to sort the elements of the array. A simple sorting algorithm would be the bubble sort in which it is done through 2 for looping statements.'),
	    	array('id' => '101',
	    			    	'description' => 'This problem involves scanning the array from the first to the last and to the last to the first and comparing both. '),
	    	array('id' => '102',
	    			    	'description' => "You need to compare the second array to the first array if its elements are found in the outer part or inner part. To do this you need to scan both of the array's "),
	    	array('id' => '103',
	    			    	'description' => 'Remember that if the size of the array is odd you will divide the array unevenly with the first comparison length to be greater than the second one.  '),
	    	array('id' => '104',
	    			    	'description' => 'You need to scan each element the array if there is a 3 and 4 and you have to move the number 4 such that all 3 will have 4 as its next element. Remember to not move the number 3.'),
	    	array('id' => '105',
	    			    	'description' => 'You need to scan each element the array if there is a 4 and 5 and you have to move the number 5 such that all 4 will have 5 as its next element. Remember to not move the number 4.'),
	    	array('id' => '106',
	    			    	'description' => 'You need to check the last 2 words of each adjective in order to know if it needs to be converted into superlative form, otherwise just add er.'),
	    	array('id' => '107',
	    			    	'description' => 'You need to compare two arrays, the first one being the correct words and the second one being the contestant’s words. In comparing the two arrays, you need to follow the conditions stated on the instructions in grading the words.'),
	    	array('id' => '108',
	    			    	'description' => 'You need to total all the grades of the student and average it in order to get the average grade. Once you get the average, you can start setting the condition to check if the student is an honor student or not.'),
	    	array('id' => '109',
	    			    	'description' => 'You need to check each element of the array for the appearances of each weather. Once you have the specific count, you can now set conditions in getting the weather.'),
	    	array('id' => '110',
	    			    	'description' => 'You need to check each pair of sequences in the array, once you have found out the specific condition on the instructions, you can now printing the output.')
		));
    }
}
