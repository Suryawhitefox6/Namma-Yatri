// Get form input elements
const pickupInput = document.getElementsByName('pickup-location')[0];
const dropoffInput = document.getElementsByName('dropoff-location')[0];
const dateInput = document.getElementsByName('date')[0];
const timeInput = document.getElementsByName('time')[0];
const passengersInput = document.getElementsByName('passengers')[0];

// Get form submit button
const submitBtn = document.querySelector('button[type="submit"]');

// Form submit event listener
submitBtn.addEventListener('click', (e) => {
    e.preventDefault
