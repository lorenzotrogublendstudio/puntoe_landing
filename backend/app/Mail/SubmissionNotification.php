<?php

namespace App\Mail;

use App\Models\Submission;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SubmissionNotification extends Mailable
{
    use Queueable, SerializesModels;

    public Submission $submission;

    public function __construct(Submission $submission)
    {
        $this->submission = $submission;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nuova richiesta di contatto Punto-E'
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.submission_notification'
        );
    }

    public function attachments(): array
    {
        return [];
    }
}

