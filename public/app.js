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
