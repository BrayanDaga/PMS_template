# PMS Template

Questo è un template base per lo sviluppo web che utilizza **SASS** per gli stili, **Bootstrap 5** come framework CSS e **Nunjucks** come motore di template HTML.

## 🚀 Struttura del Progetto

* `scss/`: Contiene i file sorgente SASS (`custom.scss`).
* `css/`: Contiene i file CSS compilati pronti per l'uso.
* `views/`: Contiene i template Nunjucks (`.njk`) e i file HTML generati.


---

## 🛠️ Requisiti

1.  **Node.js** installato sul sistema.
2.  **Visual Studio Code** con l'estensione [Live Nunjucks Compiler](https://marketplace.visualstudio.com/items?itemName=softsingh.live-njk) installata.

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

Per lavorare su questo progetto, è necessario gestire separatamente la compilazione dei CSS e degli HTML.

### 1. Compilazione dei CSS (SASS)
Per monitorare le modifiche ai file `.scss` e compilarli automaticamente in `.css`, esegui il seguente comando nel terminale:

```bash
npm run dev