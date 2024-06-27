/**
 * Select important DOM elements
 */
const header = document.querySelector('h1');
const app = document.getElementById('app');
const ddMenu = document.querySelector('#ddMenu');
const sandwich = document.querySelectorAll('svg');
const html = document.documentElement;

/**
 * Toggle dark mode
 */
const toggleTheme = () => {
    console.log("Toggling theme");
    html.classList.toggle('dark');
    console.log("HTML class list:", html.classList);
    updateThemeToggle();
};

/**
 * Set the current view and render the appropriate content
 * @param {string} v - The view to be displayed
 */
const setView = (v) => {
    header.innerText = v;
    toggleMenu(true);

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
        ddMenu.classList.toggle('hidden');
        sandwich.forEach((el) => {
            el.classList.toggle('hidden');
        });
    } else {
        ddMenu.classList.add('hidden');
        sandwich[0].classList.remove('hidden');
        sandwich[1].classList.add('hidden');
    }
};

/**
 * Add a row to the container
 * @param {HTMLElement} container - The container to add the row to
 * @param {string} content - The content of the row
 */
const addRow = (container, content) => {
    const row = `<div class='grid grid-cols-5 gap-2'>${content}</div>`;
    container.insertAdjacentHTML('beforeend', row);
};

/**
 * Add a monitor to the container
 * @param {HTMLElement} container - The container to add the monitor to
 * @param {string} [text] - Optional text for the monitor
 */
const addMonitor = (container, text) => {
    const t = text ?? '';
    const monitor = `<div id='monitor' class="bg-white dark:bg-gray-800 border-4 border-blue-400 dark:border-gray-600 h-20 flex items-center col-span-5 text-blue-800 dark:text-white p-2 rounded-lg mb-2 font-bold text-4xl">${t}</div>`;
    container.insertAdjacentHTML('beforeend', monitor);
};

/**
 * Create a button element
 * @param {string} text - The text for the button
 * @returns {string} - The HTML string for the button
 */
const button = (text) => {
    const c = text === 'calculate' ? 'col-span-4' : '';
    return `<div class='bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-blue-600 text-white ${c} py-1 rounded-md text-center text-lg font-bold cursor-pointer d-btn'>${text}</div>`;
};

/**
 * Add buttons to the container
 * @param {HTMLElement} container - The container to add the buttons to
 * @param {string[]} nums - The array of button texts
 */
const addButtons = (container, nums) => {
    const btnHTML = nums.map((n) => button(n)).join('');
    addRow(container, btnHTML);
};

/**
 * Handle button click events
 * @param {Event} event - The click event
 */
const click = (event) => {
    const monitor = document.getElementById('monitor');
    const bac = monitor.innerText.trim();
    const a = event.target.innerText;
    console.log(a);
    if (a === 'clear') {
        monitor.innerText = '';
    } else if (a === 'calculate') {
        monitor.innerText = bac + '=' + eval(bac);
    } else {
        monitor.innerText += a;
    }
};

/**
 * Render the calculator view
 */
const renderCalculator = () => {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', 'calculate', 'clear'];
    app.innerHTML = '';
    addMonitor(app);
    addButtons(app, labels);
    const buttons = document.querySelectorAll('.d-btn');
    buttons.forEach((el) => el.addEventListener('click', click));
};

/**
 * Render the about view
 */
const renderAbout = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for About</div>';
};

/**
 * Render the contact view
 */
const renderContact = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Contact</div>';
};

/**
 * Render the top menu
 */
const renderMenu = () => {
    const menuItems = ['Calculator', 'About', 'Contact'];
    const menuHtml = menuItems.map(item => `<button onclick="setView('${item}')">${item}</button>`).join('');
    document.getElementById('nav-links').innerHTML = menuHtml;
    ddMenu.innerHTML = menuHtml;
};

/**
 * Update the theme toggle button based on the current theme
 */
const updateThemeToggle = () => {
    const isDark = html.classList.contains('dark');
    document.getElementById('theme-toggle').innerHTML = isDark ?
        '<button onclick="toggleTheme()">Light</button>' :
        '<button onclick="toggleTheme()">Dark</button>';
};

/**
 * Render the theme toggle button
 */
const renderThemeToggle = () => {
    updateThemeToggle();
};

// Initialize the app by rendering the menu, theme toggle button, and calculator view
renderMenu();
renderThemeToggle();
renderCalculator();
