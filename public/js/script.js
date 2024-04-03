document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle mobile navigation menu
    function toggleMobileMenu() {
      const nav = document.querySelector('nav');
      nav.classList.toggle('active');
    }
  
    // Event listener for mobile menu button click
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
  
    // Function to handle form submission
    function handleFormSubmission() {
      const form = document.getElementById('myForm');
      const formData = new FormData(form);
  
      // Example: Send form data to server using fetch API
      fetch('/submitForm', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log(data);
        // Example: Display success message to user
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('There was a problem with the form submission:', error);
        // Example: Display error message to user
        alert('There was a problem with the form submission. Please try again later.');
      });
    }
  
    // Event listener for form submission
    const form = document.getElementById('myForm');
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        handleFormSubmission();
      });
    }
  
    // Other JavaScript functionality can be added here
  });
  