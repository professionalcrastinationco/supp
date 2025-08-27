// Main Application JavaScript - Version 001

// State Management
let currentScreen = 'landing-screen';
let navigationHistory = [];
let userStack = JSON.parse(localStorage.getItem('supplementStack')) || [];
let currentMode = localStorage.getItem('appMode') || 'simple';
let selectedProblem = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set initial mode
    updateModeDisplay();
    
    // Update stack count
    updateStackCount();
    
    // Initialize event listeners
    setupEventListeners();
    
    // Setup hamburger menu
    setupHamburgerMenu();
    
    // Show landing screen
    showScreen('landing-screen');
}

// Hamburger Menu Setup
function setupHamburgerMenu() {
    const burger = document.getElementById('navbar-burger');
    const menu = document.getElementById('navMenu');
    
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }
    
    // Close menu when clicking a link on mobile
    document.querySelectorAll('.navbar-item').forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        });
    });
}

// Navigation Functions
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    // Show requested screen
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.style.display = 'block';
        
        // Add to history if not going back
        if (currentScreen !== screenId) {
            navigationHistory.push(currentScreen);
        }
        currentScreen = screenId;
    }
    
    // Show/hide stack button
    const stackBtn = document.getElementById('stack-float-btn');
    if (screenId !== 'landing-screen' && screenId !== 'stack-screen' && userStack.length > 0) {
        stackBtn.style.display = 'block';
    } else {
        stackBtn.style.display = 'none';
    }
    
    // Scroll to top when changing screens
    window.scrollTo(0, 0);
}

function goBack() {
    if (navigationHistory.length > 0) {
        const previousScreen = navigationHistory.pop();
        showScreen(previousScreen);
    } else {
        showScreen('landing-screen');
    }
}

// Mode Management
function toggleMode() {
    currentMode = currentMode === 'simple' ? 'advanced' : 'simple';
    localStorage.setItem('appMode', currentMode);
    updateModeDisplay();
    updateUIForMode();
}

function updateModeDisplay() {
    const btn = document.getElementById('mode-toggle-btn');
    if (currentMode === 'simple') {
        btn.textContent = 'Simple';
        btn.classList.remove('is-primary');
        btn.classList.add('is-info');
    } else {
        btn.textContent = 'Advanced';
        btn.classList.remove('is-info');
        btn.classList.add('is-primary');
    }
}

function updateUIForMode() {
    // This would update various UI elements based on mode
    // For now, we'll mainly use it for limiting results
    if (currentScreen === 'results-screen') {
        showResults(selectedProblem);
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Landing page buttons
    document.getElementById('need-help-btn').addEventListener('click', () => {
        showProblemSelection();
    });
    
    document.getElementById('know-what-btn').addEventListener('click', () => {
        showBrowseScreen();
    });
    
    // Search from landing
    document.getElementById('main-search-btn').addEventListener('click', performMainSearch);
    document.getElementById('main-search').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performMainSearch();
    });
    
    // Safety screen buttons
    document.getElementById('show-recommendations-btn').addEventListener('click', () => {
        showResults(selectedProblem);
    });
    
    document.getElementById('skip-safety-btn').addEventListener('click', () => {
        showResults(selectedProblem);
    });
    
    // Stack button
    document.getElementById('stack-float-btn').addEventListener('click', () => {
        showScreen('stack-screen');
        showStack();
    });
    
    // Browse search - only add if elements exist (they're on browse screen)
    if (document.getElementById('browse-search')) {
        document.getElementById('browse-search').addEventListener('input', filterBrowseResults);
    }
    if (document.getElementById('sort-select')) {
        document.getElementById('sort-select').addEventListener('change', sortBrowseResults);
    }
}

