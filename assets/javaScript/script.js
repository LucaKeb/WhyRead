const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
const content5 = document.querySelector('.content5');
const content6 = document.querySelector('.content6');
const content7 = document.querySelector('.content7');
const content8 = document.querySelector('.content8');
const closeContent = document.querySelector('.close-content');

function noExistMouseoverInTopic(el) {
    let valueToReturn = false;

    document.querySelectorAll('.topic-tag').forEach(element => ifInForeach(element));

    function ifInForeach (element) {
        if (element.classList[0] !== el.classList[0]) valueToReturn = true
    }

    return valueToReturn;
}

function closeCard (element) {
    const parent = element.parentNode;
    const grandfather = parent.parentNode;

    grandfather.classList.remove('view-content');
} 

function reusingSwitch (expression, generalClass) {

    // console.log(` expressão: ${expression}  classe: ${generalClass}`);

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

document.addEventListener('click', (e) => {
    let el = e.target;

    if (el.classList.value == 'close-content') closeCard(el);

    document.querySelectorAll('.content-list').forEach(element => element.classList.remove('view-content'));

    reusingSwitch(el.classList[0], 'view-content');
});

document.addEventListener('mouseover', (e) => {
    const el = e.target;

    if (noExistMouseoverInTopic(el)) {
        document.querySelectorAll('.content-list').forEach(element => element.classList.remove('preview-content'));
    };

    reusingSwitch(el.classList[0], 'preview-content');
});


