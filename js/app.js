
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const formObj = {};
    const userDb = {
        email: "sidd@gmail.com",
        pass: "1234"
    }

    formData.forEach((value, key) => {
        formObj[key] = value;
    });

    console.log(formObj);

    if ((userDb.email === formObj.email) && (userDb.pass == formObj.password)) {
        alert("You are logged in");
        location.href = "dashboard.html";
    } else
        alert(" Something wrong Email OR Password");
});