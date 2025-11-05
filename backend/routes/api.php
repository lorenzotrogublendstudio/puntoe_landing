<?php

use Illuminate\Support\Facades\Route;
use App\Models\Submission;
use App\Http\Controllers\SubmissionController;

Route::post('/contact', [SubmissionController::class, 'store']);