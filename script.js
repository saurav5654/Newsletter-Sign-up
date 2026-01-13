// Select DOM elements
const signupCard = document.getElementById('signup-card');
const successCard = document.getElementById('success-card');
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const userEmailSpan = document.getElementById('user-email');
const dismissBtn = document.getElementById('dismiss-btn');

/**
 * Validates email using a Regular Expression
 */
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Handle Form Submission
 */
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  
  const emailValue = emailInput.value.trim();

  if (validateEmail(emailValue)) {
    // 1. Success State: Hide error styles
    emailInput.classList.remove('error');
    errorMsg.style.display = 'none';

    // 2. Pass the email to the success message
    userEmailSpan.textContent = emailValue;

    // 3. Switch Views
    signupCard.classList.add('hidden');
    successCard.classList.remove('hidden');
  } else {
    // 4. Error State: Show red border and error text
    emailInput.classList.add('error');
    errorMsg.style.display = 'block';
  }
});

/**
 * Handle Dismiss Button
 */
dismissBtn.addEventListener('click', () => {
  // Reset visibility
  successCard.classList.add('hidden');
  signupCard.classList.remove('hidden');
  
  // Clear the form
  newsletterForm.reset();
  emailInput.classList.remove('error');
  errorMsg.style.display = 'none';
});

