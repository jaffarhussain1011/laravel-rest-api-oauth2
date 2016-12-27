<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use \App\Models\Role;

class DeleteRole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'role:delete {--R|role=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete role, role:delete --role=admin';

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
        
        $slug  = $this->option('role');
        if(!$slug){
            $this->error('slug is required');
            exit;
        }
        $role  = Role::where(['slug'=>$slug])->first();
        if(!$role){
            $this->error('Role does not exist');
        }else{
            $role->delete();
        }
    }
}
