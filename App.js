document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginButton').addEventListener('click', login);

    var audioSuccess = new Audio('./Success.mp3'); 
    var audioFailure = new Audio('./Fail.mp3'); 

    function login() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === "Zadkinv" && password === "jamesbond") {
            alert("Inicio de sesión exitoso");
            playAudio(audioSuccess);
            // Puedes agregar aquí la lógica de redirección si es necesario
        } else {
            alert("Credenciales Incorrectas");
            playAudio(audioFailure);
        }
    }

    function playAudio(audioElement) {
        audioElement.play();
    }
});
