<?php

use Illuminate\Database\Seeder;

class BadgesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		DB::table('badges')->insert(array(
			array('id' => 1, 'name' => 'Started from the bottom!', 'filename' =>'startedfromthebottom', 'description' =>"Successfully solved one 'easy' problems"),
			array('id' => 2, 'name' => "We're getting there!", 'filename' =>'weregettingthere', 'description' =>"Successfully solved five 'easy' problems"),
			array('id' => 3, 'name' => 'Ten steps closer to success!', 'filename' =>'tenstepsclosertosuccess', 'description' =>"Successfully solved ten 'easy' problems"),
			array('id' => 4, 'name' => 'Repeat after me!', 'filename' =>'repeatafterme', 'description' =>"Successfully solved all 'easy' problems in the Repetition Statements Area"),
			array('id' => 5, 'name' => 'I choose you!', 'filename' =>'ichooseyou', 'description' =>"Successfully solved all ‘easy’ problems in the Selection Statements Area"),
			array('id' => 6, 'name' => 'Easy krizzy!', 'filename' =>'easykrizzy', 'description' =>"Successfully solved all 'easy' problems"),
			array('id' => 7, 'name' => 'Not your average programmer!', 'filename' =>'notyouraverageprogrammer', 'description' =>"Successfully solved five 'average' problems"),
			array('id' => 8, 'name' => "Average? I'm beyond that!", 'filename' =>'averageimbeyondthat', 'description' =>"Successfully solved ten 'average' problems"),
			array('id' => 9, 'name' => 'Over and over again', 'filename' =>'overandoveragain', 'description' =>"Successfully solved all ‘average’ problems in the Repetition Statements Area"),
			array('id' => 10, 'name' => 'The selection life chose me!', 'filename' =>'theselectionlifechoseme', 'description' =>"Successfully solved all 'average' problems in the Selection Statements Area"),
			array('id' => 11, 'name' => 'Bombs array!', 'filename' =>'bombsarray', 'description' =>"Successfully solved all ‘average’ problems in the Array Area"),
			array('id' => 12, 'name' => 'Hard mode here I come!', 'filename' =>'hardmodehereicome', 'description' =>"Successfully solved all 'average' problems"),
			array('id' => 13, 'name' => 'Challenge Accepted!', 'filename' =>'challengeaccepted', 'description' =>"Successfully solved five 'hard' problems"),
			array('id' => 14, 'name' => 'Road to success!', 'filename' =>'roadtosuccess', 'description' =>"Successfully solved ten 'hard' problems"),
			array('id' => 15, 'name' => 'Eat. Sleep. Code. Repeat!', 'filename' =>'startedfromthebottom', 'description' =>"Successfully solved all 'hard' problems in the Repetition Statements Area"),
			array('id' => 16, 'name' => "You've chosen wisely!", 'filename' =>'youvechosenwisely', 'description' =>"Successfully solved all 'hard' problems in the Selection Statements Area"),
			array('id' => 17, 'name' => 'Arranged? No, Array-nged!', 'filename' =>'arrangednoarraynged', 'description' =>"Successfully solved all hard problems in the Array Area"),
			array('id' => 18, 'name' => 'Hardships have only made me stronger!', 'filename' =>'roadtosuccess', 'description' =>"Successfully solved ten 'hard' problems"),
			array('id' => 19, 'name' => 'Bronze!', 'filename' =>'bronze', 'description' =>"Successfully won three multiplayer matches"),
			array('id' => 20, 'name' => 'Silver!', 'filename' =>'silver', 'description' =>"Successfully won six multiplayer matches"),
			array('id' => 21, 'name' => 'Gold!', 'filename' =>'gold', 'description' =>"Successfully won nine multiplayer matches"),
			array('id' => 22, 'name' => 'Platinum!', 'filename' =>'platinum', 'description' =>"Successfully twelve multiplayer matches"),
			array('id' => 23, 'name' => 'Diamond!', 'filename' =>'diamond', 'description' =>"Successfully won fifteen multiplayer matches"),
			array('id' => 24, 'name' => 'Master!', 'filename' =>'master', 'description' =>"Successfully won twenty multiplayer matches")
		));
    }
}
