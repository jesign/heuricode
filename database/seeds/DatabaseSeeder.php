<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ErrorTypesTableSeeder::class);
       	$this->call(WeaknessesTableSeeder::class);
        $this->call(ProblemTableSeeder::class);
        $this->call(MultiplayerProblemTableSeeder::class);
        $this->call(BadgesTableSeeder::class);
    }
}
