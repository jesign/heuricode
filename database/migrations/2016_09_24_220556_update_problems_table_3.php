<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateProblemsTable3 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('problems', function ($table) {
            $table->dropColumn('skeleton_code_c');
            $table->dropColumn('skeleton_code_cpp');
            $table->dropColumn('skeleton_code_java');
            $table->text('judgement');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('problems', function($table)
        {
            $table->text('skeleton_code_c');
            $table->text('skeleton_code_cpp');
            $table->text('skeleton_code_java');
            $table->dropColumn('judgement');
        });
    }
}
