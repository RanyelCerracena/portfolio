window.addEventListener('load', () => {
    const name = document.getElementById('name');
    const phrase = document.getElementById('phrase');
    const moveDown = document.getElementById('moveDown');
    const playList = document.getElementById('playList');

    playList.classList.add('visibleNamePhrase');
    moveDown.classList.add('visibleNamePhrase');
    name.classList.add('visibleNamePhrase');
    phrase.classList.add('visibleNamePhrase');

});

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })

});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => {
    myObserver.observe(element);
});

const modalBlurSing = document.querySelector('.modalBlurSing');
const modalSing = document.querySelector('.modalSing');
const singurality = document.querySelector('.thirdProject');
const closeModalProjects = document.querySelectorAll('.bi.bi-x');

singurality.addEventListener('click', () => {
    modalBlurSing.classList.add('showModal');
    modalSing.classList.add('showModal');
    closeModalProjects.classList.add('showModal');
    console.log('Sing');
});

modalBlurSing.addEventListener('click', () => {
    modalBlurSing.classList.remove('showModal');
    modalSing.classList.remove('showModal');
    closeModalProjects.classList.remove('showModal');    
    console.log('Sing Blur');
})

const modalBlurCrud = document.querySelector('.modalBlurCrud');
const modalCrud = document.querySelector('.modalCrud');
const appCrud = document.querySelector('.secondProject');

appCrud.addEventListener('click', () => {
    modalBlurCrud.classList.add('showModal');
    modalCrud.classList.add('showModal');
    closeModalProjects.classList.add('showModal');
    console.log('App Crud');
});

modalBlurCrud.addEventListener('click', () => {
    modalBlurCrud.classList.remove('showModal');
    modalCrud.classList.remove('showModal');
    closeModalProjects.classList.remove('showModal');
    console.log('Crud Blur');
})


const modalBlurComp = document.querySelector('.modalBlurComp');
const modalComp = document.querySelector('.modalComp');
const comp = document.querySelector('.firstProject');

comp.addEventListener('click', () =>{
    modalBlurComp.classList.add('showModal');
    modalComp.classList.add('showModal');
    closeModalProjects.classList.add('showModal');
    console.log('comp');
})

modalBlurComp.addEventListener('click', () => {
    modalBlurComp.classList.remove('showModal');
    modalComp.classList.remove('showModal');
    closeModalProjects.classList.remove('showModal');
})

closeModalProjects.forEach(button => {
    button.addEventListener('click', () => {
        modalBlurComp.classList.remove('showModal');
        modalComp.classList.remove('showModal');
        modalBlurCrud.classList.remove('showModal');
        modalCrud.classList.remove('showModal');
        modalBlurSing.classList.remove('showModal');
        modalSing.classList.remove('showModal');
        button.classList.remove('showModal');
    });
});