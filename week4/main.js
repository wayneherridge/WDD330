const form = document.forms['search'];
form.addEventListener('submit', search, false);

// function search() {
//     alert('Form Submitted');
// }

// function search(event) {
//     alert('Form Submitted');
//     event.preventDefault();
// }

const input = form.elements.searchInput;

input.value = 'Search Here'

input.addEventListener('focus', function() {
    if (input.value === 'Search Here') {
        input.value = ''
    }
}, false);
input.addEventListener('blur', function() {
    if (input.value === '') {
        input.value = 'Search Here';
    }
}, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}