
 /*function mostrarAlerta() {
    alert("Queso");
}*/



const circles = document.querySelectorAll('.circu');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        circle.classList.toggle('active');
    });
});


