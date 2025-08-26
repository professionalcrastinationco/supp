# Supplement Database - Local Mockup

## What This Is
A clickable HTML/CSS/JS prototype to test navigation flows and UX before building the real app.

## How to Run
1. Open `index.html` in your browser
2. That's it. No server needed.

## Features Implemented
- ✅ Two-path landing page (Problem vs Browse)
- ✅ Problem selection flow
- ✅ Safety check screen (with skip option)
- ✅ Results display (3 in simple mode, all in power mode)
- ✅ Browse/search supplements
- ✅ Supplement detail views
- ✅ Stack builder with localStorage
- ✅ Simple/Power mode toggle
- ✅ Basic interaction warnings
- ✅ Mobile responsive
- ✅ Navigation history (back button works)

## Test These Flows
1. **Problem Path**: Landing → Pick problem → Safety check → See results
2. **Browse Path**: Landing → "I know what I want" → Browse/filter
3. **Search**: Use search bar on landing page
4. **Stack Building**: Add supplements, view stack, see timing groups
5. **Mode Switch**: Toggle between Simple/Power and see UI changes

## Mock Data
- 15 detailed supplements with real data
- 8 problem categories
- Basic interaction checking (try adding Ashwagandha + Melatonin)

## What's NOT Built
- Real backend/database
- User accounts
- Payment flow
- Real interaction checking
- Actual affiliate links
- PDF export

## Notes
- Stack saves to localStorage (survives refresh)
- Mode preference saves to localStorage
- All data is fake but realistic

## Browser Support
Works in all modern browsers. Tested in:
- Chrome
- Firefox  
- Safari
- Edge