let currentOffset = 3 * 60 * 60 * 1000;

const timezoneOffsets = [
    { name: 'Москва', offset: 3 * 60 * 60 * 1000 },
    { name: 'Нью-Йорк', offset: -4 * 60 * 60 * 1000 },
    { name: 'Лондон', offset: 60 * 60 * 1000 },
];

let currentIndex = 0;

function updateTime() {
    const timeDisplay = document.getElementById('current-time');
    const currentTime = new Date();
    const localTime = new Date(currentTime.getTime() + currentTime.getTimezoneOffset() * 60000 + currentOffset);

    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const seconds = localTime.getSeconds().toString().padStart(2, '0');

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateHeaderText() {
    document.querySelector('h1').textContent = `Текущее время (${timezoneOffsets[currentIndex].name}):`;
}

function switchTimezone(direction) {
    currentIndex += direction;
    if (currentIndex >= timezoneOffsets.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = timezoneOffsets.length - 1;
    }
    currentOffset = timezoneOffsets[currentIndex].offset;
    updateHeaderText();
    updateTime();
}

updateHeaderText();
updateTime();
setInterval(updateTime, 1000);

document.getElementById('timezone-prev').addEventListener('click', () => switchTimezone(-1));
document.getElementById('timezone-next').addEventListener('click', () => switchTimezone(1));