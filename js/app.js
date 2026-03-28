/*
  app.js - JavaScript-ul aplicatiei DevConnect Static

  Structura:
  1. DATE
  2. RANDARE
  3. VALIDARE
  4. FORMULAR
  5. INIT
*/

// ============================================================
// 1. DATE - Speakeri si Workshopuri
// ============================================================

const speakeri = [
  {
    id: 1,
    nume: "Ana Popescu",
    titlu: "Senior Frontend Engineer",
    companie: "Google",
    sesiune: "React la Scara Mare",
    tip: "Talk",
    data: "2025-09-15",
    ora: "10:00",
    sala: "Sala A",
    poza: "https://i.pravatar.cc/300?img=1",
    bio: "Ana lucreaza la Google din 2018 si conduce echipa de frontend pentru Google Maps.",
    twitter: "@AnaPopescuDev",
  },
  {
    id: 2,
    nume: "Ion Ionescu",
    titlu: "DevOps Lead",
    companie: "Microsoft",
    sesiune: "CI/CD cu GitHub Actions",
    tip: "Workshop",
    data: "2025-09-15",
    ora: "14:00",
    sala: "Sala B",
    poza: "https://i.pravatar.cc/300?img=3",
    bio: "Ion este expert in DevOps si automatizare, cu 10 ani experienta in infrastructura cloud.",
    twitter: "@IonIonescuOps",
  },
  {
    id: 3,
    nume: "Maria Constantin",
    titlu: "AI Researcher",
    companie: "DeepMind",
    sesiune: "AI in Dezvoltarea Web",
    tip: "Talk",
    data: "2025-09-16",
    ora: "11:00",
    sala: "Sala A",
    poza: "https://i.pravatar.cc/300?img=5",
    bio: "Maria cerceteaza aplicatiile AI in interfete utilizator si accesibilitate.",
    twitter: "@MariaConstAI",
  },
  {
    id: 4,
    nume: "Radu Marin",
    titlu: "Node.js Core Contributor",
    companie: "Freelancer",
    sesiune: "Node.js in Productie",
    tip: "Talk",
    data: "2025-09-15",
    ora: "14:00",
    sala: "Sala A",
    poza: "https://i.pravatar.cc/300?img=8",
    bio: "Radu contribuie la Node.js core si a construit sisteme pentru 10M+ utilizatori.",
    twitter: "@RaduMarinJS",
  },
  {
    id: 5,
    nume: "Elena Popa",
    titlu: "Cloud Architect",
    companie: "AWS",
    sesiune: "Docker pentru Dezvoltatori",
    tip: "Workshop",
    data: "2025-09-15",
    ora: "14:00",
    sala: "Sala B",
    poza: "https://i.pravatar.cc/300?img=9",
    bio: "Elena proiecteaza arhitecturi cloud pentru startup-uri si enterprise la Amazon Web Services.",
    twitter: "@ElenaPopaCloud",
  },
  {
    id: 6,
    nume: "Mihai Dumitru",
    titlu: "Security Engineer",
    companie: "Cloudflare",
    sesiune: "Securitate Web in 2025",
    tip: "Talk",
    data: "2025-09-16",
    ora: "14:00",
    sala: "Sala A",
    poza: "https://i.pravatar.cc/300?img=12",
    bio: "Mihai protejeaza infrastructura Cloudflare si tine conferinte despre vulnerabilitati web.",
    twitter: "@MihaiSecurity",
  },
];

