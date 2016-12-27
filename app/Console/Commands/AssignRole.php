<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use \App\Models\Role;
use \App\Models\User;

class AssignRole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'role:assign {--E|email=} {--R|role=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Assign role, role:assign --email=admin@admin.com --role=admin';

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
        $email  = $this->option('email');
        if(!$slug || !$email){
            $this->error('role and user email are required');
            exit;
        }
        $role  = Role::where(['slug'=>$slug])->first();
        if(!$role){
            $this->error('Role does not exists');
        }else{
            
            $user  = User::where(['email'=>$email])->first();
            if(!$user){
                $this->error('User does not exists');
            }else{
                $user->roles()->sync([$role->id],false);
                $this->info('Operation Successful.');
            }
        }
    }
}
