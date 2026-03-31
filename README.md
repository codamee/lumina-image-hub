# 📸 Lumina Image Hub

A media discovery platform built to master **Redux Toolkit** and **Tailwind CSS v4**. This project focuses on efficient state management, persistent collections using the localstorage.

---

## ✨ Features

* **Search feature:** Switch between photo and video .
* **Redux Collection System:** Save or remove items from collection.
* **Persistent Storage:** Uses `localStorage` to save the collection.
* **Framed Animations:** Smooth fade-in effects using `framer-motion` as users scroll through results.

## 🛠️ Tech Stack

* **Core:** React (Vite)
* **State:** Redux Toolkit
* **Navigation:** React Router DOM
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion
* **API:** Axios (Pexels API)

## ⚙️ Setup & Installation

1.  **Clone the repo**
    ```bash
    git clone https://github.com/codamee/lumina-image-hub.git
    ```
2.  **Install Dependencies**
    ```bash
    npm install
    ```
3.  **Environment Variables**
    Create a `.env` file in the root and add your Pexels API Key:
    ```env
    VITE_PEXELS_API_KEY=your_api_key_here
    ```
4.  **Run Development Server**
    ```bash
    npm run dev
    ```