const workshopuri = [
  {
    id: 1,
    titlu: "React Avansat: Hooks si Performance",
    speaker: "Ana Popescu",
    durata: "3 ore",
    nivel: "Avansat",
    locuri: 30,
    locuriLibere: 8,
    data: "15 septembrie",
    ora: "10:00 - 13:00",
    sala: "Sala A",
    descriere: "Patterns avansate React, optimizare re-randari, Suspense si Concurrent Mode.",
  },
  {
    id: 2,
    titlu: "CI/CD complet cu GitHub Actions",
    speaker: "Ion Ionescu",
    durata: "4 ore",
    nivel: "Intermediar",
    locuri: 25,
    locuriLibere: 0,
    data: "15 septembrie",
    ora: "14:00 - 18:00",
    sala: "Sala B",
    descriere: "De la zero la deployment automat cu teste, Docker si GitHub Actions.",
  },
  {
    id: 3,
    titlu: "Introducere in AI pentru Dezvoltatori Web",
    speaker: "Maria Constantin",
    durata: "2 ore",
    nivel: "Incepator",
    locuri: 40,
    locuriLibere: 22,
    data: "16 septembrie",
    ora: "11:00 - 13:00",
    sala: "Sala A",
    descriere: "API-uri AI integrate in aplicatii web reale.",
  },
];

console.log("Date incarcate:", speakeri.length, "speakeri,", workshopuri.length, "workshopuri");

// ============================================================
// 2. RANDARE - Generare HTML din date
// ============================================================

function creeazaCardSpeaker(speaker) {
  const culoareTip = speaker.tip === "Workshop" ? "#2E5FAC" : "#1A6B6B";

  return `
    <article class="card-speaker" data-id="${speaker.id}">
      <figure>
        <img
          src="${speaker.poza}"
          alt="Fotografie ${speaker.nume}, ${speaker.titlu} la ${speaker.companie}"
          width="300"
          height="300"
          loading="lazy"
        >
        <figcaption>${speaker.companie}</figcaption>
      </figure>

      <div class="card-body">
        <span class="badge-tip" style="background:${culoareTip}">
          ${speaker.tip}
        </span>
        <h3>${speaker.nume}</h3>
        <p class="titlu-job">${speaker.titlu}</p>
        <p class="sesiune">${speaker.sesiune}</p>
        <p class="data-sesiune">
          <time datetime="${speaker.data}T${speaker.ora}">
            ${speaker.data.slice(8, 10)} sept. • ${speaker.ora} • ${speaker.sala}
          </time>
        </p>
        <p class="bio">${speaker.bio}</p>
        <a
          href="https://twitter.com/${speaker.twitter.replace("@", "")}"
          class="link-twitter"
          target="_blank"
          rel="noopener"
        >
          ${speaker.twitter}
        </a>
      </div>
    </article>
  `;
}

function randeazaSpeakeri() {
  const container = document.querySelector(".grid-speakeri");

  if (!container) {
    console.error("Eroare: .grid-speakeri nu a fost gasit in pagina!");
    return;
  }

  container.innerHTML = speakeri.map(creeazaCardSpeaker).join("");
  console.log(`Randat ${speakeri.length} carduri de speakeri.`);
}

function creeazaCardWorkshop(workshop) {
  const complet = workshop.locuriLibere === 0;
  const procentOcupat = Math.round(
    ((workshop.locuri - workshop.locuriLibere) / workshop.locuri) * 100
  );

  return `
    <article class="card-workshop ${complet ? "complet" : ""}">
      <div class="workshop-header">
        <span class="badge-nivel nivel-${workshop.nivel.toLowerCase()}">${workshop.nivel}</span>
        <span class="workshop-durata">${workshop.durata}</span>
      </div>

      <h3>${workshop.titlu}</h3>
      <p class="workshop-speaker">cu ${workshop.speaker}</p>
      <p class="workshop-descriere">${workshop.descriere}</p>

      <div class="workshop-meta">
        <p>${workshop.data} • ${workshop.ora}</p>
        <p>${workshop.sala}</p>
      </div>

      <div class="workshop-locuri">
        <div class="bara-progres">
          <div class="bara-umpluta" style="width: ${procentOcupat}%"></div>
        </div>

        <p class="text-locuri">
          ${
            complet
              ? "<strong>Complet</strong> - lista de asteptare disponibila"
              : `<strong>${workshop.locuriLibere}</strong> locuri disponibile din ${workshop.locuri}`
          }
        </p>
      </div>

      <button class="btn-inscriere ${complet ? "btn-asteptare" : "btn-primar"}" data-workshop-id="${workshop.id}">
        ${complet ? "Lista de asteptare" : "Inscrie-te"}
      </button>
    </article>
  `;
}

