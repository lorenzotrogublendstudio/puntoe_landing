<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSubmissionRequest;
use App\Models\Submission;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use App\Mail\SubmissionNotification;
use Illuminate\Support\Facades\Log;

class SubmissionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //
    }

    public function store(StoreSubmissionRequest $request): JsonResponse
    {
        $submission = Submission::create([
            'first_name' => $request->input('first_name'),
            'last_name'  => $request->input('last_name'),
            'email'      => $request->input('email'),
            'phone'      => $request->input('phone'),
            'message'    => $request->input('message'),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        // TODO: dispatch mail / queue jobs here e.g. SendSubmissionNotification::dispatch($submission);
        // Destinatario interno (fallback su MAIL_FROM se non configurato diversamente)
    $recipient = config('mail.contact_recipient') ?? config('mail.from.address');

        try {
            Mail::to($recipient)->send(new SubmissionNotification($submission));

            // opzionale: conferma al cliente
            if (filter_var($submission->email, FILTER_VALIDATE_EMAIL)) {
                Mail::to($submission->email)->send(new SubmissionNotification($submission));
            }
        } catch (\Throwable $e) {
            Log::error('Errore invio mail submission', [
                'submission_id' => $submission->id,
                'message'       => $e->getMessage(),
            ]);
            return response()->json([
                'message' => 'Richiesta salvata ma impossibile inoltrare la mail di notifica.',
                'id'      => $submission->id,
            ], 202);
        }

        return response()->json([
            'message' => 'Richiesta ricevuta correttamente.',
            'id'      => $submission->id,
        ], 201);
    }
}
