document.getElementById("githubForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const url = document.getElementById("githubUrl").value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            const pfp = data.avatar_url;
            const name = data.name;
            const login = data.login;
            const loc = data.location;
            const followers = data.followers;
            const publicRepos = data.public_repos;

            const cardContainer = document.getElementById("cardContainer");
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                        <img src="${pfp}" alt="Profile Picture">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Username:</strong> ${login}</p>
                        <p><strong>Location:</strong> ${loc}</p>
                        <p><strong>Followers:</strong> ${followers}</p>
                        <p><strong>Public Repos:</strong> ${publicRepos}</p>
                    `;
            cardContainer.appendChild(card);
        }
    };
    xhr.send();
});