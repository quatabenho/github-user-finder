const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const userCard = document.getElementById('userCard');

// API endpoint
const GITHUB_API = 'https://api.github.com/users/';

searchBtn.addEventListener('click', searchUser);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchUser();
    }
});

searchInput.focus();

async function searchUser() {
    const username = searchInput.value.trim();

    if (!username) {
        showError('Please enter a username!');
        return;
    }

    hideAll();
    loading.style.display = 'block';

    try {
        const response = await fetch(GITHUB_API + username);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('User not found!');
            } else if (response.status === 403) {
                throw new Error('API rate limit exceeded. Please try again later.');
            } else {
                throw new Error('An error occurred. Please try again!');
            }
        }

        const userData = await response.json();
        displayUser(userData);

    } catch (error) {
        showError(error.message);
    } finally {
        loading.style.display = 'none';
    }
}

function displayUser(user) {
    document.getElementById('userAvatar').src = user.avatar_url;
    document.getElementById('userName').textContent = user.name || user.login;
    document.getElementById('userLogin').textContent = '@' + user.login;
    
    const bioElement = document.getElementById('userBio');
    if (user.bio) {
        bioElement.textContent = user.bio;
        bioElement.style.display = 'block';
    } else {
        bioElement.style.display = 'none';
    }

    document.getElementById('userRepos').textContent = user.public_repos;
    document.getElementById('userFollowers').textContent = user.followers;
    document.getElementById('userFollowing').textContent = user.following;

    const locationRow = document.getElementById('locationRow');
    if (user.location) {
        document.getElementById('userLocation').textContent = user.location;
        locationRow.style.display = 'flex';
    } else {
        locationRow.style.display = 'none';
    }

    const companyRow = document.getElementById('companyRow');
    if (user.company) {
        document.getElementById('userCompany').textContent = user.company;
        companyRow.style.display = 'flex';
    } else {
        companyRow.style.display = 'none';
    }

    const blogRow = document.getElementById('blogRow');
    if (user.blog) {
        const blogLink = document.getElementById('userBlog');
        let blogUrl = user.blog;
        if (!blogUrl.startsWith('http')) {
            blogUrl = 'https://' + blogUrl;
        }
        blogLink.href = blogUrl;
        blogLink.textContent = user.blog;
        blogRow.style.display = 'flex';
    } else {
        blogRow.style.display = 'none';
    }

    const twitterRow = document.getElementById('twitterRow');
    if (user.twitter_username) {
        const twitterLink = document.getElementById('userTwitter');
        twitterLink.href = 'https://twitter.com/' + user.twitter_username;
        twitterLink.textContent = '@' + user.twitter_username;
        twitterRow.style.display = 'flex';
    } else {
        twitterRow.style.display = 'none';
    }

    const joinedDate = new Date(user.created_at);
    const formattedDate = joinedDate.toLocaleDateString('en-EN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('userJoined').textContent = formattedDate;

    document.getElementById('githubLink').href = user.html_url;

    userCard.style.display = 'block';
}

function showError(message) {
    errorText.textContent = message;
    errorMessage.style.display = 'flex';
    
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 10000);
}

function hideAll() {
    loading.style.display = 'none';
    errorMessage.style.display = 'none';
    userCard.style.display = 'none';
}
