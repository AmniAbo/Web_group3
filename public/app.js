/**
 * Select important DOM elements
 */
const header = document.querySelector('#header'); // Select header element
const app = document.getElementById('app'); // Select app container
const ddMenu = document.querySelector('#ddMenu'); // Select dropdown menu container
const html = document.documentElement; // Select HTML element

/**
 * Toggle dark mode
 */
const toggletheme = () => {
    html.classList.toggle('dark'); // Toggle dark mode class on HTML element
    updateThemeToggle(); // Update theme toggle button
};
window.toggletheme = toggletheme; // Make function globally accessible

/**
 * Set the current view and render the appropriate content
 * @param {string} v - The view to be displayed
 */
const setView = (v) => {
    header.innerText = v; // Set header text to the selected view
    toggleMenu(true); // Hide the mobile menu

    // Render content based on the selected view
    if (v === 'Calculator') {
        renderCalculator();
    } else if (v === 'About') {
        renderAbout();
    } else if (v === 'Contact') {
        renderContact();
    }
};
window.setView = setView; // Make function globally accessible

/**
 * Toggle the visibility of the mobile menu
 * @param {boolean} [hide] - Optional parameter to hide the menu
 */
const toggleMenu = (hide) => {
    if (!hide) {
        ddMenu.classList.toggle('hidden'); // Corrected: toggle instead of toggletheme
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden'); // Corrected: toggle instead of toggletheme
        });
    } else {
        ddMenu.classList.add('hidden');
        document.querySelectorAll('svg')[0].classList.remove('hidden');
        document.querySelectorAll('svg')[1].classList.add('hidden');
    }
};

/**
 * Add a row to the container
 * @param {HTMLElement} container - The container to add the row to
 * @param {string} content - The content of the row
 */
const addRow = (container, content) => {
    const row = `<div class='grid grid-cols-5 gap-2'>${content}</div>`; // Create row HTML
    container.insertAdjacentHTML('beforeend', row); // Add row to container
};

/**
 * Add a monitor to the container
 * @param {HTMLElement} container - The container to add the monitor to
 * @param {string} [text] - Optional text for the monitor
 */
const addMonitor = (container, text) => {
    const t = text ?? ''; // Default text to empty if not provided
    const monitor = `<div id='monitor' class="bg-white dark:bg-gray-800 border-4 border-blue-400 dark:border-gray-600 h-20 flex items-center col-span-5 text-blue-800 dark:text-white p-2 rounded-lg mb-2 font-bold text-4xl">${t}</div>`; // Monitor HTML
    container.insertAdjacentHTML('beforeend', monitor); // Add monitor to container
};

/**
 * Create a button element
 * @param {string} text - The text for the button
 * @returns {string} - The HTML string for the button
 */
const button = (text) => {
    const c = text === 'calculate' ? 'col-span-4' : ''; // Conditionally set column span
    return `<div class='bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-blue-600 text-white ${c} py-1 rounded-md text-center text-lg font-bold cursor-pointer d-btn'>${text}</div>`; // Button HTML
};

/**
 * Add buttons to the container
 * @param {HTMLElement} container - The container to add the buttons to
 * @param {string[]} nums - The array of button texts
 */
const addButtons = (container, nums) => {
    const btnHTML = nums.map((n) => button(n)).join(''); // Generate button HTML
    addRow(container, btnHTML); // Add buttons row to container
};

/**
 * Handle button click events
 * @param {Event} event - The click event
 */
const click = (event) => {
    const monitor = document.getElementById('monitor'); // Select monitor element
    const bac = monitor.innerText.trim(); // Get monitor text
    const a = event.target.innerText; // Get clicked button text
    
    if (a === 'clear') {
        monitor.innerText = ''; // Clear monitor text
    } else if (a === 'calculate') {
        try {
            monitor.innerText = `${bac} = ${eval(bac.replace('^', '**'))}`; // Ensure ^ is replaced with **
        } catch (error) {
            monitor.innerText = 'Error'; // Display error if calculation fails
        }
    } else {
        monitor.innerText += a; // Append button text to monitor
    }
};

/**
 * Render the calculator view
 */
const renderCalculator = () => {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', 'calculate', 'clear']; // Button labels
    app.innerHTML = ''; // Clear app container
    addMonitor(app); // Add monitor to app container
    addButtons(app, labels); // Add buttons to app container
    const buttons = document.querySelectorAll('.d-btn'); // Select all buttons
    buttons.forEach((el) => el.addEventListener('click', click)); // Add click event listener to buttons
};

/**
 * Render the about view
 */
const renderAbout = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for About</div>'; // Render about view content
};

/**
 * Render the contact view
 */
const renderContact = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Contact</div>'; // Render contact view content
};

/**
 * Render the top menu
 */
const renderMenu = () => {
    const menuItems = ['Calculator', 'About', 'Contact']; // Menu items array
    const menuHtml = menuItems.map(item => `<button onclick="setView('${item}')">${item}</button>`).join(''); // Generate menu HTML
    document.getElementById('nav-links').innerHTML = menuHtml; // Add menu HTML to top menu
    ddMenu.innerHTML = menuHtml; // Add menu HTML to dropdown menu
};

/**
 * Update the theme toggle button based on the current theme
 */
const updateThemeToggle = () => {
    const isDark = html.classList.contains('dark'); // Check if dark mode is enabled
    document.getElementById('theme-toggle').innerHTML = isDark ?
        '<button onclick="toggletheme()">Light</button>' :
        '<button onclick="toggletheme()">Dark</button>'; // Update theme toggle button
};

/**
 * Render the theme toggle button
 */
const renderThemeToggle = () => {
    updateThemeToggle(); // Update theme toggle button
};

// Initialize the app by rendering the menu, theme toggle button, and calculator view
renderMenu(); // Render top menu
renderThemeToggle(); // Render theme toggle button
renderCalculator(); // Render calculator view
