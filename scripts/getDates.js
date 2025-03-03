const copyrightYear = document.getElementById('copyrightYear');
const lastModifiedDate = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

lastModifiedDate.textContent = `Last Modified: ${document.lastModified}`;
