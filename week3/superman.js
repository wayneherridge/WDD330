const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman.name)


const name = 'Iron Man';
const realName = 'Tony Stark';

// long way
const ironMan1 = {
    name: name,
    realName: realName
};

// short ES6 way
const ironMan2 = {
    name,
    realName
};

console.log(ironMan1.name, ironMan1.realName)
console.log(ironMan2.name, ironMan2.realName)
console.log(superman['name'])
console.log(superman["real" + " " + "name"])
console.log(superman.city) // undefined as does not exist in the data

const hulk = {
    name: "Hulk",
    ['catch' + 'Phrase']: 'Hulk Smash!'
}

console.log(hulk.catchPhrase)
console.log(hulk.name)

const bewitched = true;
const captainBritain = {
    name: 'Captain Britain',
    hero: bewitched ? false : true
}

console.log(captainBritain)

const name2 = Symbol('name')
const realName2 = Symbol('real name')
const supergirl = {
    [name2]: "Supergirl"
}

console.log(supergirl[name2])
console.log(supergirl[realName2] = 'Kara Danvers')

const daredevil = {
    [name]: 'Daredevil',
    [realName]: 'Matt Murdoch'
}

console.log('name : ' + daredevil[name])
console.log('real name : ' + daredevil[realName])

console.log(superman.fly())
    // or
console.log(superman['fly']())
console.log('city' in superman)
console.log(superman.city !== undefined)
console.log(superman.hasOwnProperty('city'))
console.log(superman.hasOwnProperty('name'))

// find all the properties of an object
for (const key in superman) {
    console.log(key + ": " + superman[key]);
}

// bring back only the objects own properties returned
for (const key in superman) {
    if (superman.hasOwnProperty(key)) {
        console.log(key + ": " + superman[key])
    }
}

// Object.keys() will return an array of all the keys of any object
for (const key of Object.keys(superman)) {
    console.log(key);
}

// Object.values() returns an array of all the objects value
for (const value of Object.values(superman)) {
    console.log(value);
}

// Object.entries() returns an array of key-value pairs
for (const [key, value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}

// adding a property
superman.city = 'Metropolis'
console.log(superman)

//changing properties
superman['real name'] = 'Kal-El';
console.log(superman)

// removing properties
delete superman.fly
console.log(superman)

// nested objects
const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' }
}
console.log(jla.wonderWoman.realName)
console.log(jla['flash']['realName'])