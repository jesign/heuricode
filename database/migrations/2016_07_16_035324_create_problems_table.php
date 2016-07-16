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
            $table->enum('difficulty', ['easy', 'medium', 'hard']);
            $table->timestamps();
            
            $table->integer('weakness_id')->unsigned();
            $table->foreign('weakness_id')->references('id')->on('weaknesses');
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
