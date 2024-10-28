// const toggleLang = document.getElementById("toggleLang");

// toggleLang.addEventListener("click", changeLang);




// function changeLang() {
//     window.Location.href = "./assets/english.html"
//     console.log(changeLang);
    
// };


// const toggleLangEn = document.getElementById("toggleLang");

// toggleLangEn.addEventListener("click", () => {
//   window.location.href = "../index.html";
// });


const toggleLang = document.getElementById("toggleLang");
let currentLang = "pt"; // Começa em português

async function loadContent(file) {
  try {
    const response = await fetch(file);
    const html = await response.text();
    
    // Cria um elemento temporário para armazenar o conteúdo HTML carregado
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // Substitui o conteúdo do body pelo conteúdo do novo arquivo
    document.body.innerHTML = tempDiv.querySelector("body").innerHTML;
    
    // Reaplica o evento no botão `toggleLang` após a substituição do conteúdo
    document.getElementById("toggleLang").addEventListener("click", () => {
      currentLang = currentLang === "pt" ? "en" : "pt";
      const file = currentLang === "pt" ? "index.html" : "index_en.html";
      loadContent(file);
    });

  } catch (error) {
    console.error("Erro ao carregar conteúdo:", error);
  }
}

toggleLang.addEventListener("click", () => {
  // Alterna entre os arquivos de conteúdo
  currentLang = currentLang === "pt" ? "en" : "pt";
  const file = currentLang === "pt" ? "index.html" : "index_en.html";

  // Carrega o conteúdo sem recarregar a página
  loadContent(file);
});
