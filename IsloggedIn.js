let isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn == "false") {
  console.log("hii")
  alert("Please login first");
  location.href = "/LoginPage.html";
} 
