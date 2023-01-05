const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
const content5 = document.querySelector('.content5');
const content6 = document.querySelector('.content6');
const content7 = document.querySelector('.content7');
const content8 = document.querySelector('.content8');
const closeContent = document.querySelector('.close-content');
const topicsList = document.querySelectorAll('.topic-tag');

// checking screen size
let widthScreen = window.innerWidth;
aInTopics();
addButtonforback();

// checking screen size when adjusted
function adjustScreen () {
    widthScreen = window.innerWidth || document.documentElement.clientWidth;
    aInTopics();

    const button = document.querySelector('.aOftheBackbutton');
    
    if (!button) addButtonforback();
    if (widthScreen > 900 && button){
        button.remove();
    }
}

// adding back button for small devices
function addButtonforback () {
    if (widthScreen < 900 ) {
    
    const tagA = document.createElement('a');
    tagA.setAttribute("href", "#topics");
    tagA.classList.add('aOftheBackbutton');

    tagA.insertAdjacentHTML('beforeend', `<button>➤</button>`)

        const section = document.querySelector(".mainSection");
        section.appendChild(tagA);
    }
}

// transition from browse mode to other devices
function aInTopics () {

    if (widthScreen <= 900 ) {
        topicsList[0].innerHTML = `<a href="#content1">Melhora o vocabulário</a>`;
        topicsList[1].innerHTML = `<a href="#content2">Desenvolve a escrita</a>`;
        topicsList[2].innerHTML = `<a href="#content3">Melhora o foco e a concentração</a>`;
        topicsList[3].innerHTML = `<a href="#content4">É uma foram de entretenimento</a>`;
        topicsList[4].innerHTML = `<a href="#content5">Ajuda a desenvolver amizades</a>`;
        topicsList[5].innerHTML = `<a href="#content6">Potencializa a memória</a>`;
        topicsList[6].innerHTML = `<a href="#content7">Benefícia o desempenho escolar</a>`;
        topicsList[7].innerHTML = `<a href="#content8">CURIOSIDADE</a>`;
    } else {
        topicsList[0].innerHTML = `Melhora o vocabulário`;
        topicsList[1].innerHTML = `Desenvolve a escrita`;
        topicsList[2].innerHTML = `Melhora o foco e a concentração`;
        topicsList[3].innerHTML = `É uma foram de entretenimento`;
        topicsList[4].innerHTML = `Ajuda a desenvolver amizades`;
        topicsList[5].innerHTML = `Potencializa a memória`;
        topicsList[6].innerHTML = `Benefícia o desempenho escolar`;
        topicsList[7].innerHTML = `CURIOSIDADE`;
    }
}

// effect when mouse hovers over topics 
function noExistMouseoverInTopic(el) {
    let valueToReturn = false;
    
    document.querySelectorAll('.topic-tag').forEach(element => ifInForeach(element));
    
    function ifInForeach (element) {
        if (element.classList[0] !== el.classList[0]) valueToReturn = true
    }
    
    return valueToReturn;
}

// effect of closing the content card
function closeCard (element) {
    const parent = element.parentNode;
    const grandfather = parent.parentNode;

    grandfather.classList.remove('view-content');
} 

function reusingSwitch (expression, generalClass) {
    
    switch(expression) {
        case 'topic1':

            content1.classList.add(generalClass);
            break;
        case 'topic2':
            content2.classList.add(generalClass);

            break;
        case 'topic3':
            content3.classList.add(generalClass);

            break;
        case 'topic4':
            content4.classList.add(generalClass);

            break;
        case 'topic5':
            content5.classList.add(generalClass);

            break;
        case 'topic6':
            content6.classList.add(generalClass);

            break;
        case 'topic7':
            content7.classList.add(generalClass);

            break;
        case 'topic8':
            content8.classList.add(generalClass);

            break;
    }

}

// open and closed effect for content cards
document.addEventListener('click', (e) => {
    let el = e.target;

    if (el.classList.value == 'close-content') closeCard(el);

    document.querySelectorAll('.content-list').forEach(element => element.classList.remove('view-content'));

    reusingSwitch(el.classList[0], 'view-content');
});

// adding hover effect to topics
document.addEventListener('mouseover', (e) => {
    const el = e.target;

    if (noExistMouseoverInTopic(el)) {
        document.querySelectorAll('.content-list').forEach(element => element.classList.remove('preview-content'));
    };

    reusingSwitch(el.classList[0], 'preview-content');
});
