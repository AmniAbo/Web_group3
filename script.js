// Check if fakeUsers is already set in localStorage, if not, initialize it with default users
if (!localStorage.getItem('fakeUsers')) {
    const data = [
        { id: 1, email: 'user1@example.com', password: 'password1' },
        { id: 2, email: 'user2@example.com', password: 'password2' },
        { id: 3, email: 'user3@example.com', password: 'password3' }
    ];
    localStorage.setItem('fakeUsers', JSON.stringify(data));
}

// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
    
    // Get references to the login and signup forms
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const alertContainer = document.getElementById('alert-container');

    // Function to display custom alerts
    function showAlert(message, type = 'success') {
        // ... (alert function remains unchanged)
    }

    // Function to handle login form submission
    function handleLogin(event) {
        event.preventDefault();
        console.log('Login form submitted');
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
    
        console.log('Attempting login with:', email);
    
        // Retrieve the latest fakeUsers data from localStorage
        let fakeUsers = JSON.parse(localStorage.getItem('fakeUsers')) || [];
    
        // Find user in fakeUsers array
        const user = fakeUsers.find(u => u.email === email && u.password === password);
    
        if (user) {
            console.log('Login successful for:', email);
    
            // Store the logged-in user's email in session storage
            sessionStorage.setItem('userEmail', user.email);
    
            // Redirect to the dashboard
            window.location.href = 'dashboard.html';
        } else {
            console.log('Login failed: User not found or invalid credentials');
            showAlert('User not found or invalid credentials. Please try again.', 'error');
        }
    }

    // Function to handle signup form submission
    function handleSignup(event) {
        event.preventDefault();
        console.log('Signup form submitted');
        
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
    
        console.log('Attempting signup for:', email);
    
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            console.log('Signup failed: Empty fields');
            showAlert('Please fill in all fields', 'error');
            return;
        }
        if (password !== confirmPassword) {
            console.log('Signup failed: Passwords do not match');
            showAlert('Passwords do not match', 'error');
            return;
        }
    
        // Retrieve the latest fakeUsers data from localStorage
        let fakeUsers = JSON.parse(localStorage.getItem('fakeUsers')) || [];
    
        const existingUser = fakeUsers.find(u => u.email === email);
        if (existingUser) {
            console.log('Signup failed: Email already in use');
            showAlert('Email is already in use. Please use a different email.', 'error');
            return;
        }
    
        const newUser = {
            id: fakeUsers.length + 1,
            email: email,
            password: password
        };
    
        console.log('Before adding new user:', fakeUsers);
    
        fakeUsers.push(newUser);
    
        // Update localStorage with the new fakeUsers array
        localStorage.setItem('fakeUsers', JSON.stringify(fakeUsers));
    
        console.log('After adding new user:', fakeUsers);
    
        showAlert('Signup successful! Please login.', 'success');
    
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
        document.getElementById('confirm-password').value = '';
    }

    // Add event listeners to forms
    if (loginForm) {
        console.log('Login form found');
        loginForm.addEventListener('submit', handleLogin);
    } else {
        console.log('Login form not found');
    }

    if (signupForm) {
        console.log('Signup form found');
        signupForm.addEventListener('submit', handleSignup);
    } else {
        console.log('Signup form not found');
    }

    console.log('Current fakeUsers:', JSON.parse(localStorage.getItem('fakeUsers')));
});