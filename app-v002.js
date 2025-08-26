// Supplement Database App Logic - Version 002
// Added safety filtering and contraindication warnings

// Navigation history for back button
let navigationHistory = [];

// Current state
let currentProblem = null;
let currentMode = 'simple'; // or 'advanced'
let currentStack = JSON.parse(localStorage.getItem('supplementStack')) || [];

// Safety profile (resets each session)
let userSafetyProfile = {
    takingMedications: false,
    isPregnant: false,
    hasAllergies: false
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Debug alert for mobile
    alert('JavaScript is running! v002');
    initializeApp();
});

function initializeApp() {
    // Set up event delegation for dynamic content
    document.body.addEventListener('click', handleGlobalClick);
    document.body.addEventListener('touchstart', function() {}, {passive: true}); // iOS fix
    
    // Set up event listeners
    document.getElementById('need-help-btn').addEventListener('click', showProblemSelection);
    document.getElementById('know-what-btn').addEventListener('click', showBrowseScreen);
    document.getElementById('main-search-btn').addEventListener('click', handleMainSearch);
    document.getElementById('main-search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleMainSearch();
    });
    document.getElementById('show-recommendations-btn').addEventListener('click', showRecommendations);
    document.getElementById('skip-safety-btn').addEventListener('click', skipSafety);
    document.getElementById('stack-float-btn').addEventListener('click', showStackScreen);
    
    // Only add these listeners if elements exist (they're on browse screen only)
    if (document.getElementById('browse-search')) {
        document.getElementById('browse-search').addEventListener('input', filterBrowseResults);
    }
    if (document.getElementById('sort-select')) {
        document.getElementById('sort-select').addEventListener('change', filterBrowseResults);
    }
    
    // Add change listener for checkbox filters
    document.body.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox' && e.target.hasAttribute('data-action')) {
            if (e.target.getAttribute('data-action') === 'filterBrowse') {
                filterBrowseResults();
            }
        }
    });
    
    // Mobile menu toggle
    const burger = document.getElementById('navbar-burger');
    const menu = document.getElementById('navMenu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
    
    updateStackCount();
    showScreen('landing-screen');
}

// Global click handler for all dynamic content
function handleGlobalClick(e) {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    const action = target.getAttribute('data-action');
    const param = target.getAttribute('data-param');
    
    // Debug log for mobile
    console.log('Click detected:', action, param);
    
    switch(action) {
        case 'showScreen':
            showScreen(param);
            break;
        case 'showProblemSelection':
            showProblemSelection();
            break;
        case 'showBrowseScreen':
            showBrowseScreen();
            break;
        case 'selectProblem':
            selectProblem(param);
            break;
        case 'showSupplementDetail':
            showSupplementDetail(param);
            break;
        case 'addToStack':
            addToStack(param);
            break;
        case 'removeFromStack':
            removeFromStack(param);
            break;
        case 'filterBrowse':
            filterBrowseResults();
            break;
        case 'toggleMode':
            toggleMode();
            break;
        case 'goBack':
            goBack();
            break;
        case 'clearStack':
            clearStack();
            break;
        case 'showNaturalIngredients':
            showNaturalIngredients();
            break;
        case 'showStackScreen':
            showStackScreen();
            break;
    }
}

// Check if a supplement is contraindicated for the user
function isContraindicated(supplement) {
    if (userSafetyProfile.isPregnant && !supplement.pregnancy_safe) {
        return { type: 'pregnancy', message: '⚠️ Not recommended during pregnancy' };
    }
    if (userSafetyProfile.takingMedications && supplement.medication_interactions.length > 0) {
        return { type: 'medication', message: '⚠️ May interact with medications' };
    }
    if (userSafetyProfile.hasAllergies && supplement.common_allergies.length > 0) {
        return { type: 'allergy', message: '⚠️ Contains common allergens' };
    }
    return null;
}

