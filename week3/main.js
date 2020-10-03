// Example 1
// function doSomething(){
//     console.log('Something Happened!');
// }
// addEventListener('click', doSomething);

// Example 2
// function doSomething(event) {
//     console.log(event.type);
// }
// addEventListener('click', doSomething);

//Example 3
// function doSomething(event) {
//     console.log(event.target);
// }
// addEventListener('click', doSomething);

// Example 4
// function doSomething(event) {
//     console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
// }

// Example 5
// const clickParagraph = document.getElementById('click');

// clickParagraph.addEventListener('click', () => console.log('click'));
// clickParagraph.addEventListener('mousedown', () => console.log('down'));
// clickParagraph.addEventListener('mouseup', () => console.log('up'));

// Example 6
// const dblclickParagraph = document.getElementById('dblclick')
// dblclickParagraph.addEventListener('dblclick', highlight)

function highlight(event) {
    event.target.classList.toggle('highlight')
}

// Example 7
const mouseParagraph = document.getElementById('mouse')
mouseParagraph.addEventListener('mouseover', highlight)
mouseParagraph.addEventListener('mouseout', highlight)