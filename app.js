document.querySelector("#name").addEventListener("blur", function () {

  const n = document.querySelector("#name");
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(n.value)) {
    n.classList.add("is-invalid");
  } else {
    n.classList.remove("is-invalid");
  }
})


document.querySelector("#zip").addEventListener("blur", function () {

  const z = document.querySelector("#zip");
  const re = /^[0-9]{3,5}$/;

  if (!re.test(z.value)) {
    z.classList.add("is-invalid");
  } else {
    z.classList.remove("is-invalid");
  }
})

document.querySelector("#email").addEventListener("blur", function () {

  const email = document.querySelector("#email");
  const re = /\S+@\S+/;;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
})


document.querySelector("#phone").addEventListener("blur", function () {

  const phone = document.querySelector("#phone");
  const re = /^[0-9]{6,12}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
});