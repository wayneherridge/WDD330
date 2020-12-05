// Journal Entry Class
class Entry {
    constructor(date, title, post) {
        this.date = date;
        this.title = title;
        this.post = post;
    }
}

// UI Class
class UI {

    // FUNCTION TO DISPLAY THE ENTRIES IN TABLE
    static displayEntries() {
        let posts = Store.getEntries();

        posts.forEach((entry) => UI.addEntryToList(entry));

    }

    // FUNCTION TO ADD AN ENTRY TO THE TABLE
    static addEntryToList(entry) {
        const list = document.querySelector('#journal-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.title}</td>
            <td>${entry.post}</td>
        `;

        list.appendChild(row);
    }

    // FUNCTION TO CLEAR FIELDS AFTER ADDING THE ENTRY
    static clearFields() {
        document.querySelector('#date').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#post').value = '';
    }

    // FUNCTION TO SHOW ALERT
    static showAlerts(message, className) {
        // CREATE ALERT DIV WITH ALL NECESSARY PROPERTIES
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        // ADD MESSAGE TO THIS DIV
        div.appendChild(document.createTextNode(message));
        // ADD DIV TO DOM
        const container = document.querySelector('.container');
        const form = document.querySelector('#journal-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// STORE CLASS : HANDLES STORAGE
class Store {
    static getEntries() {
        let entries;
        if (localStorage.getItem('entries') === null) {
            entries = [];
        } else {
            entries = JSON.parse(localStorage.getItem('entries'));
        }

        return entries;
    }

    static saveEntry(entry) {
        let entries;
        entries = Store.getEntries();
        entries.push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
    }
}

// EVENT: DISPLAY ENTRIES
document.addEventListener('DOMContentLoaded', UI.displayEntries);

// EVENT: ADD ENTRY TO LIST 
document.querySelector('#journal-form').addEventListener('submit', (e) => {

    // PREVENT DEFAULT
    e.preventDefault();

    // GET VALUES
    const date = document.querySelector('#date').value;
    const title = document.querySelector('#title').value;
    const post = document.querySelector('#post').value;

    if (date === '' || title === '' || post === '') {
        UI.showAlerts('Please fill in all details...', 'danger');
    } else {
        // CREATE ENTRY OBJECT
        const entry = new Entry(date, title, post);

        // ADD ENTRY TO LIST
        UI.addEntryToList(entry);

        // SAVE ENTRY TO LOCAL STORAGE
        Store.saveEntry(entry);

        // SHOW SUCCESS MESSAGE
        UI.showAlerts('Entry Added', 'success');

        // CLEAR FIELDS
        UI.clearFields();
    }

});