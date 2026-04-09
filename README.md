# PMS Template

Questo è un template base per lo sviluppo web che utilizza **SASS** per gli stili, **Bootstrap 5** come framework CSS e **Nunjucks** come motore di template HTML.

## 🚀 Struttura del Progetto

* `scss/`: Contiene i file sorgente SASS (`custom.scss`).
* `css/`: Contiene i file CSS compilati pronti per l'uso.
* `views/`: Contiene i template Nunjucks (`.njk`) e i file HTML generati.


---

## 🛠️ Requisiti

1.  **Node.js** installato sul sistema.

---

## 🏗️ Configurazione e Installazione

1.  **Clona il repository:**
    ```bash
    git clone [https://github.com/BrayanDaga/PMS_template.git](https://github.com/BrayanDaga/PMS_template.git)
    cd PMS_template
    ```

2.  **Installa le dipendenze:**
    ```bash
    npm install
    ```

---

## 💻 Come eseguire il progetto

Per lavorare su questo progetto, la compilazione dei CSS e degli HTML viene gestita automaticamente.

### 🔄 Modalità Sviluppo (Watch Mode)
Per monitorare le modifiche ai file `.scss` e `.njk` e compilarli automaticamente, esegui il seguente comando nel terminale:

```bash
npm run dev
```

Questo comando avvierà contemporaneamente:
- **Watch SASS**: Monitora i cambiamenti in `scss/` e compila automaticamente i CSS
- **Watch Nunjucks**: Monitora i cambiamenti in `views/` e ricompila gli HTML

### 📦 Build Singoli

Se hai bisogno di compilare solo CSS o HTML:

```bash
# Compilare solo i file SASS
npm run build:sass

# Compilare solo i template Nunjucks
npm run build:njk

# Compilare una sola volta entrambi
npm run build
```

### 📝 Come funziona il workflow

1. **Modifica i file SASS**: Editare `scss/custom.scss`
   - I CSS vengono compilati automaticamente in `css/custom.css`

2. **Modifica i template Nunjucks**: Editare i file in `views/`
   - I file `.njk` vengono compilati in HTML e salvati nello stesso folder

3. **Visualizza i risultati**: Apri i file HTML generati nel browser

### 🎨 Personalizzazione Stili

- **File SASS principale**: `scss/custom.scss`
- **Bootstrap 5**: Puoi personalizzare le variabili Bootstrap importandole in `custom.scss`
- **CSS compilato**: `css/custom.css` (generato automaticamente, non modificare direttamente)

---

## 📚 Best Practices e Consigli di Sviluppo

### ✅ Organizzazione SASS
- Usa **variabili SASS** per colori, font e dimensioni ricorrenti
- Sfrutta **nesting** per mantenere il codice ordinato, ma non eccedere in profondità (max 3-4 livelli)
- Importa le variabili di Bootstrap per una consistenza visiva

```scss
// Esempio in scss/custom.scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

$primary-color: #007bff;
$spacing-unit: 1rem;

.my-component {
  color: $primary-color;
  margin: $spacing-unit;
  
  &:hover {
    opacity: 0.8;
  }
}
```

### ✅ Template Nunjucks
- Usa **macro** per componenti riutilizzabili (bottoni, card, form, ecc.)
- Mantieni i template puliti e leggibili con indentazione coerente
- Commenta le sezioni principali del layout
- Sfrutta l'**ereditarietà di template** (`extends` e `blocks`) per layout base

```nunjucks
{# Esempio: views/base.njk #}
<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}PMS Template{% endblock %}</title>
  <link rel="stylesheet" href="../css/custom.css">
</head>
<body>
  {% block content %}{% endblock %}
</body>
</html>
```

### ✅ Struttura File
```
PMS_template/
├── scss/
│   └── custom.scss          # Modifica questo file
├── css/
│   └── custom.css           # Generato automaticamente
├── views/
│   ├── base.njk             # Template base
│   └── *.njk                # Tuoi template
├── html/
│   └── *.html               # HTML generati (non modificare)
└── render.js                # Logica render Nunjucks
```

### ✅ Flusso di Lavoro
1. **Sviluppo locale**: Usa `npm run dev` per lavorare in modalità watch
2. **Test**: Apri gli HTML generati nel browser e verifica il layout
3. **Build finale**: Esegui `npm run build` prima di committare

### ✅ Debugging
- **CSS non aggiornati?** Svuota la cache del browser (Ctrl+Shift+R / Cmd+Shift+R)
- **HTML non generato?** Verifica che il file `.njk` abbia la sintassi corretta
- **Errore in watch mode?** Ferma il processo (Ctrl+C) e riavvia `npm run dev`

### ✅ Dipendenze e Aggiornamenti
- **Bootstrap**: Già incluso in `package.json` (v5.3.8)
- **SASS**: Compilatore moderno integrato
- **Nunjucks**: Motore template potente e leggero
- Per aggiornare le dipendenze: `npm update`

---