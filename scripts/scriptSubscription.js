let selectedButtons = [];

function toggleButton(button) {
  if (button.classList.contains("services-item-selected")) {
    button.classList.remove("services-item-selected");
    selectedButtons = selectedButtons.filter(
      (item) => item !== button.textContent
    );
    console.log(selectedButtons);
  } else {
    button.classList.add("services-item-selected");
    selectedButtons.push(button.textContent);
    console.log(selectedButtons);
  }
}

function calculatePrice() {

  removeElementById('subscribe-title-block')
  $(".contact-form").removeClass("hiddend");
  $(".contact-info").removeClass("hiddend");
  $(".contact-us-form").removeClass("hiddend");
}

function sendForm(event) {
  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);

  const dataObject = {};
  formData.forEach((value, key) => {
      dataObject[key] = value;
  });
  console.log(dataObject);
  const message = selectedButtons.join("");

  $(".contact-form").addClass("hiddend");
  $(".contact-info").addClass("hiddend");
  $(".contact-us-form").addClass("hiddend");

  $(".services-item").removeClass("services-item-selected");

  emailjs.init({
    publicKey: "Y2kqHf6NgyjTvmMF7",
  });
  emailjs
    .send("service_2myvq8h", "template_pjeuy3a", {
      message: message,
      from_name: dataObject.name,
      email: dataObject.email,
      phone: dataObject.phone
    })
    .then(
      function (response) {
        console.log("Email sent successfully", response);
      },
      function (error) {
        console.error("Error sending email", error);
      }
    );
}

function removeElementById(id) {
  const element = document.getElementById(id);
  if (element) {
      element.parentNode.removeChild(element);
  }
}