function randeazaWorkshopuri() {
  const sectiuneContact = document.querySelector("#contact .container");
  if (!sectiuneContact) return;

  if (document.querySelector(".grid-workshopuri")) return;

  const divWorkshopuri = document.createElement("div");
  divWorkshopuri.className = "grid-workshopuri";
  divWorkshopuri.innerHTML = workshopuri.map(creeazaCardWorkshop).join("");

  const titluWorkshopuri = document.createElement("h2");
  titluWorkshopuri.textContent = "Workshopuri Disponibile";
  titluWorkshopuri.style.textAlign = "center";
  titluWorkshopuri.style.color = "#1B3A6B";
  titluWorkshopuri.style.marginBottom = "2rem";

  const form = sectiuneContact.querySelector("form");
  sectiuneContact.insertBefore(titluWorkshopuri, form);
  sectiuneContact.insertBefore(divWorkshopuri, form);

  console.log(`Randat ${workshopuri.length} carduri de workshopuri.`);
}

// ============================================================
// 3. VALIDARE
// ============================================================

const reguli = {
  "nume-complet": (val) => {
    if (val.trim().length < 3) {
      return "Numele trebuie sa aiba minim 3 caractere.";
    }
    if (!/^[a-zA-ZAÂÎȘȚăâîșț\s-]+$/.test(val)) {
      return "Numele poate contine doar litere, spatii si cratima.";
    }
    return "";
  },

  email: (val) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      return "Adresa de email nu este valida. Exemplu: ana@gmail.com";
    }
    return "";
  },

  telefon: (val) => {
    if (val.trim() === "") return "";
    if (!/^(\+40|0)[0-9]{9}$/.test(val.replace(/\s/g, ""))) {
      return "Format: +40 7XX XXX XXX sau 07XX XXX XXX";
    }
    return "";
  },
};

function afiseazaEroare(idCamp, mesaj) {
  const spanEroare = document.getElementById("eroare-" + idCamp);
  const input = document.getElementById(idCamp);

  if (!spanEroare || !input) return;

  if (mesaj) {
    spanEroare.textContent = mesaj;
    spanEroare.removeAttribute("hidden");
    input.style.borderColor = "#dc3545";
    input.setAttribute("aria-invalid", "true");
  } else {
    spanEroare.textContent = "";
    spanEroare.setAttribute("hidden", "");
    input.style.borderColor = "#28a745";
    input.removeAttribute("aria-invalid");
  }
}

function valideazaCamp(idCamp) {
  const input = document.getElementById(idCamp);
  if (!input || !reguli[idCamp]) return true;

  const valoare = input.value;
  const eroare = reguli[idCamp](valoare);

  afiseazaEroare(idCamp, eroare);
  return eroare === "";
}

function valideazaWorkshopuri() {
  const checkboxuri = document.querySelectorAll('input[name="workshop"]:checked');

  if (checkboxuri.length > 2) {
    alert("Poti selecta maximum 2 workshopuri!");
    this.checked = false;
    return false;
  }

  return true;
}

function ataseazaValidareTimReal() {
  const campuri = ["nume-complet", "email", "telefon"];

  campuri.forEach((idCamp) => {
    const input = document.getElementById(idCamp);
    if (!input) return;

    input.addEventListener("blur", () => {
      input.dataset.atins = "true";
      valideazaCamp(idCamp);
    });

    input.addEventListener("input", () => {
      if (input.dataset.atins === "true") {
        valideazaCamp(idCamp);
      }
    });
  });

  document.querySelectorAll('input[name="workshop"]').forEach((cb) => {
    cb.addEventListener("change", valideazaWorkshopuri);
  });
}

// ============================================================
// 4. FORMULAR - Submit si localStorage
// ============================================================

