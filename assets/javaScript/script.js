const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
const content5 = document.querySelector('.content5');
const content6 = document.querySelector('.content6');
const content7 = document.querySelector('.content7');
const content8 = document.querySelector('.content8');
const closeContent = document.querySelector('.close-content');

function closeCard (element) {
    const parent = element.parentNode;
    const grandfather = parent.parentNode;

    grandfather.classList.remove('view-content');
} 

document.addEventListener('click', (e) => {
    let el = e.target;

    if (el.classList.value == 'close-content') closeCard(el);

    switch(el.classList.value) {
        case 'topic1':

            content1.classList.add('view-content');
            break;
        case 'topic2':
            content2.classList.add('view-content');

            break;
        case 'topic3':
            content3.classList.add('view-content');

            break;
        case 'topic4':
            content4.classList.add('view-content');

            break;
        case 'topic5':
            content5.classList.add('view-content');

            break;
        case 'topic6':
            content6.classList.add('view-content');

            break;
        case 'topic7':
            content7.classList.add('view-content');

            break;
        case 'topic8':
            content8.classList.add('view-content');

            break;
    }



});
