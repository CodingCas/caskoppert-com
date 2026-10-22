// Stuurt bezoekers met een Nederlandse browser van de Engelse pagina naar /nl/.
// Crawlers sturen geen voorkeurstaal mee en worden dus niet omgeleid.
if (document.documentElement.lang === "en" && /^nl/i.test(navigator.language || "")) {
  location.replace(location.protocol === "file:" ? "nl/index.html" : "/nl/");
}
