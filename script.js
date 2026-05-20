const button = document.querySelector("button");

button.addEventListener("click", function(){

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    if(username === "admin" && password === "bull10"){
        window.location.href = "home.html";
    } else {
        alert("Foute login");
    }

});