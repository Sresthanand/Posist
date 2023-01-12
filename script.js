const signUp = (e) => {
  let fname = document.getElementById("fname").value,
    username = document.getElementById("username").value,
    phone = document.getElementById("phone").value,
    lname = document.getElementById("lname").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() == fname.toLowerCase() &&
        data.lname.toLowerCase() == lname.toLowerCase() &&
        data.username.toLowerCase() == username.toLowerCase()
    );

  if (!exist) {
    formData.push({ fname, lname, username, phone, email, pwd });
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert("Account Created");
    location.href = "/LoginPage.html";
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
  }
  e.preventDefault();
};

function signIn(e) {
  let email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        (data.email.toLowerCase() == email ||
          data.username.toLowerCase() == email) &&
        data.pwd == pwd
    );
  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    localStorage.setItem("isLoggedIn", "true");
    location.href = "/";
  }
  e.preventDefault();
}
