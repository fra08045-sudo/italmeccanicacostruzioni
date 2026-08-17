# Italmeccanica Costruzioni - Sito Web

Un sito web moderno e responsive per Italmeccanica Costruzioni, specializzata in soluzioni costruttive innovative.

## Caratteristiche Principali

### Frontend
- **Homepage** - Presentazione dell'azienda e servizi
- **Chi Siamo** - Story aziendale e team
- **Servizi** - Descrizione dettagliata di tutti i servizi
- **Portfolio** - Galleria interattiva di progetti completati con filtri
- **Contatti** - Form contatti e informazioni di contatto
- **Area Riservata** - Login e accesso ai progetti personali
- **Chat in Tempo Reale** - Assistenza diretta via chat

### Funzionalità
- ✅ Design responsive (mobile, tablet, desktop)
- ✅ Navigazione intuitiva con menu hamburger mobile
- ✅ Chat interattiva con bot assistente
- ✅ Sistema di autenticazione utenti
- ✅ Portfolio con filtri per categoria
- ✅ Form contatti con validazione
- ✅ Galleria immagini
- ✅ Animazioni scroll fluide
- ✅ UI moderna e professionale

## Struttura del Progetto

```
italmeccanica sito final/
├── index.html                 # Homepage
├── about.html                 # Chi Siamo
├── services.html              # Servizi
├── portfolio.html             # Portfolio Progetti
├── contact.html               # Contatti e Chat
├── login.html                 # Area Riservata
├── assets/
│   ├── css/
│   │   └── style.css          # Stili CSS principali
│   ├── js/
│   │   ├── main.js            # JavaScript principale
│   │   ├── messaging.js       # Gestione Chat
│   │   └── auth.js            # Autenticazione
│   ├── images/                # Cartella per immagini
│   └── fonts/                 # Cartella per font personalizzati
├── backend/                   # Backend Node.js (opzionale)
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   ├── middleware/
│   └── models/
└── README.md                  # Questo file
```

## Come Iniziare

### Opzione 1: Senza Backend (Frontend Only)

1. Apri `index.html` nel browser
2. Naviga attraverso le diverse sezioni
3. Prova la chat cliccando il pulsante "Apri Chat" nella pagina Contatti
4. Accedi con le credenziali di test:
   - Email: `user@example.com`
   - Password: `password123`

### Opzione 2: Con Backend Node.js

1. Installa Node.js (se non è già installato)
2. Naviga nella cartella `backend`:
   ```bash
   cd backend
   npm install
   ```
3. Avvia il server:
   ```bash
   npm start
   ```
4. Accedi al sito su `http://localhost:3000`

## Credenziali di Test

### Utente Clienti
- **Email:** user@example.com
- **Password:** password123

### Utente Admin
- **Email:** admin@italmeccanica.it
- **Password:** admin123

## Tecnologie Utilizzate

- **Frontend:**
  - HTML5
  - CSS3 (con variabili CSS)
  - JavaScript Vanilla (ES6+)
  - Font Awesome Icons

- **Design:**
  - Responsive Design
  - Mobile-First Approach
  - CSS Grid e Flexbox
  - Animazioni CSS

## Pagine e Sezioni

### 1. Homepage (index.html)
- Hero section con call-to-action
- Presentazione dei principali servizi
- Sezione promozionale

### 2. Chi Siamo (about.html)
- Story aziendale
- Valori dell'azienda
- Team members
- Foto aziendali

### 3. Servizi (services.html)
- Costruzioni Residenziali
- Costruzioni Commerciali
- Manutenzione e Ristrutturazione
- Progettazione e Consulenza
- Costruzione Sostenibile
- Gestione Sicurezza

### 4. Portfolio (portfolio.html)
- Galleria di 6+ progetti
- Filtri per categoria (Residenziali, Commerciali, Ristrutturazioni)
- Dettagli progetti
- Immagini placeholder

### 5. Contatti (contact.html)
- Form contatti completo
- Informazioni di contatto
- Orari di apertura
- Social media links
- Chat in tempo reale

### 6. Login (login.html)
- Form di autenticazione
- Opzione "Ricordami"
- Link password dimenticata
- Info sulla sicurezza

## Funzionamenti Principali

### Chat Bot
La chat dispone di un bot intelligente che:
- Risponde a domande comuni sull'azienda
- Fornisce informazioni sui servizi
- Aiuta a prendere contatto
- Archivia la cronologia dei messaggi

### Filtri Portfolio
I progetti possono essere filtrati per:
- Tutti
- Residenziali
- Commerciali
- Ristrutturazioni

### Autenticazione
- Login basato su email/password
- Memorizzazione sessione utente
- Protezione pagine riservate
- Opzione "Ricordami"

## Personalizzazione

### Colori Principali
Modifica le variabili CSS in `assets/css/style.css`:
```css
:root {
    --primary-color: #1a5f7a;      /* Blu Scuro */
    --secondary-color: #f39c12;    /* Arancione */
    --dark-color: #2c3e50;         /* Nero */
    --light-color: #ecf0f1;        /* Grigio Chiaro */
}
```

### Testi e Contenuti
Tutti i testi sono direttamente nell'HTML. Modifica i file `.html` per cambiare:
- Nomi pagine
- Descrizioni servizi
- Informazioni aziendali
- Contatti

### Logo e Immagini
1. Sostituisci le immagini nella cartella `assets/images/`
2. Aggiorna i percorsi nei file HTML

## Responsive Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## Validazione Form

I form includono validazione lato client per:
- Email valida
- Campi obbligatori
- Lunghezza testo

## Performance

Il sito è ottimizzato per:
- Caricamento veloce
- Render efficiente
- Mobile performance
- SEO friendly

## Supporto Browser

- Chrome (ultimo)
- Firefox (ultimo)
- Safari (ultimo)
- Edge (ultimo)
- Mobile browsers

## Future Enhancements

Potenziali migliorie:
- [ ] Backend completo con database
- [ ] Sistema di pagamenti integrato
- [ ] Notifiche email automatiche
- [ ] Analytics e tracking
- [ ] Multilingual support
- [ ] Blog integrato
- [ ] Video gallery
- [ ] Live chat con operatori
- [ ] Galleria con lightbox
- [ ] Sistema rating progetti

## Note Importanti

1. **Autenticazione:** Attualmente basata su sessionStorage. In produzione, usare JWT tokens
2. **Chat:** Simulata con risposte predefinite. Implementare WebSocket per chat reale
3. **Storage:** Usare database (MongoDB, PostgreSQL) per produzione
4. **HTTPS:** Obbligatorio per produzione

## Licenza

© 2024 Italmeccanica Costruzioni. Tutti i diritti riservati.

## Supporto e Contatti

Per domande o support, contatta:
- Email: info@italmeccanica.it
- Tel: +39 (02) 123 456 789
- Sito: www.italmeccanica.it
