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
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 1, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS113A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 2, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif'
		    		),
		    array(
		    	'problem_code' => 'SCS114A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 3, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		    array(
		    	'problem_code' => 'SCS115A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 4, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS116A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 5, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS117A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 6, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS118A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 7, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		    array(
		    	'problem_code' => 'SCS119A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 8, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		    array(
		    	'problem_code' => 'SCS120A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 9, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),
		    array(
		    	'problem_code' => 'SCS121A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 10, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),







		     array(
		    	'problem_code' => 'RCS112A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 11, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS113A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 12, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS114A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 13, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS115A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 14, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS116A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 15, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do{-while('
		    		),
		      array(
		    	'problem_code' => 'RCS117A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 16, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS118A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 17, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS119A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 18, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS120A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 19, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS121A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 20, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS122A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 21, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS123A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 22, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS124A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 23, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do{-while('
		    		),
		      array(
		    	'problem_code' => 'RCS125A', 
		    	'difficulty' => 'easy', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 24, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS126A', 
		    	'difficulty' => 'easy', 
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
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 26, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'letters['
		    		),
		      array(
		    	'problem_code' => 'ARR213A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 27, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'word['
		    		),
		      array(
		    	'problem_code' => 'ARR214A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 28, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR215A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 29, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR216A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 30, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR217A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 31, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR218A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 32, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR219A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 33, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'integers['
		    		),
		      array(
		    	'problem_code' => 'ARR220A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 34, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'difference['
		    		),
		      array(
		    	'problem_code' => 'ARR221A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 35, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'multiples['
		    		),
		      array(
		    	'problem_code' => 'ARR222A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 36, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR223A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 37, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR224A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 38, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR225A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 39, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR226A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 40, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),

		      //5:25PM OCT 6





		      array(
		    	'problem_code' => 'SCS212A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 41, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),
		      array(
		    	'problem_code' => 'SCS213A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 42, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS214A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 43, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS215A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 44, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS216A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 45, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS217A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 46, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS218A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 47, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS219A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 48, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS220A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 49, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS221A', 
		    	'difficulty' => 'average', 
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
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 51, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS223A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 52, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS224A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 53, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),
		      array(
		    	'problem_code' => 'SCS225A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 54, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),
		      array(
		    	'problem_code' => 'SCS226A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 55, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif'
		    		),
		      array(

		      	///MARKED BRUH
		    	'problem_code' => 'RCS212A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 56, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS213A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 57, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS214A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 58, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS215A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 59, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS216A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 60, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS217A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 61, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS218A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 62, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS219A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 63, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS220A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 64, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS221A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 65, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS222A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 66, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS223A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 67, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS224A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 68, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS225A', 
		    	'difficulty' => 'average', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 69, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS226A', 
		    	'difficulty' => 'average', 
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
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 71, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('
		    		),

		      //72 j not specified
		      array(
		    	'problem_code' => 'SCS313A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 72, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),

		      //73 j not specified
		      array(
		    	'problem_code' => 'SCS314A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 73, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'switch(-case'
		    		),

		      //CORRECT
		      array(
		    	'problem_code' => 'SCS315A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 74, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),

		      //CORRECT
		      array(
		    	'problem_code' => 'SCS316A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 75, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else'
		    		),

		     
		      array(
		    	'problem_code' => 'SCS317A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 76, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else' //CORRECT
		    		),

		      array(
		    	'problem_code' => 'SCS318A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 77, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif(' //nested if else
		    		),
		      array(
		    	'problem_code' => 'SCS319A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 78, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif(' //multiple if else
		    		),
		      //CORRECT 79
		      array(
		    	'problem_code' => 'SCS320A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 79, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-else' //CORRECT
		    		),
		      array(
		    	'problem_code' => 'SCS321A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 1, 
		    	'feedback_id' => 80, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'if(-elseif('//multiple if else
		    		),



		      //CORRECT TANAN RCS DIRI
		      
		      array(
		    	'problem_code' => 'RCS312A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 81, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do{-while('
		    		),

		      array(
		    	'problem_code' => 'RCS313A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 82, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS314A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 83, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS315A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 84, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS316A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 85, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS317A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 86, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'do{-while('
		    		),
		      array(
		    	'problem_code' => 'RCS318A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 87, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS319A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 88, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while('
		    		),
		      array(
		    	'problem_code' => 'RCS320A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 89, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS321A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 90, 
		    	'time_limit' => 14401, 
		    	'JUDGEMENTment' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS322A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 91, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for(' //nested for loop
		    		),
		      array(
		    	'problem_code' => 'RCS323A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 92, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('//nested for
		    		),
		      array(
		    	'problem_code' => 'RCS324A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 93, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'while(-for(' //1 while and nested for
		    		),
		      array(
		    	'problem_code' => 'RCS325A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 94, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for('
		    		),
		      array(
		    	'problem_code' => 'RCS326A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 2, 
		    	'feedback_id' => 95, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'for(' //number15 j not specified
		    		),


		      //ALL ARRAYS WALAY JUDGEMENT

		      array(
		    	'problem_code' => 'ARR312A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 96, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'sequence[-for('
		    		),


		      
		      array(
		    	'problem_code' => 'ARR313A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 97, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'configuration['
		    		),
		      array(
		    	'problem_code' => 'ARR314A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 98, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR315A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 99, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['



		    	//////OCT 7
		    		),
		      array(
		    	'problem_code' => 'ARR316A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 100, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR317A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 101, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR318A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 102, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR319A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 103, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['
		    		),
		      array(
		    	'problem_code' => 'ARR320A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 104, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers['//invsolved
		    		),
		      array(
		    	'problem_code' => 'ARR321A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 105, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'numbers[' //invsolved
		    		),
		      array(
		    	'problem_code' => 'ARR322A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 106, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'words['
		    		),
		      array(
		    	'problem_code' => 'ARR323A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 107, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'correctWords[-contestantWords['
		    		),
		      array(
		    	'problem_code' => 'ARR324A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 108, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'grades['
		    		),
		      array(
		    	'problem_code' => 'ARR325A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 109, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'weatherForecast['
		    		),
		      array(
		    	'problem_code' => 'ARR326A', 
		    	'difficulty' => 'hard', 
		    	'weakness_id'=> 3, 
		    	'feedback_id' => 110, 
		    	'time_limit' => 14401, 
		    	'judgement' => 'loginSequences['
		    		)
		));		    
    }
}
