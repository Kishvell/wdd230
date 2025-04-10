const baseURL = "https://kishvell.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('links-container'); // Ensure you have this element in your HTML
    linksContainer.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekElement = document.createElement('div');
        weekElement.innerHTML = `<h3>${week.week}</h3>`;
        
        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${baseURL}${link.url}">${link.title}</a>`;
            linksList.appendChild(listItem);
        });

        weekElement.appendChild(linksList);
        linksContainer.appendChild(weekElement);
    });
}

getLinks();
