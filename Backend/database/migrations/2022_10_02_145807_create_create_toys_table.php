<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCreateToysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('create_toys', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('color');
            $table->string('item');
            $table->string('goal1')->nullable();
            $table->string('goal2')->nullable();
            $table->string('goal3')->nullable();
            $table->string('goal4')->nullable();
            $table->string('goal5')->nullable();
            $table->string('goal6')->nullable();
            $table->string('goal7')->nullable();   
            $table->integer('agemin');
            $table->integer('agemax');
            $table->integer('gin');
            $table->text('description');
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
        Schema::dropIfExists('create_toys');
    }
}
