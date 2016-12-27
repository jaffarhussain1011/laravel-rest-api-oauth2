<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use \App\Models\Role;

class AddRole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'role:add {--T|title=} {--S|slug=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add role, role:add --title=Admin Role --slug=admin';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $title = $this->option('title');
        $slug  = $this->option('slug');
        if(!$title || !$slug){
            $this->error('title and slug are required');
            exit;
        }
        $role  = Role::where(['slug'=>$slug])->first();
        if($role){
            $this->error('Role already exists');
        }else{
            $role = new Role();
            $role->title = $title;
            $role->slug = $slug;
            $role->save();
        }
    }
}
