function subscribe(){
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");
    let success = document.querySelector(".success");
    let emailPlaceholder = document.querySelector("#emailPlaceholder");
    let mainContainer = document.querySelector(".main-container");

    if(validate(email)){
        success.style.display = "block";
        emailPlaceholder.innerHTML = `${email}`;
        mainContainer.style.display = "none";

    }else{
        error.innerHTML = "Valid email required";
        error.style.color = "red";
        document.getElementById("email").style.border = "1px solid red";  
        
    }
    function validate(email){
        const regex = /^\S+@\S+\.\S+$/;
        return regex.test(email);
    }
}
function dismissBtn() {
    window.location.href = 'index.html';
  }