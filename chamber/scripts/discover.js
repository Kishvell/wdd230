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

// Get the last visit date from localStorage
const lastVisitDate = localStorage.getItem('lastVisitDate');

// Calculate the difference in days
const currentDate = new Date();
let daysBetweenVisits = 0;
if (lastVisitDate) {
  const lastVisit = new Date(lastVisitDate);
  daysBetweenVisits = Math.round((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
}

// Display the message based on the days between visits
if (daysBetweenVisits === 0) {
  document.getElementById('visitMessage').textContent = 'Welcome back!';
} else if (daysBetweenVisits < 7) {
  document.getElementById('visitMessage').textContent = `You haven't visited in ${daysBetweenVisits} days!`;
} else {
  document.getElementById('visitMessage').textContent = 'It's been a while since you last visited!';
}

// Update the last visit date in localStorage
localStorage.setItem('lastVisitDate', currentDate.toString());
