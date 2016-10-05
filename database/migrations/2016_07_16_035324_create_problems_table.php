<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProblemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('problems', function (Blueprint $table) {
            $table->increments('id');
            $table->string('problem_code');
            $table->enum('difficulty', ['easy', 'average', 'hard']);
            $table->text('skeleton_code_c');
            $table->text('skeleton_code_cpp');
            $table->text('skeleton_code_java');
            
            $table->integer('weakness_id')->unsigned();
            $table->foreign('weakness_id')->references('id')->on('weaknesses');

            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('problems');
    }
    
}
