README — Recent Fixes & How to Test

What: Summary of changes committed on May 3, 2026 that fixed auth, routing, payment guard, and image-generation reliability.
Where: Key files changed:
userController.js
imageController.js
mongodb.js
auth.js
AppContext.jsx
App.jsx
Navbar.jsx
BuyCreidt.jsx
package.json (root scripts)
Purpose
This document explains the bug fixes and runtime improvements made so the app runs locally without failing when optional environment variables (ClipDrop/Razorpay) are missing or invalid, and to make frontend routing consistent.
