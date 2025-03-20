// Get the visit message element
const visitMessage = document.getElementById('visit-message');

// Check if the last visit date is stored in local storage
const lastVisitDate = localStorage.getItem('lastVisitDate');

// If there is no last visit date, it's the first visit
if (!lastVisitDate) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  localStorage.setItem('lastVisitDate', Date.now()); // Store the current date
} else {
  // Calculate the number of days since the last visit
  const daysSinceLastVisit = Math.floor((Date.now() - parseInt(lastVisitDate)) / (1000 * 60 * 60 * 24));

  // Display the appropriate message
  if (daysSinceLastVisit < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysSinceLastVisit === 1) {
    visitMessage.textContent = `You last visited ${daysSinceLastVisit} day ago.`;
  } else {
    visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
  }

  // Update the last visit date in local storage
  localStorage.setItem('lastVisitDate', Date.now());
}

// Add more JavaScript functionality as needed
