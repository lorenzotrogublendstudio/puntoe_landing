@component('mail::layout')
    {{-- Header con logo --}}
    @slot('header')
        <div class="header">
            <img src="./../../../../frontend/src/assets/images/logo_puntoe.jpg" alt="Punto-E">
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
        <p>
            IP: {{ $submission->ip_address ?? 'n/d' }}<br>
            User agent: {{ $submission->user_agent ?? 'n/d' }}
        </p>
    @endslot

    {{-- Footer --}}
    @slot('footer')
        <div class="footer">
            © {{ date('Y') }} Punto-E · Str. Farnesiana 91/93, Piacenza ·
            <a href="tel:0523456853" style="color: inherit;">0523.456853</a>
        </div>
    @endslot
@endcomponent