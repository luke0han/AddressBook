// (function(){
// //Add New Contact
// const contacts = {
//     contacts: [],
//     init: function() {
//         this.cacheDom()
//         this.bindEvents()
//         this.render()
//     },
//     cacheDom: function(){
//         this.$modal = $('.modal')
//         this.$table = $('.table')
//         this.$btn = $('.modal-btn')
//         this.$first = $('#first-name')
//         this.$last = $('#last-name')
//         this.$phone = $('#phone')
//         this.$address = $('#address')
//         this.$tr = this.$table.find('tr')
//         this.template = this.$table.find('#contact-template').html()
//     },
//     bindEvents: function() {
//         this.$btn.on('click', this.addContact.bind(this))
//     },
//     render: function() {
//         const newContact = {
//             contacts: this.contacts,
//         }
//         this.$tr.html(this.template, newContact)
//     },
//     addContact: function(){
//         this.contacts.push(this.$first.val(), this.$last.val(), this.$phone.val(), this.$address.val())
//         // const $row = $('<tr>')

//         // $row.html = `
//         // <td>${table.first}</td>
//         // <td>${table.last}</td>
//         // <td>${table.phone}</td>
//         // <td>${table.address}</td>
//         // <td><i class="fas fa-trash-alt delete"></i></td>
//         // `
//         // $('.table').append($row)
//         this.render()
//     } 
// };

// contacts.init()
// })()

// Contact Class
class Contact {
    constructor(first, last, phone, address){
        this.first = first
        this.last = last
        this.phone = phone
        this.address = address
    }
}

// User Events
class UserEvents {
    static displayContacts() {
        const $SavedContacts = []
        const $contacts = $SavedContacts

        $contacts.forEach(contact => UserEvents.addNewContact(contact))
    }

    static addNewContact(contact){
        const $table = $('.table')
        const $row = $('<tr>')

        $row.html = `
        <td>${contact.first}</td>
        <td>${contact.last}</td>
        <td>${contact.phone}</td>
        <td>${contact.address}</td>
        <td><i class="fas fa-trash-alt delete"></i></td>
        `
        $table.append($row)
    }
}

// Store Contacts

// Display Contacts
$(document).ready(UserEvents.displayContacts)
// Add Contact
$('.modal-button').on('click', (e) => {
    // prevent submit default
    e.preventDefault();
    console.log('hi')
    // store input values in variables
    const first = $('#first-name').val()
    const last = $('#last-name').val()
    const phone = $('#phone').val()
    const address = $('#address').val()
    // create new contact
    const contact =  new Contact(first, last, phone, address)
    console.log(contact)
})

// Remove Contact


//const template = $('#contact-template').html()

// Open Add New Contact Modal Form
$('#add-btn')
.on('click', () => $('.modal')
.css('display', 'flex'))

//Close Add New Contact Modal Form
$('#close')
.on('click', (i) => $('.modal')
.css('display', 'none'))