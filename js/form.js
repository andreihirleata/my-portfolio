var clearForm = function() {
     
    var formPath = document.querySelector(".formField");
    formpath.value = '';

}

var displayForm = function () {

    var namePath = document.querySelector("#formName");
    var emailPath = document.querySelector("#formEmail");
    var messagePath = document.querySelector("#formMessage");
    alert("Name: " + namePath.value + "\nEmail: " + emailPath.value + "\nMessage: " + messagePath.value );
}