// Sort supplements with contraindicated ones at bottom
function sortSupplementsBySafety(supplements) {
    return supplements.sort((a, b) => {
        const aContra = isContraindicated(a);
        const bContra = isContraindicated(b);
        
        if (!aContra && bContra) return -1;
        if (aContra && !bContra) return 1;
        return 0;
    });
}

// Show warning banner on supplement card
function getWarningHtml(contraindication) {
    if (!contraindication) return '';
    
    return `
        <div class="notification is-danger is-light">
            <strong>${contraindication.message}</strong>
            ${contraindication.type === 'medication' ? '<br>Check with your doctor or pharmacist' : ''}
            ${contraindication.type === 'allergy' ? '<br>Check ingredients carefully' : ''}
        </div>
    `;
}

// Screen navigation
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    // Show requested screen
    document.getElementById(screenId).style.display = 'block';
    
    // Update stack button visibility
    const stackBtn = document.getElementById('stack-float-btn');
    if (screenId === 'stack-screen' || currentStack.length === 0) {
        stackBtn.style.display = 'none';
    } else {
        stackBtn.style.display = 'block';
    }
    
    // Scroll to top
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

function showProblemSelection() {
    navigationHistory.push('landing-screen');
    
    const grid = document.getElementById('problem-grid');
    grid.innerHTML = '';
    
    mockProblems.forEach(problem => {
        const col = document.createElement('div');
        col.className = 'column is-3';
        col.innerHTML = `
            <div class="box problem-box has-text-centered" data-action="selectProblem" data-param="${problem.id}" style="cursor: pointer;">
                <span class="is-size-1">${problem.icon}</span>
                <p class="is-size-5 mt-2">${problem.name}</p>
            </div>
        `;
        grid.appendChild(col);
    });
    
    showScreen('problem-screen');
}

function selectProblem(problemId) {
    currentProblem = problemId;
    navigationHistory.push('problem-screen');
    showScreen('safety-screen');
}

