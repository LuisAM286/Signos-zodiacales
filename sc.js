function obtenerSignoZodiacal(fecha) {
    var fechaNacimiento = new Date(fecha);
    var dia = fechaNacimiento.getDate();
    var mes = fechaNacimiento.getMonth() + 1; 

    if ((mes == 3 && dia >= 20) || (mes == 4 && dia <= 18)) {
        return "circu1"; 
    } else if ((mes == 4 && dia >= 19) || (mes == 5 && dia <= 19)) {
        return "circu2";
    } else if ((mes == 5 && dia >= 20) || (mes == 6 && dia <= 19)) {
        return "circu3";
    } else if ((mes == 6 && dia >= 20) || (mes == 7 && dia <= 21)) {
        return "circu4";
    } else if ((mes == 7 && dia >= 22) || (mes == 8 && dia <= 21)) {
        return "circu5";
    } else if ((mes == 8 && dia >= 22) || (mes == 9 && dia <= 21)) {
        return "circu6";
    } else if ((mes == 9 && dia >= 22) || (mes == 10 && dia <= 21)) {
        return "circu7";
    } else if ((mes == 10 && dia >= 22) || (mes == 11 && dia <= 20)) {
        return "circu8";
    } else if ((mes == 11 && dia >= 21) || (mes == 12 && dia <= 20)) {
        return "circu9";
    } else if ((mes == 12 && dia >= 21) || (mes == 1 && dia <= 18)) {
        return "circu10";
    } else if ((mes == 1 && dia >= 19) || (mes == 2 && dia <= 17)) {
        return "circu11";
    } else if ((mes == 2 && dia >= 18) || (mes == 3 && dia <= 19)) {
        return "circu12";
    }
}

function irAlSigno(event) {
    event.preventDefault();
    var fecha = document.getElementById("fecha").value;

    if (!fecha) return; 

    var signo = obtenerSignoZodiacal(fecha);

    if (signo) {
        var circulos = document.querySelectorAll('.circu');
        circulos.forEach(function(circulo) {
            circulo.classList.remove('active');
        });

        var elementoSigno = document.querySelector("." + signo);
        if (elementoSigno) {
            elementoSigno.classList.add('active');
            elementoSigno.scrollIntoView({ behavior: "smooth" });
        }
    }
}

document.addEventListener('click', function(event) {
    var activo = document.querySelector('.circu.active');
    if (activo && !activo.contains(event.target)) {
        activo.classList.remove('active');
    }
});

function mostrarCarta(id) {
    var cartas = document.querySelectorAll('.carta');
    cartas.forEach(function(carta) {
        carta.classList.remove('visible');
    });
    var cartaSeleccionada = document.getElementById(id);
    cartaSeleccionada.classList.add('visible');
}

function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
window.onload = function() {
    var carta = getQueryParam('carta');
    if (carta) {
        mostrarCarta(carta);
    }
}


function validarcorreo() {
    var correo = document.getElementById('correoInput').value; 
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo); 
    if (esValido) {
        alerta.textContent = 'Correo válido.';
        alerta.classList.remove('error');
        alerta.classList.add('exito');
    } else {
        alerta.textContent = 'Correo no válido.';
        alerta.classList.remove('exito');
        alerta.classList.add('error');
    }
    alerta.classList.remove('ocultar'); 
    alerta.style.display = 'block'; 

    setTimeout(() => {
        alerta.classList.add('ocultar');
        alerta.style.display = 'none'; 
    }, 3000);
}