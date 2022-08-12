let name = prompt('Qual o seu nome?');

function updateHour () {
    let upTime = document.querySelector('.js-time');

    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    upTime.innerHTML = `${hour}:${minute}`;
}

function updateGreeting () {
    let greeting = document.querySelector('.js-greeting');

    let now = new Date();
    let hour = now.getHours();

    if (hour > 0 && hour < 12) {
        greeting.innerHTML = `Bom dia, ${name}!`;
    } else if (hour >= 12 && hour < 18) {
        greeting.innerHTML = `Boa tarde, ${name}!`;
    } else {
        greeting.innerHTML = `Boa noite, ${name}!`;
    }
}

function update () {
    updateHour();
    updateGreeting();
}

update();
setInterval(update, 1000);