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
		    	'problem_code' => 'SCS112', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 1, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS113', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 2, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS114', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 3, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS115', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 4, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case-else'
		    		),
		    array(
		    	'problem_code' => 'SCS116', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 5, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS117', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 6, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS118', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 7, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS119', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 8, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS120', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 9, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS121', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 10, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else if(-else'
		    		),







		     array(
		    	'problem_code' => 'RCS112', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 11, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS113', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 12, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS114', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 13, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS115', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 14, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS116', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 15, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS117', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 16, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do(-(while'
		    		),
		      array(
		    	'problem_code' => 'RCS118', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 17, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS119', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 18, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS120', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 19, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS121', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 20, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do(-(while'
		    		),
		      array(
		    	'problem_code' => 'RCS122', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 21, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS123', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 22, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS124', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 23, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do(-(while'
		    		),
		      array(
		    	'problem_code' => 'RCS125', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 24, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do(-(while'
		    		),
		      array(
		    	'problem_code' => 'RCS126', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 25, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),



		      	//ARRAYS NO JUGDGEMENT


		      array(
		    	'problem_code' => 'ARR212', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 26, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'letters['
		    		),
		      array(
		    	'problem_code' => 'ARR213', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 27, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'letters['
		    		),
		      array(
		    	'problem_code' => 'ARR214', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 28, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR215', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 29, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR216', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 30, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR217', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 31, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR218', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 32, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR219', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 33, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR220', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 34, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR221', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 35, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR222', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 36, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR223', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 37, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR224', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 38, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR225', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 39, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers'
		    		),
		      array(
		    	'problem_code' => 'ARR226', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 40, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),







		      array(
		    	'problem_code' => 'SCS212', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 41, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),
		      array(
		    	'problem_code' => 'SCS213', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 42, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS214', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 43, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS215', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 44, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS216', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 45, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS217', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 46, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS218', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 47, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS219', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 48, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS220', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 49, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS221', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 50, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS222', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 51, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS223', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 52, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS224', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 53, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS225', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 54, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS226', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 55, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(

		      	///MARKED BRUH
		    	'problem_code' => 'RCS212', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 56, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS213', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 57, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS214', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 58, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS215', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 59, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS216', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 60, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS217', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 61, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS218', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 62, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS219', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 63, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS220', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 64, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS221', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 65, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS222', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 66, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS223', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 67, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS224', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 68, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS225', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 69, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS226', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 70, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      
		    
		      //71 j not specified
		      array(
		    	'problem_code' => 'SCS312', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 71, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else if('
		    		),

		      //72 j not specified
		      array(
		    	'problem_code' => 'SCS313', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 72, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),

		      //73 j not specified
		      array(
		    	'problem_code' => 'SCS314', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 73, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),

		      //CORRECT
		      array(
		    	'problem_code' => 'SCS315', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 74, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),

		      //CORRECT
		      array(
		    	'problem_code' => 'SCS316', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 75, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),

		     
		      array(
		    	'problem_code' => 'SCS317', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 76, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else' //CORRECT
		    		),

		      array(
		    	'problem_code' => 'SCS318', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 77, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else if(' //nested if else
		    		),
		      array(
		    	'problem_code' => 'SCS319', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 78, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else if(' //multiple if else
		    		),
		      //CORRECT 79
		      array(
		    	'problem_code' => 'SCS320', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 79, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else' //CORRECT
		    		),
		      array(
		    	'problem_code' => 'SCS321', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 80, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else if('//multiple if else
		    		),



		      //CORRECT TANAN RCS DIRI
		      
		      array(
		    	'problem_code' => 'RCS312', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 81, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do(-(while'
		    		),

		      array(
		    	'problem_code' => 'RCS313', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 82, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS314', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 83, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS315', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 84, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS316', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 85, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS317', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 86, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do(-(while'
		    		),
		      array(
		    	'problem_code' => 'RCS318', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 87, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS319', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 88, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS320', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 89, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS321', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 90, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS322', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 91, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for(' //nested for loop
		    		),
		      array(
		    	'problem_code' => 'RCS323', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 92, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('//nested for
		    		),
		      array(
		    	'problem_code' => 'RCS324', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 93, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while(-for(' //1 while and nested for
		    		),
		      array(
		    	'problem_code' => 'RCS325', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 94, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS326', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 95, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else' //number15 j not specified
		    		),


		      //ALL ARRAYS WALAY JUDGEMENT

		      array(
		    	'problem_code' => 'ARR312', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 96, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'eliminatedPersons['
		    		),


		      
		      array(
		    	'problem_code' => 'ARR313', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 97, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'position['
		    		),
		      array(
		    	'problem_code' => 'ARR314', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 98, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'myArray['
		    		),
		      array(
		    	'problem_code' => 'ARR315', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 99, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR316', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 100, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR317', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 101, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'mirrors['
		    		),
		      array(
		    	'problem_code' => 'ARR318', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 102, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'outer[-inner['
		    		),
		      array(
		    	'problem_code' => 'ARR319', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 103, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR320', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 104, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['//invsolved
		    		),
		      array(
		    	'problem_code' => 'ARR321', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 105, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers[' //invsolved
		    		),
		      array(
		    	'problem_code' => 'ARR322', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 106, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'responses['
		    		),
		      array(
		    	'problem_code' => 'ARR323', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 107, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'correctSpelling[-contestantSpelling['
		    		),
		      array(
		    	'problem_code' => 'ARR324', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 108, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'grades['
		    		),
		      array(
		    	'problem_code' => 'ARR325', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 109, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'probableWeather['
		    		),
		      array(
		    	'problem_code' => 'ARR326', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 110, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'userNameType['
		    		)
		));		    
    }
}