function showRecommendations() {
    // Store safety selections
    userSafetyProfile.takingMedications = document.querySelector('input[name="medications"]:checked').value === 'yes';
    userSafetyProfile.isPregnant = document.querySelector('input[name="pregnant"]:checked').value === 'yes';
    userSafetyProfile.hasAllergies = document.querySelector('input[name="allergies"]:checked').value === 'yes';
    
    navigationHistory.push('safety-screen');
    
    const problem = mockProblems.find(p => p.id === currentProblem);
    document.getElementById('problem-name').textContent = problem.name;
    
    const container = document.getElementById('results-container');
    container.innerHTML = '';
    
    // Get supplements for this problem and sort by safety
    let supplements = problem.topSupplements.map(id => 
        mockSupplements.find(s => s.id === id)
    ).filter(s => s);
    
    supplements = sortSupplementsBySafety(supplements);
    
    // Show appropriate number based on mode
    const limit = currentMode === 'simple' ? 3 : supplements.length;
    supplements.slice(0, limit).forEach((supplement, index) => {
        const contraindication = isContraindicated(supplement);
        const ranking = contraindication ? '⚠️' : (index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉');
        
        const div = document.createElement('div');
        div.className = `box ${contraindication ? 'has-background-danger-light' : ''}`;
        div.innerHTML = `
            ${getWarningHtml(contraindication)}
            <article class="media">
                <div class="media-left">
                    <span class="is-size-2">${ranking}</span>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong class="is-size-4">${supplement.name}</strong>
                            <br>
                            <span class="is-size-5">${supplement.benefits[0]}</span>
                            <br><br>
                            <strong>Dose:</strong> ${supplement.dose}<br>
                            <strong>When:</strong> ${supplement.timing}<br>
                            <strong>Cost:</strong> ${supplement.price}
                            ${currentMode === 'advanced' ? `
                                <br><br>
                                <strong>Evidence:</strong> <span class="tag is-${supplement.evidence_level === 'gold' ? 'success' : supplement.evidence_level === 'silver' ? 'info' : 'warning'}">${supplement.evidence_level.toUpperCase()}</span>
                                <br>
                                <strong>Forms:</strong> ${Object.keys(supplement.forms).join(', ')}
                                ${supplement.warnings.length ? `<br><strong>Warnings:</strong> ${supplement.warnings.join('; ')}` : ''}
                            ` : ''}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item button is-small is-info" data-action="showSupplementDetail" data-param="${supplement.id}">
                                Learn more
                            </a>
                            <a class="level-item button is-small is-primary" data-action="addToStack" data-param="${supplement.id}">
                                Add to stack
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        `;
        container.appendChild(div);
    });
    
    showScreen('results-screen');
}

function skipSafety() {
    // Reset safety profile if skipping
    userSafetyProfile = {
        takingMedications: false,
        isPregnant: false,
        hasAllergies: false
    };
    showRecommendations();
}

function showBrowseScreen() {
    navigationHistory.push('landing-screen');
    
    // Set up category filters
    const filterContainer = document.getElementById('category-filters');
    filterContainer.innerHTML = '';
    
    const categories = [...new Set(mockSupplements.map(s => s.category))];
    categories.forEach(cat => {
        const tag = document.createElement('div');
        tag.className = 'control';
        tag.innerHTML = `
            <div class="tags has-addons">
                <label class="tag is-medium category-filter" style="cursor: pointer;">
                    <input type="checkbox" value="${cat}" data-action="filterBrowse">
                    &nbsp;${cat}
                </label>
            </div>
        `;
        filterContainer.appendChild(tag);
    });
    
    showAllSupplements();
    showScreen('browse-screen');
}

function showNaturalIngredients() {
    navigationHistory.push('landing-screen');
    
    // Filter to show only herbs
    const filterContainer = document.getElementById('category-filters');
    filterContainer.innerHTML = '';
    
    const tag = document.createElement('div');
    tag.className = 'control';
    tag.innerHTML = `
        <div class="tags has-addons">
            <label class="tag is-medium is-primary">
                Natural/Herbal Ingredients Only
            </label>
        </div>
    `;
    filterContainer.appendChild(tag);
    
    const herbSupplements = mockSupplements.filter(s => s.category === 'herb');
    displayBrowseResults(herbSupplements);
    showScreen('browse-screen');
}

function showAllSupplements() {
    let supplements = [...mockSupplements];
    supplements = sortSupplementsBySafety(supplements);
    displayBrowseResults(supplements);
}

function filterBrowseResults() {
    const searchTerm = document.getElementById('browse-search').value.toLowerCase();
    const sortBy = document.getElementById('sort-select').value;
    const checkedCategories = Array.from(document.querySelectorAll('.category-filter input:checked'))
        .map(cb => cb.value);
    
    let filtered = mockSupplements.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm) ||
                             s.benefits.some(b => b.toLowerCase().includes(searchTerm)) ||
                             s.problems.some(p => p.includes(searchTerm));
        const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(s.category);
        return matchesSearch && matchesCategory;
    });
    
    // Sort by safety first, then by selected sort
    filtered = sortSupplementsBySafety(filtered);
    
    // Apply secondary sort
    if (sortBy === 'price') {
        filtered.sort((a, b) => {
            const aPrice = parseInt(a.price.match(/\d+/)[0]);
            const bPrice = parseInt(b.price.match(/\d+/)[0]);
            return aPrice - bPrice;
        });
    } else if (sortBy === 'research') {
        const order = ['gold', 'silver', 'bronze'];
        filtered.sort((a, b) => {
            return order.indexOf(a.evidence_level) - order.indexOf(b.evidence_level);
        });
    }
    // 'name' is default - already alphabetical
    
    displayBrowseResults(filtered);
}

