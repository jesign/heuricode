<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMultiplayerProblemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('multiplayer_problems', function (Blueprint $table) {
            $table->increments('id');
            $table->string('problem_code');
            $table->enum('difficulty', ['easy', 'average', 'hard']);
            $table->bigInteger('time_limit');
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
        Schema::drop('multiplayer_problems');
    }
}