function colecteazaDateFormular() {
  const workshopuriSelectate = Array.from(
    document.querySelectorAll('input[name="workshop"]:checked')
  ).map((cb) => cb.value);

  const tipRadio = document.querySelector('input[name="tipParticipant"]:checked');

  return {
    numeComplet: document.getElementById("nume-complet")?.value.trim() || "",
    email: document.getElementById("email")?.value.trim() || "",
    telefon: document.getElementById("telefon")?.value.trim() || "",
    tipParticipant: tipRadio ? tipRadio.value : "student",
    workshopuri: workshopuriSelectate,
    mesaj: document.getElementById("mesaj")?.value.trim() || "",
    dataInregistrare: new Date().toISOString(),
  };
}

function salveazaInregistrare(date) {
  const existente = JSON.parse(localStorage.getItem("devconnect_inregistrari") || "[]");
  existente.push(date);
  localStorage.setItem("devconnect_inregistrari", JSON.stringify(existente));

  console.log("Inregistrare salvata:", date);
  console.log("Total inregistrari:", existente.length);
}

function afiseazaMesajStatus(tip, mesaj) {
  const div = document.getElementById("mesaj-status");
  if (!div) return;

  div.textContent = mesaj;
  div.removeAttribute("hidden");

  div.style.padding = "1rem";
  div.style.borderRadius = "8px";
  div.style.marginTop = "1rem";
  div.style.fontWeight = "600";

  if (tip === "succes") {
    div.style.background = "#d4edda";
    div.style.color = "#155724";
    div.style.border = "1px solid #c3e6cb";
  } else {
    div.style.background = "#f8d7da";
    div.style.color = "#721c24";
    div.style.border = "1px solid #f5c6cb";
  }

  div.scrollIntoView({ behavior: "smooth", block: "center" });
}

function gestioneazaSubmit(eveniment) {
  eveniment.preventDefault();

  const numeValid = valideazaCamp("nume-complet");
  const emailValid = valideazaCamp("email");
  const telefonValid = valideazaCamp("telefon");

  ["nume-complet", "email", "telefon"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.dataset.atins = "true";
  });

  if (!numeValid || !emailValid || !telefonValid) {
    afiseazaMesajStatus(
      "eroare",
      "Formularul contine erori. Verifica campurile marcate cu rosu."
    );

    const primaEroare = document.querySelector('[aria-invalid="true"]');
    if (primaEroare) primaEroare.focus();

    return;
  }

  const date = colecteazaDateFormular();

  const existente = JSON.parse(localStorage.getItem("devconnect_inregistrari") || "[]");
  const emailDuplicat = existente.some((r) => r.email === date.email);

  if (emailDuplicat) {
    afiseazaMesajStatus(
      "eroare",
      `Adresa ${date.email} este deja inregistrata la DevConnect 2025.`
    );
    return;
  }

  salveazaInregistrare(date);

  const numeAfisat = date.numeComplet.split(" ")[0];
  afiseazaMesajStatus(
    "succes",
    `Multumim, ${numeAfisat}! Inregistrarea ta a fost primita. Vei primi confirmarea la ${date.email}.`
  );

  eveniment.target.reset();

  ["nume-complet", "email", "telefon"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.borderColor = "";
      el.dataset.atins = "false";
    }
  });

  document.querySelectorAll(".mesaj-eroare").forEach((span) => {
    span.textContent = "";
    span.setAttribute("hidden", "");
  });
}

function initFormular() {
  const form = document.getElementById("form-inregistrare");

  if (!form) {
    console.error("Formularul #form-inregistrare nu a fost gasit!");
    return;
  }

  form.addEventListener("submit", gestioneazaSubmit);
  ataseazaValidareTimReal();
  console.log("Formular initializat cu validare.");
}

// ============================================================
// 5. INIT
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM gata - initializez aplicatia DevConnect...");

  randeazaSpeakeri();
  randeazaWorkshopuri();
  initFormular();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const tinta = document.querySelector(this.getAttribute("href"));
      if (tinta) {
        e.preventDefault();
        tinta.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".card-speaker, .card-workshop").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    observer.observe(card);
  });

  console.log("Aplicatie DevConnect initiata cu succes!");
});

window.devconnect_debug = function () {
  const date = JSON.parse(localStorage.getItem("devconnect_inregistrari") || "[]");
  console.table(date);
  return date;
};
