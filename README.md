# NoOnes-Profit-Calculator
This is a simple and responsive web-based calculator to help you quickly determine your profit when trading on NoOnes.

🔧 Features
Calculate your total expected value based on your:

Offer percentage (e.g. +15.4)

NoOnes wallet balance

Mobile Money wallet balance

Automatically deducts NoOnes 1% fee

Simple and clean design

Includes a Clear button to reset the form

🧮 How It Works
Enter your offer percentage (e.g. 15.4 for +15.4%)

Enter your NoOnes wallet amount

Enter your MoMo wallet amount

Click Calculate

Formula used:

text
Copy
Edit
Multiplier = (100 + Offer - 1) / 100
Final Value = (NoOnes Wallet × Multiplier) + MoMo Wallet
Example:

yaml
Copy
Edit
Offer: +15.4%
NoOnes: 914.85 GHS
MoMo: 1538.64 GHS

Multiplier = (100 + 15.4 - 1) / 100 = 1.144
Final Value = (914.85 × 1.144) + 1538.64 = 2585.23 GHS
🚀 How to Use
Open index.html in your browser

Fill out the form

Click Calculate

Click Clear to reset

📁 File Structure
cpp
Copy
Edit
📦 noones-profit-calculator
┣ 📄 index.html       // Main HTML structure
┣ 📄 style.css        // Styling
┣ 📄 script.js        // JavaScript logic
┣ 📄 README.md        // This file
💡 Future Improvements
Save past calculations

Mobile-first calculator layout

Export results to PDF or TXT

Dark mode
