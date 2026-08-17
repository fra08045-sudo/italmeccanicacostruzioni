# 🚀 Guida di Installazione e Avvio

Benvenuto! Questa guida ti aiuterà ad avviare il sito web di Italmeccanica Costruzioni.

## 📋 Requisiti

- Browser moderno (Chrome, Firefox, Safari, Edge)
- Node.js v14+ (opzionale, solo per backend)
- Git (opzionale)

## 🎯 Opzione 1: Frontend Only (Consigliato per iniziare)

### Metodo A: Apri direttamente il file
1. Naviga alla cartella del progetto
2. Fai doppio click su `index.html`
3. Il sito si aprirà nel tuo browser predefinito

### Metodo B: Usa un server locale (Python)
Se hai Python installato:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Accedi a: `http://localhost:8000`

### Metodo C: Usa VS Code Live Server
1. Installa l'estensione "Live Server" da VS Code
2. Fai click destro su `index.html`
3. Seleziona "Open with Live Server"

## 🔧 Opzione 2: Con Backend Node.js

### Prerequisiti
- Node.js v14+ installato
- npm o yarn

### Passi di Installazione

1. **Naviga nella cartella backend:**
   ```bash
   cd backend
   ```

2. **Installa le dipendenze:**
   ```bash
   npm install
   ```

3. **Configura variabili d'ambiente:**
   ```bash
   cp .env.example .env
   ```

4. **Avvia il server:**
   ```bash
   npm start
   ```

   Oppure per modalità development (con auto-reload):
   ```bash
   npm install -g nodemon
   npm run dev
   ```

5. **Accedi al sito:**
   - Apri il browser a `http://localhost:3000`

## 📝 Test del Sito

### Credenziali di Test

**Utente Cliente:**
- Email: `user@example.com`
- Password: `password123`

**Admin:**
- Email: `admin@italmeccanica.it`
- Password: `admin123`

### Test delle Funzionalità

1. **Homepage**: Visualizza la presentazione aziendale
2. **Navigazione**: Testa il menu mobile su schermi piccoli
3. **Portfolio**: Filtra i progetti per categoria
4. **Contatti**: Compila il form e prova la chat
5. **Login**: Accedi con le credenziali di test
6. **Dashboard**: Visualizza i tuoi progetti personali

## 📁 Struttura File

```
italmeccanica sito final/
├── index.html              # Homepage
├── about.html              # Chi Siamo
├── services.html           # Servizi
├── portfolio.html          # Portfolio
├── contact.html            # Contatti
├── login.html              # Login
├── dashboard.html          # Area Riservata
├── README.md               # Documentazione
├── assets/
│   ├── css/
│   │   └── style.css       # Stili principali
│   ├── js/
│   │   ├── main.js         # Logica principale
│   │   ├── messaging.js    # Chat
│   │   └── auth.js         # Autenticazione
│   ├── images/             # Immagini (da aggiungere)
│   └── fonts/              # Font personalizzati (opzionale)
└── backend/                # Backend Node.js (opzionale)
    ├── server.js
    ├── package.json
    └── routes/
```

## 🎨 Personalizzazione

### Cambiare Colori
Modifica `/assets/css/style.css`:
```css
:root {
    --primary-color: #1a5f7a;      /* Blu principale */
    --secondary-color: #f39c12;    /* Colore accento */
}
```

### Cambiare Logo/Testo
Modifica direttamente nei file `.html`:
- `<h1>Italmeccanica Costruzioni</h1>`
- Testi nelle sezioni

### Aggiungere Immagini
1. Salva le immagini in `assets/images/`
2. Modifica i percorsi nel file CSS:
   ```css
   background-image: url('../images/your-image.jpg');
   ```

## 🐛 Troubleshooting

### Il sito non carica correttamente
- Cancella la cache del browser (Ctrl+Shift+Delete)
- Ricarica la pagina (F5)

### La chat non funziona
- Assicurati che JavaScript sia abilitato
- Controlla la console del browser (F12) per errori

### Il backend non si avvia
```bash
# Verifica che Node.js è installato
node --version

# Reinstalla dipendenze
rm -rf node_modules
npm install
```

### Porta 3000 già in uso
Cambia la porta in `backend/server.js`:
```javascript
const PORT = process.env.PORT || 3001; // Cambia 3000 in 3001
```

## 📚 Risorse Utili

- [MDN Web Docs](https://developer.mozilla.org/) - Documentazione HTML/CSS/JS
- [Express.js Guide](https://expressjs.com/) - Backend framework
- [Font Awesome Icons](https://fontawesome.com/) - Icone
- [Google Fonts](https://fonts.google.com/) - Font gratuiti

## 🚀 Deploy in Produzione

### Deploy Frontend (Vercel, Netlify)
1. Carica i file HTML/CSS/JS
2. Configura dominio

### Deploy Backend (Heroku, Railway, DigitalOcean)
1. Prepara repository Git
2. Connetti al servizio di deploy
3. Configura variabili d'ambiente
4. Deploy automatico da Git

## 📞 Supporto

Per problemi o domande:
- Email: info@italmeccanica.it
- Tel: +39 (02) 123 456 789

## 📄 Licenza

© 2024 Italmeccanica Costruzioni. Tutti i diritti riservati.

---

**Suggerimento**: Se è la prima volta, consigliamo di iniziare con l'Opzione 1 (Frontend Only) per familiarizzare con il sito, poi espandere con il backend quando necessario.

Buon divertimento! 🎉
