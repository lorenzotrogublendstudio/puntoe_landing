<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSubmissionRequest;
use App\Mail\SubmissionNotification;
use App\Models\Submission;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

class SubmissionController extends Controller
{
    public function store(StoreSubmissionRequest $request): JsonResponse
    {
        $submission = Submission::create([
            'first_name' => $request->input('first_name'),
            'last_name'  => $request->input('last_name'),
            'email'      => $request->input('email'),
            'phone'      => $request->input('phone'),
            'message'    => $request->input('message'),
            'ip_address' => $request->ip(),
            'user_agent' => substr((string) $request->userAgent(), 0, 255),
        ]);

        $to = config('mail.contact_recipient', config('mail.from.address'));
        $cc = array_filter(array_map('trim', explode(',', (string) config('mail.contact_cc'))));

        try {
            $mailable = new SubmissionNotification($submission);

            $mailer = Mail::to($to);
            if ($cc) {
                $mailer->cc($cc);
            }

            // Se usi la coda:
            // $mailer->queue($mailable);
            $mailer->send($mailable);
        } catch (TransportExceptionInterface $e) {
            Log::error('SMTP transport error', [
                'submission_id' => $submission->id,
                'message'       => $e->getMessage(),
            ]);

            return response()->json([
                'message' => 'Richiesta salvata ma la mail non è stata inoltrata (errore SMTP).',
                'id'      => $submission->id,
            ], 202);
        }

        return response()->json([
            'message' => 'Richiesta ricevuta correttamente.',
            'id'      => $submission->id,
        ], 201);
    }
}