const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}); 

document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('#leaderboard-table tbody');

    // Arrays of names and surnames
    const names = ['John', 'Jane', 'Alice', 'Bob', 'Sam', 'Tim', 'Emily', 'Michael', 'Sarah', 'David'];
    const surnames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Button', 'Green', 'Taylor', 'Anderson', 'Williams', 'Wilson'];

    // Shuffle surnames array to ensure uniqueness
    for (let i = surnames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [surnames[i], surnames[j]] = [surnames[j], surnames[i]];
    }

    const statuses = ['Dormant', 'Gearing', 'Loaded', 'Hyper Loaded', 'Erupt'];

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement('tr');

        const rankCell = document.createElement('td');
        rankCell.textContent = i;
        tr.appendChild(rankCell);

        const imageCell = document.createElement('td');
        const image = document.createElement('img');
        image.src = `avatar${i}.png`; // Assuming the images are named avatar1.png, avatar2.png, etc.
        image.alt = `Avatar ${i}`;
        image.width = 60;
        image.height = 60;
        imageCell.appendChild(image);
        tr.appendChild(imageCell);

        // Select name and surname based on index
        const randomName = names[i - 1];
        const randomSurname = surnames[i - 1];
        const nameCell = document.createElement('td');
        nameCell.textContent = `${randomName} ${randomSurname}`;
        tr.appendChild(nameCell);

        // Generate random status
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        const statusCell = document.createElement('td');
        statusCell.textContent = randomStatus;
        tr.appendChild(statusCell);

        const pointsCell = document.createElement('td');
        pointsCell.textContent = Math.floor(Math.random() * 10000); // Random points between 0 and 10000
        tr.appendChild(pointsCell);

        const progressCell = document.createElement('td');
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        const progressFill = document.createElement('div');
        progressFill.className = 'progress-bar-fill';
        progressFill.style.width = `${(pointsCell.textContent / 10000) * 100}%`; // Percentage of points
        progressBar.appendChild(progressFill);
        progressCell.appendChild(progressBar);
        tr.appendChild(progressCell);

        tbody.appendChild(tr);
    }
});
