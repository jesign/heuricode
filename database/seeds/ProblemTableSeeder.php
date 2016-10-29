<?php

use Illuminate\Database\Seeder;

class ProblemTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('problems')->insert(array(
		    array(
		    	'problem_code' => 'SCS112A', 
		    	'difficulty' => 'easy',
		    	'problem_title' => 'Odd or Even' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 1, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS113A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Vowel or Consonant' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 2, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif'
		    		),
		    array(
		    	'problem_code' => 'SCS114A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Equal to, greater than, or less than' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 3, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		    array(
		    	'problem_code' => 'SCS115A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Combination of Primary Colors' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 4, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS116A', 
		    	'difficulty' => 'easy',
		    	'problem_title' => 'Dominant or Recessive'  ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 5, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS117A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Leap Year' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 6, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS118A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Divisible by 3' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 7, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS119A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'High School Student Classification' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 8, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		    array(
		    	'problem_code' => 'SCS120A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Day of the Week' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 9, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),
		    array(
		    	'problem_code' => 'SCS121A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Square, Rectangle, or Triangle' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 10, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),







		     array(
		    	'problem_code' => 'RCS112A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Even Number Counter' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 11, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS113A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Digit Number Counter' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 12, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS114A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Print Numbers 1-20' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 13, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS115A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Print Cubes' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 14, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS116A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Numbers In Between' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 15, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do{-while('
		    		),
		      array(
		    	'problem_code' => 'RCS117A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => "Output x's" ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 16, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS118A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Until Only One Digit Remains' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 17, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS119A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Reverse a Number' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 18, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS120A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Descending 1 to 10' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 19, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS121A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Decrementation' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 20, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS122A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Count digits' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 21, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS123A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Perfect Square Counter' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 22, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS124A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Decrease Until 0' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 23, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do{-while('
		    		),
		      array(
		    	'problem_code' => 'RCS125A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => "Count a's'",
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 24, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS126A', 
		    	'difficulty' => 'easy', 
		    	'problem_title' => 'Repeating Hello World' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 25, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),

		      	//4:33PM OCT 6

		      	//ARRAYS NO JUGDGEMENT


		      array(
		    	'problem_code' => 'ARR212A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Letters' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 26, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'letters['
		    		),
		      array(
		    	'problem_code' => 'ARR213A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Word' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 27, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'word['
		    		),
		      array(
		    	'problem_code' => 'ARR214A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Greater than or equal to 10' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 28, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR215A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Lowest Value and Highest Value' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 29, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR216A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Same Value' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 30, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR217A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Mean' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 31, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR218A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Count Even' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 32, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR219A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Count Odd' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 33, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR220A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Big Difference' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 34, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'difference['
		    		),
		      array(
		    	'problem_code' => 'ARR221A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Ten Run' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 35, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'multiples['
		    		),
		      array(
		    	'problem_code' => 'ARR222A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Sum 13' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 36, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR223A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Either 2 or 4' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 37, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR224A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Three Points' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 38, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR225A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Before Four' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 39, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR226A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Triple Triple' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 40, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),

		      //5:25PM OCT 6





		      array(
		    	'problem_code' => 'SCS212A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Physics Grade' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 41, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),
		      array(
		    	'problem_code' => 'SCS213A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Employee Salary' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 42, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS214A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Electricity Bill' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 43, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS215A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Jeepney Fare' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 44, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS216A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Age Definition'  ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 45, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS217A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Movie Tickets' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 46, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS218A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Election Time' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 47, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS219A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Vowels on a Word' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 48, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS220A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Consonants on a Word' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 49, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS221A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Bricks for a Wall' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 50, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),	

		      // 6:10PM OCT 6
		      ///////////////////////////AHHHHHHHHDITO LAST
		      array(
		    	'problem_code' => 'SCS222A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Same not Sum' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 51, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS223A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Chocolate Bars',
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 52, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS224A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Blackjack' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 53, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS225A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Lucky Sum' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 54, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS226A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Close and Far' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 55, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif'
		    		),
		      array(

		      	///MARKED BRUH
		    	'problem_code' => 'RCS212A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Bank investment' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 56, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS213A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Reverse with a Twist' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 57, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS214A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Code Count' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 58, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS215A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Triple Character' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 59, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS216A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Ending Y and Z' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 60, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS217A', 
		    	'difficulty' => 'average',
		    	'problem_title' => 'Happy String'  ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 61, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS218A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Longest Substring' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 62, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS219A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'String Sum' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 63, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS220A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Base and Remove' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 64, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS221A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Mirror Image' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 65, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS222A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Is to Is not' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 66, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS223A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Largest Block' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 67, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS224A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Fibonacci Series' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 68, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS225A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Multiplication Table' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 69, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS226A', 
		    	'difficulty' => 'average', 
		    	'problem_title' => 'Printing Stars' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 70, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      ///////
		    
		      //71 j not specified
		      array(
		    	'problem_code' => 'SCS312A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Workshop Programmer' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 71, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),

		      //72 j not specified
		      array(
		    	'problem_code' => 'SCS313A', 
		    	'difficulty' => 'hard',
		    	'problem_title' => 'Secret Message'  ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 72, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),

		      //73 j not specified
		      array(
		    	'problem_code' => 'SCS314A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Playing Cards' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 73, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),

		      //CORRECT
		      array(
		    	'problem_code' => 'SCS315A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Two Timer' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 74, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),

		      //CORRECT
		      array(
		    	'problem_code' => 'SCS316A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => "Millionaire's Game",
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 75, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),

		     
		      array(
		    	'problem_code' => 'SCS317A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Circle Intersection' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 76, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else' //CORRECT
		    		),

		      array(
		    	'problem_code' => 'SCS318A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Roman Numerals' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 77, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif(' //nested if else
		    		),
		      array(
		    	'problem_code' => 'SCS319A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'BMI' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 78, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif(' //multiple if else
		    		),
		      //CORRECT 79
		      array(
		    	'problem_code' => 'SCS320A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Palindrome' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 79, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else' //CORRECT
		    		),
		      array(
		    	'problem_code' => 'SCS321A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Money Converter' ,
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 80, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('//multiple if else
		    		),



		      //CORRECT TANAN RCS DIRI
		      
		      array(
		    	'problem_code' => 'RCS312A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Celsius and Fahrenheit' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 81, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do{-while('
		    		),

		      array(
		    	'problem_code' => 'RCS313A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Caesar Cipher' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 82, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS314A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Vignere Cipher' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 83, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS315A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Death Valley' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 84, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS316A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Word Count' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 85, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS317A', 
		    	'difficulty' => 'hard',
		    	'problem_title' => 'Binary Logic'  ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 86, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do{-while('
		    		),
		      array(
		    	'problem_code' => 'RCS318A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Lucky Tickets' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 87, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS319A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Ali Baba' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 88, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS320A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Leap Years in Between' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 89, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS321A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Factorial' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 90, 
		    	'time_limit' => 14401, 
		    	'JUDGEMENTment' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS322A', 
		    	'difficulty' => 'hard',
		    	'problem_title' => 'Diamond'  ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 91, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for(' //nested for loop
		    		),
		      array(
		    	'problem_code' => 'RCS323A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Triangle' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 92, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('//nested for
		    		),
		      array(
		    	'problem_code' => 'RCS324A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Diamond Word' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 93, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while(-for(' //1 while and nested for
		    		),
		      array(
		    	'problem_code' => 'RCS325A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Weather Forecast' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 94, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS326A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Reverse Pig Latin' ,
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 95, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for(' //number15 j not specified
		    		),


		      //ALL ARRAYS WALAY JUDGEMENT

		      array(
		    	'problem_code' => 'ARR312A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Josephus Problem' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 96, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'sequence[-for('
		    		),


		      
		      array(
		    	'problem_code' => 'ARR313A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => '8 Queens' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 97, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'configuration['
		    		),
		      array(
		    	'problem_code' => 'ARR314A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Clump' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 98, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR315A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Ascending Order' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 99, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['



		    	//////OCT 7
		    		),
		      array(
		    	'problem_code' => 'ARR316A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Descending Order' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 100, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR317A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Mirror Mirror' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 101, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR318A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Outer and Inner' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 102, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR319A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Balanced or Not Balanced' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 103, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR320A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'FIX 34' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 104, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['//invsolved
		    		),
		      array(
		    	'problem_code' => 'ARR321A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'FIX 45' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 105, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers[' //invsolved
		    		),
		      array(
		    	'problem_code' => 'ARR322A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'The Annoying Friend' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 106, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'words['
		    		),
		      array(
		    	'problem_code' => 'ARR323A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Spelling Bee' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 107, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'correctWords[-contestantWords['
		    		),
		      array(
		    	'problem_code' => 'ARR324A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Honor Students' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 108, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'grades['
		    		),
		      array(
		    	'problem_code' => 'ARR325A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Weather Forecast ' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 109, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'weatherForecast['
		    		),
		      array(
		    	'problem_code' => 'ARR326A', 
		    	'difficulty' => 'hard', 
		    	'problem_title' => 'Intruder Alert ' ,
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 110, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'loginSequences['
		    		)
		));		    
    }
}
