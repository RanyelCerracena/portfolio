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
  modalBlur.classList.add("showModal");
  modal.classList.add("showModalLayer");
};

// Função para fechar modais
const closeModal = (modalBlur, modal) => {
  modal.classList.remove("showModalLayer");
  modalBlur.classList.remove("showModal");
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
  event.stopPropagation();
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

// Alterar a cor das cores de fundo
const aboutMe = document.querySelector(".aboutMe");

// Cria o observador
const observer = new IntersectionObserver((entries) => {
  const firstCircle = document.querySelector(".firstCircle");
  const secondCircle = document.querySelector(".secondCircle");
  const thirdCircle = document.querySelector(".thirdCircle");

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      firstCircle.style.backgroundColor = "#4D8BE0";
      secondCircle.style.backgroundColor = "#7EE0A3";
      thirdCircle.style.backgroundColor = "#7EDBE0";
    } else {
      firstCircle.style.backgroundColor = "#6846ff";
      secondCircle.style.backgroundColor = "#a84ef1";
      thirdCircle.style.backgroundColor = "#2796ff";
    }
  });
});
observer.observe(aboutMe);

const skills = document.querySelector(".skills");

const observerSkills = new IntersectionObserver((entries) => {
  const line = document.querySelector(".line");

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      line.classList.add("openLine");
    } else {
      line.classList.remove("openLine");
    }
  });
});
observerSkills.observe(skills);
