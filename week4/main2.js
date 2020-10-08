// Assign the form to a variable
const form = document.forms['hero'];
// Add an event listener for when the form is submitted.
// This will invoke the makeHero() function when the form is submitted
form.addEventListener('submit', makeHero, false);

// makeHero function
function makeHero(event) {
    event.preventDefault() // prevent the form from being submitted
    const hero = {} // create an empty object
    hero.name = form.heroName.value // create a name property based on the value of the input field
    hero.realName = form.realName.value

    console.log(hero.name)
    console.log(hero.realName)
        // check if the checkboxes have been selected - long way
        // hero.powers = []
        // for (let i = 0; i < form.powers.length; i++) {
        //     if (form.powers[i].checked) {
        //         hero.powers.push(form.powers[i].value)
        //     }
        // }

    // check if the checkboxes have been checked - refactored
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value)

    // assign a category property to our hero object
    hero.category = form.category.value

    // process the age
    hero.age = form.age.value

    // process the city
    hero.city = form.city.value

    // form validation
    hero.origin = form.origin.value

    form.addEventListener('submit', validate, false);

    function validate(event) {
        const firstLetter = form.heroName.value[0];
        if (firstLetter.toUpperCase() === 'X') {
            event.preventDefault();
            alert('Your name is not allowed to start with X!');
        }
    }

    const label = form.querySelector('label');
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = '! Your name is not allowed to start with X.';
    label.append(error);

    function validateInline() {
        const heroName = this.value.toUpperCase();
        if (heroName.startsWith('X')) {
            error.style.display = 'block';
        } else {
            error.style.display = 'none';
        }
    }

    alert(JSON.stringify(hero)) // convert object to JSON string and display in alert dialog
    return hero
}