function displayBrowseResults(supplements) {
    const container = document.getElementById('browse-results');
    container.innerHTML = '';
    
    supplements.forEach(supplement => {
        const contraindication = isContraindicated(supplement);
        const col = document.createElement('div');
        col.className = 'column is-4';
        col.innerHTML = `
            <div class="box browse-item ${contraindication ? 'has-background-danger-light' : ''}" data-action="showSupplementDetail" data-param="${supplement.id}" style="cursor: pointer;">
                ${getWarningHtml(contraindication)}
                <h4 class="title is-5">${supplement.name}</h4>
                <p class="subtitle is-6">${supplement.category}</p>
                <p>${supplement.benefits[0]}</p>
                <p class="has-text-weight-bold">${supplement.price}</p>
                ${currentMode === 'advanced' ? `
                    <span class="tag is-${supplement.evidence_level === 'gold' ? 'success' : supplement.evidence_level === 'silver' ? 'info' : 'warning'}">${supplement.evidence_level.toUpperCase()}</span>
                ` : ''}
            </div>
        `;
        container.appendChild(col);
    });
    
    if (supplements.length === 0) {
        container.innerHTML = '<div class="column"><p class="has-text-centered">No supplements found</p></div>';
    }
}

function showSupplementDetail(supplementId) {
    const supplement = mockSupplements.find(s => s.id === supplementId);
    if (!supplement) return;
    
    navigationHistory.push(getCurrentScreenId());
    
    const contraindication = isContraindicated(supplement);
    const detail = document.getElementById('supplement-detail');
    detail.innerHTML = `
        <div class="box ${contraindication ? 'has-background-danger-light' : ''}">
            ${getWarningHtml(contraindication)}
            <h1 class="title is-3">${supplement.name}</h1>
            <p class="subtitle is-5">${supplement.category}</p>
            
            <div class="content">
                <h4>Benefits:</h4>
                <ul>
                    ${supplement.benefits.map(b => `<li>${b}</li>`).join('')}
                </ul>
                
                <h4>Warnings:</h4>
                <ul class="has-text-danger">
                    ${supplement.warnings.map(w => `<li>${w}</li>`).join('')}
                </ul>
                
                ${supplement.medication_interactions.length > 0 && currentMode === 'advanced' ? `
                    <h4>Medication Interactions:</h4>
                    <ul class="has-text-warning-dark">
                        ${supplement.medication_interactions.map(m => `<li>${m}</li>`).join('')}
                    </ul>
                ` : ''}
                
                ${supplement.common_allergies.length > 0 && currentMode === 'advanced' ? `
                    <h4>Common Allergens:</h4>
                    <ul class="has-text-warning-dark">
                        ${supplement.common_allergies.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                ` : ''}
                
                <h4>Dosing:</h4>
                <p><strong>Typical dose:</strong> ${supplement.dose}</p>
                <p><strong>When to take:</strong> ${supplement.timing}</p>
                <p><strong>Monthly cost:</strong> ${supplement.price}</p>
                
                <h4>Available Forms:</h4>
                <ul>
                    ${Object.entries(supplement.forms).map(([form, desc]) => 
                        `<li><strong>${form}:</strong> ${desc}</li>`
                    ).join('')}
                </ul>
                
                <h4>Evidence Level:</h4>
                <span class="tag is-large is-${supplement.evidence_level === 'gold' ? 'success' : supplement.evidence_level === 'silver' ? 'info' : 'warning'}">
                    ${supplement.evidence_level.toUpperCase()}
                </span>
            </div>
            
            <button class="button is-primary is-medium" data-action="addToStack" data-param="${supplement.id}">
                Add to Stack
            </button>
        </div>
    `;
    
    showScreen('detail-screen');
}

function handleMainSearch() {
    const searchTerm = document.getElementById('main-search').value.toLowerCase();
    if (!searchTerm) return;
    
    // Try to match a problem first
    const problem = mockProblems.find(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.subcategories.some(sub => sub.toLowerCase().includes(searchTerm))
    );
    
    if (problem) {
        currentProblem = problem.id;
        navigationHistory.push('landing-screen');
        showScreen('safety-screen');
    } else {
        // Search supplements
        navigationHistory.push('landing-screen');
        document.getElementById('browse-search').value = searchTerm;
        showBrowseScreen();
        filterBrowseResults();
    }
}

// Stack management
function addToStack(supplementId) {
    if (!currentStack.find(s => s.id === supplementId)) {
        const supplement = mockSupplements.find(s => s.id === supplementId);
        currentStack.push({
            id: supplement.id,
            name: supplement.name,
            dose: supplement.dose,
            timing: supplement.timing
        });
        localStorage.setItem('supplementStack', JSON.stringify(currentStack));
        updateStackCount();
        
        // Show notification
        showNotification('Added to stack!');
    } else {
        showNotification('Already in your stack', 'warning');
    }
}

function removeFromStack(supplementId) {
    currentStack = currentStack.filter(s => s.id !== supplementId);
    localStorage.setItem('supplementStack', JSON.stringify(currentStack));
    updateStackCount();
    
    // Refresh stack view if we're on it
    if (getCurrentScreenId() === 'stack-screen') {
        showStackScreen();
    }
}

function clearStack() {
    if (confirm('Clear your entire stack?')) {
        currentStack = [];
        localStorage.removeItem('supplementStack');
        updateStackCount();
        showStackScreen();
    }
}

function updateStackCount() {
    document.getElementById('stack-count').textContent = currentStack.length;
}

function showStackScreen() {
    const content = document.getElementById('stack-content');
    
    if (currentStack.length === 0) {
        content.innerHTML = '<p class="has-text-centered">Your stack is empty</p>';
    } else {
        content.innerHTML = '<div class="box">';
        currentStack.forEach(item => {
            // Get full supplement data for safety check
            const supplement = mockSupplements.find(s => s.id === item.id);
            const contraindication = supplement ? isContraindicated(supplement) : null;
            
            content.innerHTML += `
                <div class="level ${contraindication ? 'has-background-danger-light p-3' : ''}">
                    <div class="level-left">
                        <div>
                            ${contraindication ? getWarningHtml(contraindication) : ''}
                            <p class="title is-5">${item.name}</p>
                            <p>${item.dose} - ${item.timing}</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <button class="button is-small is-danger" data-action="removeFromStack" data-param="${item.id}">
                            Remove
                        </button>
                    </div>
                </div>
            `;
        });
        content.innerHTML += '</div>';
        
        // Check for interactions between stack items
        if (currentStack.length > 1 && currentMode === 'advanced') {
            content.innerHTML += `
                <div class="notification is-info">
                    <p><strong>Interaction Check:</strong> Feature coming soon - will check for interactions between your stacked supplements.</p>
                </div>
            `;
        }
    }
    
    showScreen('stack-screen');
}

// Mode toggle
function toggleMode() {
    currentMode = currentMode === 'simple' ? 'advanced' : 'simple';
    const btn = document.getElementById('mode-toggle-btn');
    
    if (currentMode === 'advanced') {
        btn.textContent = 'Advanced';
        btn.classList.remove('is-primary');
        btn.classList.add('is-info');
        document.body.classList.add('advanced-mode');
        document.body.classList.remove('simple-mode');
    } else {
        btn.textContent = 'Simple';
        btn.classList.remove('is-info');
        btn.classList.add('is-primary');
        document.body.classList.add('simple-mode');
        document.body.classList.remove('advanced-mode');
    }
    
    // Refresh current view if needed
    const currentScreen = getCurrentScreenId();
    if (currentScreen === 'results-screen' || currentScreen === 'browse-screen') {
        // Re-render with new mode
        if (currentScreen === 'results-screen') {
            showRecommendations();
        } else {
            filterBrowseResults();
        }
    }
}

// Utility functions
function getCurrentScreenId() {
    const screens = document.querySelectorAll('.screen');
    for (let screen of screens) {
        if (screen.style.display !== 'none') {
            return screen.id;
        }
    }
    return 'landing-screen';
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification is-${type} notification-popup`;
    notification.style.cssText = `
        position: fixed;
        top: 70px;
        right: 20px;
        z-index: 100;
        max-width: 300px;
        animation: slideIn 0.3s;
    `;
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
