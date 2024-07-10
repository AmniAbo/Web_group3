// script.js

// Fake data for demonstration
const fakeUsers = [
    { id: 1, email: 'user1@example.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' },
    { id: 3, email: 'user3@example.com', password: 'password3' }
];

// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the login and signup forms
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    // Function to handle login form submission
    function handleLogin(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Get input values
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Find user in fake data (replace with actual backend logic)
        const user = fakeUsers.find(u => u.email === email && u.password === password);

        if (!user) {
            alert('Invalid credentials. Please try again.');
            return;
        }

        // Example: Display logged-in user information (update UI)
        document.getElementById('logged-in-user').textContent = `Logged in as ${user.email}`;
    }

    // Function to handle signup form submission
    function handleSignup(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Get input values
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Example: Perform form validation (add your own validation logic)
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Check if email is already in use
        const existingUser = fakeUsers.find(u => u.email === email);
        if (existingUser) {
            alert('Email is already in use. Please use a different email.');
            return;
        }

        // Example: Create new user (replace with actual signup logic)
        const newUser = {
            id: fakeUsers.length + 1,
            email: email,
            password: password
        };

        // Example: Add new user to fake data (simulate backend storage)
        fakeUsers.push(newUser);

        // Example: Display success message or update UI accordingly
        alert('Signup successful! Please login.');

        // Clear signup form inputs after successful signup
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
        document.getElementById('confirm-password').value = '';
    }

    // Add event listeners to forms
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});
