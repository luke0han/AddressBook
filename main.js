// Contact Class
class Contact {
  constructor(first, last, phone, address) {
    this.first = first;
    this.last = last;
    this.phone = phone;
    this.address = address;
  }
}

// User Events
class UserEvents {
  // Create New Contact Row
  static addNewContact(contact) {
    let themeClass = "#fff";
    let $bodyBG = $("body").css("background-color");
    if ($bodyBG === "rgba(0, 0, 0, 0)") {
      themeClass = "default";
    } else if ($bodyBG === "rgb(222, 243, 246)") {
      themeClass = "ocean";
    } else if ($bodyBG === "rgb(7, 4, 10)") {
      themeClass = "dark";
    } else if ($bodyBG === "rgb(157, 206, 149)") {
      themeClass = "forest";
    } else if ($bodyBG === "rgb(236, 226, 198)") {
      themeClass = "desert";
    }

    const $row = $("<tr>").addClass(`${themeClass}`)

    $row.html(`
        <td class="info">${contact.first}</td>
        <td class="info">${contact.last}</td>
        <td class="info">${contact.phone}</td>
        <td class="info">${contact.address}</td>
        <td><i class="fas fa-trash-alt delete"></i></td>
        `)
    $(".table").append($row)
  }

  // Clear All Form Fields
  static clearForm() {
    $("#first-name").val("")
    $("#last-name").val("")
    $("#phone").val("")
    $("#address").val("")
  }
}

// Add Contact
$(".modal-button").on("click", (e) => {
  // Prevent Submit Default
  e.preventDefault()
  // Store Input Values In Variables
  const $first = $("#first-name").val()
  const $last = $("#last-name").val()
  const $phone = $("#phone").val()
  const $address = $("#address").val()
  //Check If Any Fields Are Empty
  if ($first === "" || $last === "" || $phone === "" || $address === "") {
    alert("Please Fill In All Fields!");
  } else {
    const $contact = new Contact($first, $last, $phone, $address);
    UserEvents.addNewContact($contact);
    // Hide Modal
    $(".modal").css("display", "none");
    // Clear Form
    UserEvents.clearForm()
    $('#alert').removeClass().addClass('addCont')
    .css('display', 'flex')
    $('.iconAdd').css('display', 'flex')
    $('.message').text('Contact Added!')
    setTimeout(() => {
        $('#alert').css('display', 'none')
        
    }, 2000)
    $('.iconAdd').css('display', 'none')
  }
})

// Delete Contact
$(".table").on("click", ".delete", (e) => {
    e.target.closest("tr").remove()

    $('#alert').removeClass().addClass('delMsg')
    .css('display', 'flex')
    $('.iconDel').css('display', 'flex')
    $('.message').text('Contact Deleted!')
    setTimeout(() => {
        $('#alert').css('display', 'none')
        
    }, 2000)
    $('.iconDel').css('display', 'none')
})

// Open Add New Contact Form
$("#add-btn").on("click", () => $(".modal").css("display", "flex"));

//Close Add New Contact Form
$("#close").on("click", (i) => {
  $(".modal").css("display", "none");
  UserEvents.clearForm()
})

// Open Theme Form
$(".theme").on("click", () => $(".modal-theme").css("display", "flex"));

// Close Theme Form
$(".close").on("click", (i) => {
  $(".modal-theme").css("display", "none");
})

// Save Theme Choice
$(".theme-btn").on("click", () => {
  let colorTheme = "#2e2e2e";
  let colorBG = "#fff";

  if ($(".modal-body input[id='default']:checked").val()) {
    colorTheme = "#2e2e2e";
    colorBG = "#fff";
    $(".table tbody tr:nth-child(odd)").removeClass().addClass("default");
  } else if ($(".modal-body input[id='dark']:checked").val()) {
    colorTheme = "#a73bff";
    colorBG = "#07040a";
    $(".table tbody tr").removeClass().addClass("dark");
  } else if ($(".modal-body input[id='ocean']:checked").val()) {
    colorTheme = "#064273";
    colorBG = "#def3f6";
    $(".table tbody tr").removeClass().addClass("ocean");
  } else if ($("input[id='forest']:checked").val()) {
    colorTheme = "#4c4442";
    colorBG = "#9dce95";
    $(".table tbody tr").removeClass().addClass("forest");
  } else if ($("input[id='desert']:checked").val()) {
    colorTheme = "#6C541E";
    colorBG = "#ECE2C6";
    $(".table tbody tr").removeClass().addClass("desert");
  }

  $("body").css("color", `${colorTheme}`);
  $("body").css("background-color", `${colorBG}`);
  $("button").css("background-color", `${colorTheme}`);
  $(".modal-button").css("background-color", `${colorTheme}`);
  $(".table thead tr").css("background-color", `${colorTheme}`);
  $(".modal-head").css("background-color", `${colorTheme}`);
  $(".modal-theme").css("display", "none");
})

// Search Contacts
$(".search").on("keyup", (e) => {
  const searchVal = e.target.value.toLowerCase().replace(/\s*/g, "");
  
  $(".info").each((i, td) => {
    const $siblings = $(td).siblings().text().toLowerCase();
    const $current = $(td).text().toLowerCase();
    let str = $siblings + $current;

    if (str.indexOf(searchVal) !== -1) {
      $(td).closest("tr").show();
    } else {
      $(td).closest("tr").hide();
    }
  })
})

// Clear Search and Show Contacts
$(".search").focusout(() => {
    $('.search').val('')
    $('.info').closest('tr').show()
})