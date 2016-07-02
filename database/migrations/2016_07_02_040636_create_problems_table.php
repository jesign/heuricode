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
        //
        Schema::create('problems', function (Blueprint $table) {
            $table->increments('id');
            $table->string('subject_area_id')->references('id')->on('subject_areas');
            $table->string('problem_title',100);
            $table->longtext('problem_description');
            $table->longtext('code_cpp');
            $table->longtext('code_java');
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
