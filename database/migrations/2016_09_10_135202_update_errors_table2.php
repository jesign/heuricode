<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateErrorsTable2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('errors', function ($table) {
            $table->integer('round_id');
            $table->enum('mode', ['single', 'multiplayer']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('errors', function($table)
        {
            $table->dropColumn('round_id');
            $table->dropColumn('mode');
        });
    }
}
