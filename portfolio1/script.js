// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animation for Vertical Roadmap
// Scroll Animation for Timeline
// Scroll Animation for Timeline
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-content');
    
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.classList.add('active');
        }
    });
});


// Fetch GitHub Repositories and Display
const username = 'ManisaiGondrala'; // Replace with your GitHub username
const repoContainer = document.getElementById('repo-container');

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const repoCard = document.createElement('a');
            repoCard.href = repo.html_url;  // Make the entire card link to the repository
            repoCard.target = "_blank";     // Open the repository in a new tab
            repoCard.classList.add('repo-card');
            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <br>
                <p>${repo.description ? repo.description : 'No description available.'}</p>
            `;
            repoContainer.appendChild(repoCard);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
