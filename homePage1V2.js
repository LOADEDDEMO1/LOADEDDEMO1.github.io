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
