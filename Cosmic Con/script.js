// contador

const targetDate = new Date(new Date().getFullYear(), 10, 15, 23, 59, 59);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-container").innerHTML = "<h1>O TEMPO ACABOU!</h1>";
    }
}

// pop-up

const countdownInterval = setInterval(updateCountdown, 1000);

function mostrarPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <p>Inscrição confirmada com sucesso! 🎉</p>
            <button onclick="fecharPopup()">Fechar</button>
        </div>
    `;

    document.body.appendChild(popup);
}

function fecharPopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}

document.getElementById('inscricao-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    mostrarPopup(); 
});