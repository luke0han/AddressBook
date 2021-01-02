// **********  CONTACT CONSTRUCTOR  ********* //
class Contact {
  constructor(first, last, phone, address) {
    this.first = first;
    this.last = last;
    this.phone = phone;
    this.address = address;
  }
}

// **********  ALERTS  ********* //
class Alerts {
  static deleteAlert() {
    $(".delAlert").animate({
      width: 260,
    });
    setTimeout(() => {
      $(".delAlert").animate({
        width: 0,
      });
    }, 2000);
  }

  static addAlert() {
    $(".addAlert").animate({
      width: 260,
    });
    setTimeout(() => {
      $(".addAlert").animate({
        width: 0,
      });
    }, 2000);
  }

  static warnAlert() {
    $(".warnAlert").animate({
      width: 260,
    });
    setTimeout(() => {
      $(".warnAlert").animate({
        width: 0,
      });
    }, 2000);
  }

  static phoneAlert(){
    $(".phoneAlert").animate({
      width: 260,
    });
    setTimeout(() => {
      $(".phoneAlert").animate({
        width: 0,
      });
    }, 2000);
  }

  static nameAlert(){
    $(".nameAlert").animate({
      width: 260,
    });
    setTimeout(() => {
      $(".nameAlert").animate({
        width: 0,
      });
    }, 2000);
  }

  static addressAlert(){
    $(".addressAlert").animate({
      width: 260,
    });
    setTimeout(() => {
      $(".addressAlert").animate({
        width: 0,
      });
    }, 2000);
  }
}

// **********  ACTIONS  ********* //
class Events {

  static openNewContact() {
    $(".modal").css("display", "flex");
  }

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

    const $row = $("<tr>").addClass(`${themeClass}`);
    // Create New Contact Row
    $row.html(`
        <td class="info">${contact.first}</td>
        <td class="info">${contact.last}</td>
        <td class="info">${contact.phone}</td>
        <td class="info">${contact.address}</td>
        <td><i class="fas fa-trash-alt fa-lg delete"></i></td>
        `);
    $(".table").append($row);
  }

  static closeForm() {
    $(".modal").css("display", "none");
    $(".modal-theme").css("display", "none");
  }

  static clearForm() {
    $("#first-name").val("");
    $("#last-name").val("");
    $("#phone").val("");
    $(".form-control1").val("");
    // Hide Modal
    $(".modal").css("display", "none");
  }

  static deleteContact(e) {
    e.closest("tr").remove();
    Alerts.deleteAlert(e);
  }

  static openThemeForm() {
    $(".modal-theme").css("display", "flex");
  }

  static selectTheme() {
    // Set color to default theme
    let colorTheme = "#2e2e2e";
    let colorBG = "#fff";

    // Check to see what theme is chosen and set colors
    if ($(".modal-body input[id='default']:checked").val()) {
      colorTheme = "#2e2e2e";
      colorBG = "#fff";
      $("img").css("display", "none");
      $(".defaultV").css("display", "inline-block");
      $(".table tbody tr").removeClass().addClass("default");
    } else if ($(".modal-body input[id='dark']:checked").val()) {
      colorTheme = "#a73bff";
      colorBG = "#07040a";
      $("img").css("display", "none");
      $(".darkV").css("display", "inline-block");
      $(".table tbody tr").removeClass().addClass("dark");
    } else if ($(".modal-body input[id='ocean']:checked").val()) {
      colorTheme = "#064273";
      colorBG = "#def3f6";
      $("img").css("display", "none");
      $(".oceanV").css("display", "inline-block");
      $(".table tbody tr").removeClass().addClass("ocean");
    } else if ($("input[id='forest']:checked").val()) {
      colorTheme = "#4c4442";
      colorBG = "#9dce95";
      $("img").css("display", "none");
      $(".forestV").css("display", "inline-block");
      $(".table tbody tr").removeClass().addClass("forest");
    } else if ($("input[id='desert']:checked").val()) {
      colorTheme = "#6C541E";
      colorBG = "#ECE2C6";
      $("img").css("display", "none");
      $(".desertV").css("display", "inline-block");
      $(".table tbody tr").removeClass().addClass("desert");
    }

    // Add colors to html elements
    $("body").css("color", `${colorTheme}`);
    $("body").css("background-color", `${colorBG}`);
    $("button").css("background-color", `${colorTheme}`);
    $(".modal-button").css("background-color", `${colorTheme}`);
    $(".table thead tr").css("background-color", `${colorTheme}`);
    $(".modal-head").css("background-color", `${colorTheme}`);
    $(".modal-theme").css("display", "none");
  }

  // Create search functionality
  static searchContacts(e) {
    
    const searchVal = e.value.toLowerCase().replace(/\s*/g, "");
    
    $(".info").each((i, td) => {
      const $siblings = $(td).siblings().text().toLowerCase().replace(/\s*/g, "");
      const $current = $(td).text().toLowerCase().replace(/\s*/g, "");
      let str = $siblings + $current;

      if (str.indexOf(searchVal) !== -1) {
        $(td).closest("tr").show();
      } else {
        $(td).closest("tr").hide();
      }
    });
  }

  // Clear search form and return all contacts
  static clearSearch() {
    $(".search").val("");
    $(".info").closest("tr").show();
  }
}

// **********  EVENTS  ********* //
// Open Add New Contact Form
$("#add-btn").on("click", () => Events.openNewContact());

//Close Add New Contact Form
$(".close").on("click", (i) => {
  Events.closeForm();
  Events.clearForm();
});

// Delete Contact
$('.table').on('click', '.delete', (e) => Events.deleteContact(e.target))

// Add Contact
$(".modal-button").on("click", (e) => {
  // Prevent Submit Default
  e.preventDefault()

  // Store Input Values In Variables
  const $first = $("#first-name").val()
  const $last = $("#last-name").val()
  const $phone = $("#phone").val()
  const $address = $(".add1").val() + " " + $(".add2").val() + " " + $(".city").val() + " " + $(".county").val() + " " + $(".zip").val() + " " + $(".country").val()
  const regex = /[+]*[0-9 ]+/g
  const regex2 = /\D/g

  // Check If Any Fields Are Empty
  if ($first === "" || $last === "" || $phone === "" || $address === "") {
    // If any fields empty show war alert
    Alerts.warnAlert();
  } else if(!$phone.match(regex) || $phone.length < 4){
    Alerts.phoneAlert()
  } else if(!$first.match(regex2) || !$last.match(regex2)){
    Alerts.nameAlert()
  } else if($address.length < 9){
    Alerts.addressAlert()
  } else {
    const contact = new Contact($first, $last, $phone, $address);

    // Add new contact
    Events.addNewContact(contact);

    // Clear Form
    Events.clearForm();

    // Show add alert
    Alerts.addAlert();
  }
});

// Open Theme Form
$(".theme").on("click", () => Events.openThemeForm());

// Close Theme Form
$(".close").on("click", (i) => Events.closeForm());

// Save Theme Choice
$(".theme-btn").on("click", () => Events.selectTheme());

// Search Contacts
$(".search").on("keyup", (e) => Events.searchContacts(e.target));

// Clear Search and Show Contacts
$(".search").focusout(() => Events.clearSearch());
