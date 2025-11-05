<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    protected $fillable = [
    'first_name', 'last_name', 'email', 'phone', 'message', 'ip_address', 'user_agent',
    ];
}
