// Année automatique dans le pied de page
document.getElementById("annee").textContent = new Date().getFullYear();

// Fait défiler les noms du titre toutes les dix secondes.
const titreNom = document.getElementById("hero-name");
const noms = ["ADJAHO", "LÉONCE", "BIENVENU"];
let nomActuel = 0;

window.setInterval(() => {
  nomActuel = (nomActuel + 1) % noms.length;
  const lettres = [...noms[nomActuel]].map((lettre, index) => {
    const span = document.createElement("span");
    span.className = index % 2 === 0 ? "letter-top" : "letter-bottom";
    span.textContent = lettre;
    return span;
  });

  const mot = document.createElement("span");
  mot.className = "name-word";
  mot.setAttribute("aria-hidden", "true");
  mot.append(...lettres);
  titreNom.replaceChildren(mot);
}, 10000);

// Met en évidence le lien du menu correspondant à la section visible
const liens = document.querySelectorAll("nav a[href^='#']");
const sections = [...liens].map(l => document.querySelector(l.getAttribute("href")));

const observer = new IntersectionObserver((entrees) => {
  entrees.forEach((e) => {
    if (e.isIntersecting) {
      liens.forEach((l) => l.classList.toggle("actif", l.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach((s) => s && observer.observe(s));