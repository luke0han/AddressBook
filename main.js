// Open Add New Contact Modal Form
$('#add-btn')
.on('click', () => $('.modal')
.css('display', 'flex'))

//Close Add New Contact Modal Form
$('#close')
.on('click', (i) => $('.modal')
.css('display', 'none'))

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

        $row.html( `
        <td>${contact.first}</td>
        <td>${contact.last}</td>
        <td>${contact.phone}</td>
        <td>${contact.address}</td>
        <td><i class="fas fa-trash-alt delete"></i></td>
        `)
        $table.append($row)
    }

    static clearForm() {
        $('#first-name').val('')
        $('#last-name').val('')
        $('#phone').val('')
        $('#address').val('')
    }

    static deleteContact(e){
        e.closest('tr').remove()
    }
}

// Store Contacts

// Display Contacts
$(document).ready(UserEvents.displayContacts)
// Add Contact
$('.modal-button').on('click', (e) => {
    // prevent submit default
    e.preventDefault();
    // store input values in variables
    const $first = $('#first-name').val()
    const $last = $('#last-name').val()
    const $phone = $('#phone').val()
    const $address = $('#address').val()

    if($first === '' || $last === '' || $phone === '' || $address === '') {
     alert('Please Fill In All Fields!')
    } else{
         const $contact =  new Contact($first, $last, $phone, $address)
      UserEvents.addNewContact($contact)
      // Hide modal
      $('.modal').css('display', 'none')
      // Clear form
      UserEvents.clearForm()
    }
})

// Remove Contact
$('.table').on('click', (e) => {
    UserEvents.deleteContact(e.target)
})


