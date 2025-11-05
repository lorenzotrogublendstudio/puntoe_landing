import boschLogo from './assets/images/bosch_logo.png';
import siemensLogo from './assets/images/siemens_logo.webp';
import arieteLogo from './assets/images/ariete_logo.jpg';

export const navLinks = [
  { id: 'servizi', label: 'Servizi' },
  { id: 'metodo', label: 'Metodo' },
  { id: 'progetti', label: 'Progetti' },
  { id: 'testimonianze', label: 'Clienti' },
  { id: 'contatti', label: 'Contatti' }
];

export const heroContent = {
  eyebrow: 'Gli strumenti',
  title: "L'idea",
  description:
    "Punto-e nasce dall'unione di due comprovate professionalità nell'ambito dell'assistenza tecnica. Cristian Carini e Roberto Fornasari vantano un'esperienza di oltre 10 anni rispettivamente nei settori di assistenza per piccoli e grandi elettrodomestici.",
  ctaPrimary: 'Parla con noi',
  ctaSecondary: 'Scopri il servizio',
  highlights: [
    { label: 'Esperienza nel settore', value: '10+' },
    { label: 'Professionisti dedicati', value: '2' },
    { label: 'Anni di fiducia sul territorio', value: '2000s' }
  ]
};

export const stats = [
  {
    value: '2 linee',
    label: 'Centralino potenziato',
    caption: 'Due linee telefoniche dedicate e una linea fax'
  },
  {
    value: '100 mq',
    label: 'Area espositiva',
    caption: 'Ricambi al dettaglio sempre disponibili'
  },
  {
    value: '200 mq',
    label: 'Laboratorio e magazzino',
    caption: 'Supportati da 2 furgoni per l’assistenza a domicilio'
  }
];

export const aboutContent = {
  title: "L'efficienza del servizio",
  description:
    "L’efficienza del servizio viene garantita dal potenziamento delle infrastrutture della nuova sede operativa. Ogni dettaglio è stato pensato per offrire risposte rapide, ricambi immediati e un’assistenza puntuale, dal front office fino al post intervento.",
  highlights: [
    'Centralino con due linee telefoniche dedicate e una linea fax',
    'Oltre 100 mq di area espositiva e ricambi al dettaglio',
    'Oltre 200 mq di laboratorio tecnico e magazzino',
    'Due furgoni per l’assistenza a domicilio su tutto il territorio'
  ]
};

export const services = [
  {
    title: 'Il Servizio',
    description:
      "Grazie all’esperienza decennale, Punto-e offre un servizio di assistenza tecnica completo per grandi e piccoli elettrodomestici. Attenta ai rapidi cambiamenti tecnologici, soddisfa ogni richiesta con passione e professionalità, garantendo la reperibilità immediata dei ricambi."
  },
  {
    title: 'Assistenza grandi elettrodomestici',
    description:
      'Diagnostica e riparazioni su frigoriferi, lavatrici, asciugatrici e forni con ricambi originali o compatibili certificati.'
  },
  {
    title: 'Assistenza piccoli elettrodomestici',
    description:
      'Interventi su aspirapolvere, robot da cucina, ferri da stiro e apparecchi per la casa con soluzioni rapide e garantite.'
  },
  {
    title: 'Consulenza tecnica',
    description:
      'Verifica dello stato degli impianti, consigli su manutenzioni preventive e supporto nella scelta di nuovi dispositivi.'
  },
  {
    title: 'Ricambi e accessori',
    description:
      'Ampia disponibilità di ricambi in pronta consegna con gestione ordini su richiesta e supporto dedicato.'
  },
  {
    title: 'Assistenza a domicilio',
    description:
      'Due furgoni attrezzati per interventi rapidi direttamente presso abitazioni o sedi aziendali, con pianificazione flessibile.'
  }
];

export const processSteps = [
  {
    title: 'Accoglienza e diagnosi',
    copy:
      'Gestione delle chiamate tramite centralino dedicato e prima valutazione per programmare l’intervento più efficace.'
  },
  {
    title: 'Preparazione intervento',
    copy:
      'Ricambi verificati in tempo reale dall’area espositiva e dal magazzino per ridurre tempi di fermo e seconde uscite.'
  },
  {
    title: 'Intervento tecnico',
    copy:
      'Tecnici specializzati operano in laboratorio o presso il domicilio con attrezzature professionali e procedure certificate.'
  },
  {
    title: 'Test e collaudo',
    copy:
      'Verifica finale del corretto funzionamento, aggiornamento cliente e suggerimenti per prolungare la vita dell’elettrodomestico.'
  },
  {
    title: 'Supporto post intervento',
    copy:
      'Assistenza continuativa, reperibilità pezzi di ricambio aggiuntivi e consulenza per eventuali nuove esigenze.'
  }
];

export const projects = [
  {
    title: 'Laboratorio multi-brand',
    description:
      'Gestione completa di riparazioni per marchi differenti con tracciamento ricambi e storicizzazione degli interventi.',
    tags: ['Riparazioni', 'Ricambi', 'Laboratorio']
  },
  {
    title: 'Flotta assistenza a domicilio',
    description:
      'Ottimizzazione delle uscite dei furgoni con pianificazione geografica e magazzino mobile per interventi rapidissimi.',
    tags: ['On-site', 'Logistica', 'Efficienza']
  },
  {
    title: 'Sportello ricambi al dettaglio',
    description:
      'Area espositiva dedicata al pubblico con consulenza immediata e ordini su misura per richieste particolari.',
    tags: ['Retail', 'Customer care', 'Ricambi']
  }
];

export const testimonials = [
  {
    quote:
      'Professionalità e rapidità: in un unico intervento hanno risolto il guasto e fornito consigli utili per la manutenzione.',
    author: 'Marta Rinaldi',
    role: 'Piacenza'
  },
  {
    quote:
      'Ricambi disponibili subito e tecnici preparati. Servizio impeccabile dalla chiamata al collaudo.',
    author: 'Gianni Ferri',
    role: 'Fiorenzuola d’Arda'
  },
  {
    quote:
      'Assistenza puntuale e cortese, hanno gestito più elettrodomestici coordinando ogni passaggio con grande attenzione.',
    author: 'Laura Conti',
    role: 'Castel San Giovanni'
  }
];

export const partners = [
  { name: 'Bosch', logo: boschLogo },
  { name: 'Siemens', logo: siemensLogo },
  { name: 'Ariete', logo: arieteLogo },
  { name: 'DeLonghi', logo: 'https://logos-world.net/wp-content/uploads/2020/12/DeLonghi-Logo.png' },
  { name: 'Imetec', logo: 'https://upload.wikimedia.org/wikipedia/it/8/8e/Imetec_logo.png' },
  { name: 'Krups', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Krups_Logo.svg/1024px-Krups_Logo.svg.png' },
  { name: 'Simac', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/SIMAC_logo.png' },
  { name: 'Tefal', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Tefal_logo.svg/1200px-Tefal_logo.svg.png' },
  { name: 'Kenwood', logo: 'https://download.logo.wine/logo/Kenwood_Corporation/Kenwood_Corporation-Logo.wine.png' },
  { name: 'Rowenta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rowenta_logo.svg/2560px-Rowenta_logo.svg.png' }
];

export const contactChannels = [
  {
    label: 'Parla con un tecnico',
    value: '0523.456853',
    type: 'phone'
  },
  {
    label: 'Scrivici',
    value: 'contatto@punto-e.eu',
    type: 'email'
  },
  {
    label: 'Sede operativa',
    value: 'Via Innovazione 12, 29100 Piacenza',
    type: 'address'
  }
];