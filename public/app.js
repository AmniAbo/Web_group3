<<<<<<< HEAD
// Define an object to encapsulate the app functionality
const App = {
    init() {
        this.cacheDOM();
        this.render();
        this.bindEvents();
    },

    cacheDOM() {
        this.header = document.querySelector('#header');
        this.appContainer = document.getElementById('app');
        this.ddMenu = document.querySelector('#ddMenu');
        this.html = document.documentElement;
        this.menuToggle = document.getElementById('menu-toggle');
        this.navLinks = document.getElementById('nav-links');
        this.themeToggleContainer = document.getElementById('theme-toggle');
    },

    render() {
        this.renderMenu();
        this.renderThemeToggle();
        this.renderCalculator(); // Initial view
    },

    bindEvents() {
        this.menuToggle.addEventListener('click', this.toggleMenu.bind(this));
    },

    toggleMenu() {
        this.ddMenu.classList.toggle('hidden');
        this.menuToggle.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden');
        });
    },

    setView(view) {
        this.header.innerText = view;
        this.toggleMenu(true); // Hide the mobile menu

        switch (view) {
            case 'Calculator':
                this.renderCalculator();
                break;
            case 'About':
                this.renderAbout();
                break;
            case 'Contact':
                this.renderContact();
                break;
            default:
                break;
        }
    },

    renderMenu() {
        const menuItems = ['Calculator', 'About', 'Contact'];
        const menuHtml = menuItems.map(item => `<button onclick="App.setView('${item}')">${item}</button>`).join('');
        this.navLinks.innerHTML = menuHtml;
        this.ddMenu.innerHTML = menuHtml;
    },

    renderThemeToggle() {
        this.updateThemeToggle();
    },

    updateThemeToggle() {
        const isDark = this.html.classList.contains('dark');
        this.themeToggleContainer.innerHTML = isDark ?
            '<button onclick="App.toggle()">Light</button>' :
            '<button onclick="App.toggle()">Dark</button>';
    },

    toggle() {
        this.html.classList.toggle('dark');
        this.updateThemeToggle();
    },

    renderCalculator() {
        const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', 'calculate', 'clear'];
        this.appContainer.innerHTML = '';
        this.addMonitor();
        this.addButtons(labels);
    },

    addMonitor(text = '') {
        const monitor = document.createElement('div');
        monitor.id = 'monitor';
        monitor.className = 'bg-white dark:bg-gray-800 border-4 border-blue-400 dark:border-gray-600 h-20 flex items-center col-span-5 text-blue-800 dark:text-white p-2 rounded-lg mb-2 font-bold text-4xl';
        monitor.textContent = text;
        this.appContainer.appendChild(monitor);
    },

    addButtons(nums) {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-5 gap-2';
        const btnHTML = nums.map(n => this.createButton(n)).join('');
        row.innerHTML = btnHTML;
        this.appContainer.appendChild(row);
    },

    createButton(text) {
        const c = text === 'calculate' ? 'col-span-4' : '';
        return `<div class='bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-blue-600 text-white ${c} py-1 rounded-md text-center text-lg font-bold cursor-pointer d-btn' onclick="App.handleClick(event)">${text}</div>`;
    },

    handleClick(event) {
        const monitor = document.getElementById('monitor');
        const bac = monitor.innerText.trim();
        const text = event.target.innerText;

        switch (text) {
            case 'clear':
                monitor.innerText = '';
                break;
            case 'calculate':
                try {
                    monitor.innerText = `${bac} = ${eval(bac)}`;
                } catch (error) {
                    monitor.innerText = 'Error';
                }
                break;
            default:
                monitor.innerText += text;
                break;
        }
    },

    renderAbout() {
        this.appContainer.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for About</div>';
    },

    renderContact() {
        this.appContainer.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Contact</div>';
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
=======
/**
 * Select important DOM elements
 */
const header = document.querySelector('#header'); // Select header element
const app = document.getElementById('app'); // Select app container
const ddMenu = document.querySelector('#ddMenu'); // Select dropdown menu container
const sandwich = document.querySelectorAll('svg'); // Select sandwich menu icons
const html = document.documentElement; // Select HTML element

/**
 * Toggle dark mode
 */
const toggle = () => {
    html.classList.toggle('dark'); // Toggle dark mode class on HTML element
    updateThemeToggle(); // Update theme toggle button
};

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

/**
 * Toggle the visibility of the mobile menu
 * @param {boolean} [hide] - Optional parameter to hide the menu
 */
const toggleMenu = (hide) => {
    if (!hide) {
        ddMenu.classList.toggle('hidden'); // Toggle visibility of dropdown menu
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden'); // Toggle visibility of sandwich menu icons
        });
    } else {
        ddMenu.classList.add('hidden'); // Hide dropdown menu
        document.querySelectorAll('svg')[0].classList.remove('hidden'); // Show first sandwich icon
        document.querySelectorAll('svg')[1].classList.add('hidden'); // Hide second sandwich icon
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
            monitor.innerText = `${bac} = ${eval(bac)}`; // Calculate and display result
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
        '<button onclick="toggle()">Light</button>' :
        '<button onclick="toggle()">Dark</button>'; // Update theme toggle button
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
>>>>>>> d9bf05fc2d1bc4f2955c86df588da6c601821413
