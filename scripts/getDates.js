const copyrightYear = document.getElementById('copyrightYear');
const lastModifiedDate = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

lastModifiedDate.textContent = `Last Modified: ${document.lastModified}`;

document.getElementById('copyrightYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// Check if the page visit count exists
if (localStorage.getItem('pageVisits')) {
    localStorage.setItem('pageVisits', Number(localStorage.getItem('pageVisits')) + 1);
  } else {
    localStorage.setItem('pageVisits', 1);
  }
  
  // Display the visit count
  document.getElementById('visitCounter').innerText = `Page visits: ${localStorage.getItem('pageVisits')}`;
  