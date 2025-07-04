<h1 align="center">🌍 Currency Converter App 💱</h1>

<p align="center">
  A sleek and modern currency converter built with <b>React.js</b>, <b>Tailwind CSS</b>, and real-time rates from the <a href="https://github.com/fawazahmed0/currency-api" target="_blank">Fawaz Ahmed Currency API</a>.
</p>

---

## 📸 Preview

![Currency Converter Screenshot 1](https://github.com/Arun-Tomar13/Currency-Convertor/blob/main/public/Preview1.png?raw=true) 

*Home page with USD to INR conversion*

![Currency Converter Screenshot 1](https://github.com/Arun-Tomar13/Currency-Convertor/blob/main/public/Preview2.png?raw=true) 

*Home page with BTC to EUR conversion*


---

## 🚀 Features

- 🔁 Convert between multiple currencies
- 🔄 Swap currencies with one click
- 🧠 Smart state handling using React Hooks
- 🎨 Styled with Tailwind CSS
- ⚡ Fast and lightweight (Vite-powered)

---

## 🧩 Tech Stack

- **React.js** – Frontend library
- **Vite** – Fast dev environment and build tool
- **Tailwind CSS** – Utility-first CSS framework
- **Fawaz Ahmed Currency API** – Real-time exchange rates
- **Custom React Hook** – `useCurrencyInfo` for API logic

---

## 📁 Project Structure

```
currency-converter/
├── public/ # Static files (favicon, etc.)
├── src/
│ ├── components/
│ │ └── InputBox.jsx # Reusable currency input component
│ ├── hooks/
│ │ └── useCurrencyInfo.js # Custom hook to fetch exchange rates
│ ├── App.jsx # Main application logic
│ ├── App.css # Tailwind & custom global styles
│ └── main.jsx # App entry point
├── .gitignore # Files to ignore in git
├── index.html # HTML template for Vite
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
```
---

## 📦 Getting Started

### 🔧 Prerequisites

Make sure you have **Node.js** and **npm** installed.

### 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/currency-converter.git
cd currency-converter

# Install dependencies
npm install

# Start the development server
npm run dev

```
---

🧪 API Reference
Currency data is fetched from
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

---

🛡 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Made with ❤️ by Arun Tomar

Feel free to reach out for feedback or collaboration!
