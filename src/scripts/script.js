window.addEventListener("load", () => {
  const name = document.getElementById("name");
  const phrase = document.getElementById("phrase");
  const moveDown = document.getElementById("moveDown");
  const playList = document.getElementById("playList");

  playList.classList.add("visibleNamePhrase");
  moveDown.classList.add("visibleNamePhrase");
  name.classList.add("visibleNamePhrase");
  phrase.classList.add("visibleNamePhrase");
});

// Função para abrir modais
const openModal = (modalBlur, modal) => {
  modalBlur.classList.add("showModal"); // Aplica a classe showModal ao fundo
  modal.classList.add("showModalLayer"); // Aplica a classe showModalLayer ao modal
};

// Função para fechar modais
const closeModal = (modalBlur, modal) => {
  modal.classList.remove("showModalLayer"); // Remove a classe showModalLayer do modal
  modalBlur.classList.remove("showModal"); // Remove a classe showModal do fundo
};

// Seleção dos elementos dos modais
const modalBlurSing = document.querySelector(".modalBlurSing");
const modalSing = document.querySelector(".modalSing");
const singurality = document.querySelector(".thirdProject");

singurality.addEventListener("click", () => {
  openModal(modalBlurSing, modalSing);
  console.log("Sing");
});

// Prevenir fechamento ao clicar dentro do modal
modalSing.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede o fechamento do modal ao clicar dentro dele
});

modalBlurSing.addEventListener("click", () => {
  closeModal(modalBlurSing, modalSing);
  console.log("Sing Blur");
});

const modalBlurCrud = document.querySelector(".modalBlurCrud");
const modalCrud = document.querySelector(".modalCrud");
const appCrud = document.querySelector(".secondProject");

appCrud.addEventListener("click", () => {
  openModal(modalBlurCrud, modalCrud);
  console.log("App Crud");
});

// Prevenir fechamento ao clicar dentro do modal
modalCrud.addEventListener("click", (event) => {
  event.stopPropagation();
});

modalBlurCrud.addEventListener("click", () => {
  closeModal(modalBlurCrud, modalCrud);
  console.log("Crud Blur");
});

const modalBlurComp = document.querySelector(".modalBlurComp");
const modalComp = document.querySelector(".modalComp");
const comp = document.querySelector(".firstProject");

comp.addEventListener("click", () => {
  openModal(modalBlurComp, modalComp);
  console.log("comp");
});

// Prevenir fechamento ao clicar dentro do modal
modalComp.addEventListener("click", (event) => {
  event.stopPropagation();
});

modalBlurComp.addEventListener("click", () => {
  closeModal(modalBlurComp, modalComp);
  console.log('debugando');
});

const modalBlurStudio = document.querySelector(".modalBlurStudio");
const modalStudio = document.querySelector(".modalStudio");
const studio = document.querySelector(".fourthProject");

studio.addEventListener("click", () => {
  openModal(modalBlurStudio, modalStudio);
  console.log("Studio Ghibli");
});

// Prevenir fechamento ao clicar dentro do modal
modalStudio.addEventListener("click", (event) => {
  event.stopPropagation();
});

modalBlurStudio.addEventListener("click", () => {
  closeModal(modalBlurStudio, modalStudio);
});

// Fechar modais com os botões de fechamento
const closeModalProjects = document.querySelectorAll(".bi.bi-x");
closeModalProjects.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(modalBlurComp, modalComp);
    closeModal(modalBlurCrud, modalCrud);
    closeModal(modalBlurSing, modalSing);
    closeModal(modalBlurStudio, modalStudio);
    console.log("Fechando modal com botão");
  });
});

// Script responsável pelas animações das linguagens
const technologies = document.querySelectorAll(".backgroundLanguage");
const descriptions = document.querySelectorAll(".backgroundContent");

const showDescription = (index) => {
  descriptions.forEach((description) => {
    description.classList.add("hideLanguagesContent");
  });

  descriptions[index].classList.remove("hideLanguagesContent");
};

technologies.forEach((tech, index) => {
  tech.addEventListener("click", () => {
    showDescription(index);
  });
});

// Exibir a descrição inicial
showDescription(0);
