/* themes/puntoe.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
    --brand: #d71920;
}

body {
    font-family: 'Inter', 'Segoe UI', Tahoma, sans-serif;
    background-color: #f7f7fb;
    color: #1f2937;
}

.wrapper {
    background: #f7f7fb;
}

.header {
    padding: 32px 0 12px;
    text-align: center;
}

.header img {
    width: 90px;
    height: auto;
}

.content-cell {
    padding: 36px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 0 18px 45px rgba(215, 25, 32, 0.12);
}

h1 {
    color: #d71920;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 16px;
}

h2, h3 {
    color: #111827;
    font-weight: 700;
}

.subcopy {
    color: #6b7280;
}

.button {
    background-color: var(--brand) !important;
    border-radius: 999px !important;
    font-weight: 700 !important;
    padding: 12px 24px !important;
    text-transform: uppercase;
    letter-spacing: 0.12em;
}

.panel {
    background: linear-gradient(135deg, rgba(215,25,32,0.08), rgba(215,25,32,0.02));
    border-radius: 18px;
    border: 1px solid rgba(215,25,32,0.16);
    padding: 18px 22px;
    color: #1f2937;
}

table.data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
}

table.data-table th,
table.data-table td {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    text-align: left;
    font-size: 14px;
}

table.data-table th {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6b7280;
    font-weight: 600;
}

.footer {
    text-align: center;
    color: #9ca3af;
    font-size: 13px;
    padding: 18px;
}


.panel {
    background: #ffffff;
    border: 1px solid rgba(15, 23, 42, 0.12); /* grigio leggero */
    border-radius: 18px;
    padding: 18px 22px;
    color: #1f2937;
    word-break: break-word;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
}

.panel p {
    margin: 0;
    word-break: inherit;
    overflow-wrap: inherit;
    white-space: inherit;
}

