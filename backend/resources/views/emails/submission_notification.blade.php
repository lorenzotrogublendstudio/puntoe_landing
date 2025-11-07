@component('mail::layout')

{{-- Head: inline theme styles --}}
@slot('head')
<style>
    @include('vendor.mail.html.themes.puntoe')
</style>
@endslot

{{-- Header con logo (inline dal frontend) --}}
@slot('header')
<div class="header">
    <img
        src="data:image/jpeg;base64,..."
        alt="Punto-E"
        width="80"
        style="width:80px;height:auto;display:block;margin:0 auto;">
</div>
@endslot

{{-- Contenuto principale --}}
<h1>Nuova richiesta di contatto</h1>
<p>
    Ciao team Punto-E,<br>
    abbiamo ricevuto una nuova richiesta il
    <strong>{{ $submission->created_at->format('d/m/Y - H:i') }}</strong>.
</p>

<table class="data-table" role="presentation">
    <tbody>
        <tr>
            <th>Nome</th>
            <td>{{ $submission->first_name }} {{ $submission->last_name }}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td><a href="mailto:{{ $submission->email }}">{{ $submission->email }}</a></td>
        </tr>
        <tr>
            <th>Telefono</th>
            <td>{{ $submission->phone ? $submission->phone : 'Non indicato' }}</td>
        </tr>
    </tbody>
</table>

@component('mail::panel')
{{ $submission->message }}
@endcomponent

{{-- Subcopy --}}
@slot('subcopy')
<p style="font-size:12px; color:#6b7280;">
    IP: {{ $submission->ip_address ?? 'n/d' }}<br>
    User agent: {{ $submission->user_agent ?? 'n/d' }}
</p>
@endslot

{{-- Footer --}}
@slot('footer')
<div class="footer">
    &copy; {{ date('Y') }} Punto-E &middot; Via Leonardo Da Vinci, 72, 29122 Piacenza PC &middot;
    <a href="tel:0523606348" style="color: inherit; text-decoration: none;">0523 606348</a>
</div>
@endslot
@endcomponent