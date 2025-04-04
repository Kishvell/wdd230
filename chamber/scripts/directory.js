const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");
const display = document.querySelector("article");

function showGrid() {
    display.classList.remove("list");
    display.classList.add("grid");
}

function showList() {
    display.classList.remove("grid");
    display.classList.add("list");
}

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);

const membersContainer = document.querySelector("article");
const membersData = JSON.parse(`
        [
          {
            "name": "Acme Corporation",
            "address": "123 Main Street, Anytown, CA 91234",
            "phone": "555-123-4567",
            "website": "https://www.acmecorp.com",
            "image": "Acme.png",
            "membershipLevel": "Gold"
          },
          {
            "name": "Tech Solutions Inc.",
            "address": "456 Elm Street, Springfield, OR 97477",
            "phone": "555-888-9999",
            "website": "https://www.techsolutions.com",
            "image": "Dynadot.webp",
            "membershipLevel": "Silver"
          },
          {
            "name": "Creative Designs",
            "address": "789 Oak Avenue, Sunnyville, AZ 85281",
            "phone": "555-555-5555",
            "website": "https://www.creativedesigns.com",
            "image": "CreativDesig.jpeg",
            "membershipLevel": "Gold"
          },
          {
            "name": "Global Enterprises",
            "address": "1011 Pine Street, Global City, NY 10001",
            "phone": "555-111-2222",
            "website": "https://www.globalenterprises.com",
            "image": "GoDaddy.png",
            "membershipLevel": "Platinum"
          },
          {
            "name": "Innovative Solutions",
            "address": "1213 Maple Lane, Innovationville, TX 75001",
            "phone": "555-444-3333",
            "website": "https://www.innovativesolutions.com",
            "image": "innovative-solutions-logo.svg",
            "membershipLevel": "Silver"
          },
          {
            "name": "Dynamic Services",
            "address": "1415 Cedar Drive, Dynamic City, FL 33101",
            "phone": "555-777-8888",
            "website": "https://www.dynamicservices.com",
            "image": "Dynamic-services.jpeg",
            "membershipLevel": "Gold"
          },
          {
            "name": "Future Tech",
            "address": "1617 Willow Street, Futureville, CA 94101",
            "phone": "555-999-0000",
            "website": "https://www.futuretech.com",
            "image": "GoDaddy.png",
            "membershipLevel": "Platinum"
          }
        ]
        `);

        membersData.forEach(member => {
            const memberSection = document.createElement("section");
            memberSection.classList.add("member");

            const memberImage = document.createElement("img");
            memberImage.src = `images/${member.image}`;
            memberImage.alt = member.name;
            memberSection.appendChild(memberImage);

            const memberName = document.createElement("h3");
            memberName.textContent = member.name;
            memberSection.appendChild(memberName);

            const membershipLevel = document.createElement("p");
            membershipLevel.textContent = member.membershipLevel;
            memberSection.appendChild(membershipLevel);

            const memberWebsite = document.createElement("a");
            memberWebsite.href = member.website;
            memberWebsite.textContent = "Website";
            memberSection.appendChild(memberWebsite);

            membersContainer.appendChild(memberSection);
        });

        // Set the default view (you can choose grid or list)
        showGrid();