// Show Natural Ingredients (filtered browse)
function showNaturalIngredients() {
    showBrowseScreen();
    
    // Auto-select natural categories
    setTimeout(() => {
        ['herb', 'mushroom'].forEach(cat => {
            const btn = document.querySelector(`.category-filter[data-category="${cat}"]`);
            if (btn) {
                btn.classList.add('is-primary');
            }
        });
        filterBrowseResults();
    }, 100);
}

// Problem Selection
function showProblemSelection() {
    showScreen('problem-screen');
    
    const grid = document.getElementById('problem-grid');
    grid.innerHTML = '';
    
    mockProblems.forEach(problem => {
        const col = document.createElement('div');
        col.className = 'column is-3';
        col.innerHTML = `
            <div class="box has-text-centered problem-box" onclick="selectProblem('${problem.id}')">
                <p class="is-size-1 mb-2">${problem.icon}</p>
                <p class="is-size-5">${problem.name}</p>
            </div>
        `;
        grid.appendChild(col);
    });
}

function selectProblem(problemId) {
    selectedProblem = problemId;
    showScreen('safety-screen');
}

// Results Display
function showResults(problemId) {
    showScreen('results-screen');
    
    const problem = mockProblems.find(p => p.id === problemId);
    document.getElementById('problem-name').textContent = problem.name.toLowerCase();
    
    const container = document.getElementById('results-container');
    container.innerHTML = '';
    
    // Get supplements for this problem
    const supplements = problem.topSupplements.map(id => getSupplementById(id));
    
    // Limit to 3 in simple mode, show all in advanced mode
    const supplementsToShow = currentMode === 'simple' ? supplements.slice(0, 3) : supplements;
    
    // Create result cards
    supplementsToShow.forEach((supp, index) => {
        const ranking = index === 0 ? '🥇 Start Here:' : index === 1 ? '🥈 Alternative:' : '🥉 Power Option:';
        const description = index === 0 ? 'Safe, effective, well-studied' : 
                          index === 1 ? 'Different mechanism, also gentle' : 
                          'Stronger effects, more considerations';
        
        const card = document.createElement('div');
        card.className = 'box mb-4';
        
        // Different display based on mode
        if (currentMode === 'simple') {
            card.innerHTML = `
                <div class="level">
                    <div class="level-left">
                        <div>
                            <p class="has-text-weight-bold is-size-5">${ranking}</p>
                            <p class="title is-4 mb-2">${supp.name}</p>
                            <p class="subtitle is-6 mb-2">"${description}"</p>
                            <p class="mb-2">💰 ${supp.price}/month</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="buttons">
                            <button class="button is-info" onclick="showSupplementDetail('${supp.id}')">
                                Learn more
                            </button>
                            <button class="button is-primary" onclick="addToStack('${supp.id}')">
                                Add to stack
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Advanced mode - more detailed info
            card.innerHTML = `
                <div class="mb-3">
                    <p class="title is-4 mb-2">${supp.name}</p>
                    <span class="tag is-${supp.researchLevel === 'gold' ? 'success' : supp.researchLevel === 'silver' ? 'info' : 'warning'} mr-2">
                        ${supp.researchLevel.toUpperCase()} Evidence
                    </span>
                    <span class="tag">${supp.category}</span>
                </div>
                <p class="mb-2"><strong>Dose:</strong> ${supp.dose} | <strong>Timing:</strong> ${supp.timing}</p>
                <p class="mb-2"><strong>Benefits:</strong> ${supp.benefits.slice(0, 2).join(', ')}</p>
                <p class="mb-2"><strong>Forms:</strong> ${Object.keys(supp.forms).join(', ')}</p>
                <p class="mb-3">💰 ${supp.price}/month</p>
                <div class="buttons">
                    <button class="button is-info" onclick="showSupplementDetail('${supp.id}')">
                        Full details
                    </button>
                    <button class="button is-primary" onclick="addToStack('${supp.id}')">
                        Add to stack
                    </button>
                </div>
            `;
        }
        
        container.appendChild(card);
    });
}

// Browse Screen
function showBrowseScreen() {
    showScreen('browse-screen');
    
    // Setup category filters
    const filterContainer = document.getElementById('category-filters');
    filterContainer.innerHTML = '';
    
    categories.forEach(cat => {
        const control = document.createElement('div');
        control.className = 'control';
        control.innerHTML = `
            <button class="button is-small category-filter" data-category="${cat}">
                ${cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
            </button>
        `;
        filterContainer.appendChild(control);
    });
    
    // Add click handlers to category filters
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.classList.toggle('is-primary');
            filterBrowseResults();
        });
    });
    
    // Show all supplements initially
    displayBrowseResults(mockSupplements);
}

function displayBrowseResults(supplements) {
    const container = document.getElementById('browse-results');
    container.innerHTML = '';
    
    supplements.forEach(supp => {
        const col = document.createElement('div');
        col.className = 'column is-4';
        col.innerHTML = `
            <div class="box browse-item" onclick="showSupplementDetail('${supp.id}')">
                <p class="title is-5">${supp.name}</p>
                <p class="subtitle is-6">${supp.problems.map(p => {
                    const problem = mockProblems.find(pr => pr.id === p);
                    return problem ? problem.name : p;
                }).join(', ')}</p>
                <p class="mb-2">${supp.price}/month</p>
                <button class="button is-small is-primary" onclick="event.stopPropagation(); addToStack('${supp.id}')">
                    Add to stack
                </button>
            </div>
        `;
        container.appendChild(col);
    });
}

function filterBrowseResults() {
    const searchTerm = document.getElementById('browse-search').value.toLowerCase();
    const activeCategories = Array.from(document.querySelectorAll('.category-filter.is-primary'))
        .map(btn => btn.dataset.category);
    
    let filtered = mockSupplements;
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(supp => 
            supp.name.toLowerCase().includes(searchTerm) ||
            supp.description.toLowerCase().includes(searchTerm) ||
            supp.benefits.some(b => b.toLowerCase().includes(searchTerm))
        );
    }
    
    // Filter by categories
    if (activeCategories.length > 0) {
        filtered = filtered.filter(supp => activeCategories.includes(supp.category));
    }
    
    displayBrowseResults(filtered);
}

function sortBrowseResults() {
    const sortBy = document.getElementById('sort-select').value;
    let sorted = [...mockSupplements];
    
    switch(sortBy) {
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price':
            sorted.sort((a, b) => {
                const aPrice = parseInt(a.price.match(/\d+/)[0]);
                const bPrice = parseInt(b.price.match(/\d+/)[0]);
                return aPrice - bPrice;
            });
            break;
        case 'research':
            const order = ['gold', 'silver', 'bronze'];
            sorted.sort((a, b) => order.indexOf(a.researchLevel) - order.indexOf(b.researchLevel));
            break;
    }
    
    displayBrowseResults(sorted);
}

// Supplement Detail
function showSupplementDetail(supplementId) {
    showScreen('detail-screen');
    
    const supp = getSupplementById(supplementId);
    const container = document.getElementById('supplement-detail');
    
    const detailHtml = currentMode === 'simple' ? 
        // Simple mode detail
        `
        <h1 class="title is-2">${supp.name}</h1>
        <p class="subtitle is-5 mb-4">${supp.description}</p>
        
        <div class="box">
            <h3 class="title is-5">Benefits:</h3>
            <ul>
                ${supp.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
        </div>
        
        <div class="box">
            <h3 class="title is-5">⚠️ Warnings:</h3>
            <ul>
                ${supp.warnings.map(w => `<li>${w}</li>`).join('')}
            </ul>
        </div>
        
        <div class="box">
            <h3 class="title is-5">Dosing:</h3>
            <p><strong>Typical dose:</strong> ${supp.dose}</p>
            <p><strong>When to take:</strong> ${supp.timing}</p>
            <p><strong>Price range:</strong> ${supp.price}/month</p>
        </div>
        
        <div class="buttons">
            <button class="button is-large is-primary" onclick="addToStack('${supp.id}')">
                Add to stack
            </button>
        </div>
        ` :
        // Advanced mode detail
        `
        <h1 class="title is-2">${supp.name}</h1>
        <div class="tags mb-4">
            <span class="tag is-${supp.researchLevel === 'gold' ? 'success' : supp.researchLevel === 'silver' ? 'info' : 'warning'} is-medium">
                ${supp.researchLevel.toUpperCase()} Evidence
            </span>
            <span class="tag is-medium">${supp.category}</span>
        </div>
        <p class="subtitle is-5 mb-4">${supp.description}</p>
        
        <div class="columns">
            <div class="column">
                <div class="box">
                    <h3 class="title is-5">Benefits:</h3>
                    <ul>
                        ${supp.benefits.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="box">
                    <h3 class="title is-5">Forms Available:</h3>
                    <ul>
                        ${Object.entries(supp.forms).map(([form, desc]) => 
                            `<li><strong>${form}:</strong> ${desc}</li>`
                        ).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="column">
                <div class="box">
                    <h3 class="title is-5">⚠️ Warnings:</h3>
                    <ul>
                        ${supp.warnings.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="box">
                    <h3 class="title is-5">Interactions:</h3>
                    <ul>
                        ${supp.interactions.length > 0 ? 
                            supp.interactions.map(i => `<li>${i}</li>`).join('') :
                            '<li>No known major interactions</li>'
                        }
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="box">
            <h3 class="title is-5">Dosing Information:</h3>
            <div class="columns">
                <div class="column">
                    <p><strong>Typical dose:</strong> ${supp.dose}</p>
                    <p><strong>When to take:</strong> ${supp.timing}</p>
                </div>
                <div class="column">
                    <p><strong>Price range:</strong> ${supp.price}/month</p>
                    <p><strong>Category:</strong> ${supp.category}</p>
                </div>
            </div>
        </div>
        
        <div class="box">
            <h3 class="title is-5">Good for:</h3>
            <div class="tags">
                ${supp.problems.map(p => {
                    const problem = mockProblems.find(pr => pr.id === p);
                    return `<span class="tag is-medium">${problem ? problem.icon + ' ' + problem.name : p}</span>`;
                }).join('')}
            </div>
        </div>
        
        <div class="buttons">
            <button class="button is-large is-primary" onclick="addToStack('${supp.id}')">
                Add to stack
            </button>
        </div>
        `;
    
    container.innerHTML = detailHtml;
}

// Stack Management
function addToStack(supplementId) {
    const supp = getSupplementById(supplementId);
    
    // Check if already in stack
    if (userStack.find(s => s.id === supplementId)) {
        alert(`${supp.name} is already in your stack!`);
        return;
    }
    
    userStack.push({
        id: supplementId,
        name: supp.name,
        dose: supp.dose,
        timing: supp.timing
    });
    
    localStorage.setItem('supplementStack', JSON.stringify(userStack));
    updateStackCount();
    
    // Show confirmation
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Added!';
    btn.classList.add('is-success');
    setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('is-success');
    }, 1500);
}

function updateStackCount() {
    document.getElementById('stack-count').textContent = userStack.length;
    
    // Show/hide stack button
    const stackBtn = document.getElementById('stack-float-btn');
    if (userStack.length > 0 && currentScreen !== 'landing-screen' && currentScreen !== 'stack-screen') {
        stackBtn.style.display = 'block';
    } else {
        stackBtn.style.display = 'none';
    }
}

function showStack() {
    const container = document.getElementById('stack-content');
    
    if (userStack.length === 0) {
        container.innerHTML = '<div class="notification">Your stack is empty. Add some supplements!</div>';
        return;
    }
    
    container.innerHTML = '<div class="notification is-warning is-light">⚠️ Remember to check with your doctor about interactions!</div>';
    
    // Group by timing
    const morning = userStack.filter(s => s.timing.toLowerCase().includes('morning'));
    const evening = userStack.filter(s => s.timing.toLowerCase().includes('bed') || s.timing.toLowerCase().includes('evening'));
    const anytime = userStack.filter(s => !morning.includes(s) && !evening.includes(s));
    
    if (morning.length > 0) {
        container.innerHTML += `
            <div class="box">
                <h4 class="title is-5">🌅 Morning:</h4>
                ${morning.map(s => `
                    <div class="level">
                        <div class="level-left">
                            <div>
                                <p class="has-text-weight-bold">${s.name}</p>
                                <p class="is-size-7">${s.dose}</p>
                            </div>
                        </div>
                        <div class="level-right">
                            <button class="button is-small is-danger is-light" onclick="removeFromStack('${s.id}')">
                                Remove
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (evening.length > 0) {
        container.innerHTML += `
            <div class="box">
                <h4 class="title is-5">🌙 Evening:</h4>
                ${evening.map(s => `
                    <div class="level">
                        <div class="level-left">
                            <div>
                                <p class="has-text-weight-bold">${s.name}</p>
                                <p class="is-size-7">${s.dose}</p>
                            </div>
                        </div>
                        <div class="level-right">
                            <button class="button is-small is-danger is-light" onclick="removeFromStack('${s.id}')">
                                Remove
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (anytime.length > 0) {
        container.innerHTML += `
            <div class="box">
                <h4 class="title is-5">⏰ Anytime:</h4>
                ${anytime.map(s => `
                    <div class="level">
                        <div class="level-left">
                            <div>
                                <p class="has-text-weight-bold">${s.name}</p>
                                <p class="is-size-7">${s.dose} - ${s.timing}</p>
                            </div>
                        </div>
                        <div class="level-right">
                            <button class="button is-small is-danger is-light" onclick="removeFromStack('${s.id}')">
                                Remove
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Check for basic interactions
    checkInteractions();
}

function removeFromStack(supplementId) {
    userStack = userStack.filter(s => s.id !== supplementId);
    localStorage.setItem('supplementStack', JSON.stringify(userStack));
    updateStackCount();
    showStack();
}

function clearStack() {
    if (confirm('Clear your entire stack?')) {
        userStack = [];
        localStorage.setItem('supplementStack', JSON.stringify(userStack));
        updateStackCount();
        showStack();
    }
}

function checkInteractions() {
    // Basic interaction checking for demo
    const hasAshwagandha = userStack.find(s => s.id === 'ashwagandha');
    const hasMelatonin = userStack.find(s => s.id === 'melatonin');
    
    if (hasAshwagandha && hasMelatonin) {
        const warning = document.createElement('div');
        warning.className = 'notification is-warning';
        warning.innerHTML = '⚠️ <strong>Interaction Warning:</strong> Ashwagandha and Melatonin both cause drowsiness. Consider taking at different times or reducing doses.';
        document.getElementById('stack-content').prepend(warning);
    }
}

// Search functionality
function performMainSearch() {
    const searchTerm = document.getElementById('main-search').value.toLowerCase();
    
    if (!searchTerm) return;
    
    // Search in supplements
    const results = mockSupplements.filter(supp => 
        supp.name.toLowerCase().includes(searchTerm) ||
        supp.description.toLowerCase().includes(searchTerm) ||
        supp.benefits.some(b => b.toLowerCase().includes(searchTerm))
    );
    
    // Also search in problems
    const problemMatches = mockProblems.filter(p => 
        p.name.toLowerCase().includes(searchTerm)
    );
    
    if (problemMatches.length > 0) {
        // If we found a problem match, show problem flow
        selectProblem(problemMatches[0].id);
    } else if (results.length > 0) {
        // Show browse screen with results
        showBrowseScreen();
        displayBrowseResults(results);
    } else {
        alert('No results found for: ' + searchTerm);
    }
}