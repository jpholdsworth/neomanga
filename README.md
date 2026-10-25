# 🛒 NeoManga

## 🌐 Live Demo

👉 [View NeoManga](https://neomangashop.netlify.app/)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Status](https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge)

![e-commerce website responsiveness](/doc/responsive.png)

## 👋 Introduction

**NeoManga** is a manga e-commerce web application built with React and Vite, designed to provide an intuitive shopping experience for browsing and discovering manga titles. It features product search and filtering, client-side navigation, and shopping cart functionality, allowing users to explore the catalogue and manage their selections. Manga product information is organised in a custom JSON data file to populate the product catalogue.

### 💡 Why This Project Matters
This project was an opportunity to develop my skills in building interactive web applications with React and modern frontend development techniques. By creating an e-commerce experience, I gained practical experience managing application state, organising reusable components, handling user interactions, and implementing client-side navigation.

Key concepts explored include:
- `useState` - managing shopping cart contents, search queries, and product filtering
- `useEffect` - handling side effects where needed
- **Context API** - sharing cart state between components without excessive prop passing
- **React Router** - implementing client-side navigation between application views
- **JSON data management** - structuring and displaying manga product information from a custom JSON file
- **Component-based architecture** - separating functionality into reusable UI components
- **Dynamic rendering and event handling** - updating the interface in response to user interactions

The project brings these concepts together in a functional e-commerce application, demonstrating my understanding of React fundamentals and practical frontend development.

### 📹 Preview

![Watch preview](/doc/preview.gif)

**A walkthrough of browsing and selecting manga, viewing product details, and reviewing the shopping cart.*

## 📑 Table of Contents
- [The Vision](#-the-vision)
- [Features](#-features)
- [Design Choices](#-design-choices)
- [Architecture](#️-architecture)
- [Development Principles](#-development-principles)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Development Log](#-development-log)
- [Challenges & Learnings](#-challenges--learnings)
- [Future Improvements](#-future-improvements)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

## 🎯 The Vision
NeoManga was conceived as a user-friendly online manga store where readers can discover titles, explore product details, and manage their selections through an intuitive shopping experience. My goal was to combine a clean, responsive interface with essential e-commerce functionality while applying my frontend development skills to a practical project.

## ✨ Features
**Browsing & Discovery**
- 📚 **Manga Catalogue** - browse a collection of titles with cover artwork and product information.
- 🔍 **Search** - quickly find specific manga titles.
- 🎯 **Product Filtering** - narrow down the catalogue to the titles you want.
- 📖 **Product Details** - open an individual manga page to view its full product information.

**Shopping Cart**
- 🛒 **Cart Management** - add and remove titles, and review your selections.
- 🔢 **Quantity Controls** - increase or decrease the quantity of each item.
- 💷 **Automatic Price Calculation** - totals update instantly as quantities change.

**Experience**
- 🧭 **Client-Side Routing** - move between views with React Router, with no full-page reloads.
- 📱 **Responsive Design** - the layout adapts to desktop, tablet and mobile screens.
- ⚛️ **Dynamic UI Updates** - listings, quantities and totals respond immediately to user actions.

## 🎨 Design Choices


## 🏗️ Architecture
NeoManga uses a component-based architecture, dividing the interface into small, reusable React components. React Router handles client-side navigation, the Context API manages shared state, and a custom manga data file populates the product catalogue.
 
The main parts of the application are:

- **UI Components** - reusable components for displaying manga products, product details and shopping cart items.
- **Product Data** - a custom data file containing the manga information used to render the catalogue.
- **State Management** - React state and the Context API manage application data and share cart information between components where needed.
- **Routing** - React Router connects the different views, letting users move between the catalogue, individual product pages and other views.
- **Shopping Cart** - users can add and remove items, adjust quantities, and see the total price update dynamically.
- **Responsive Interface** - CSS styling adapts the layout to different screen sizes and devices.

This structure keeps the application organised, separates responsibilities, and makes individual features easier to maintain and extend.

## 🧩 Development Principles
Throughout development, I applied core front-end principles to build a functional, maintainable and user-friendly application:
 
- **Component Reusability** - building reusable React components to reduce duplication and keep the interface consistent.
- **Separation of Concerns** - giving product data, UI components, routing and cart functionality distinct responsibilities.
- **State Management** - using React state and the Context API to manage application data and share it between components without excessive prop passing.
- **Data-Driven Rendering** - generating product listings and details from structured manga data rather than hardcoding each product.
- **User Experience** - providing search, filtering, quantity controls and clear product information to make browsing and shopping straightforward.
- **Responsive Design** - designing layouts that stay usable across desktop, tablet and mobile devices.
- **Incremental Development** - building and refining features step by step, testing and fixing issues as the application evolved.
These principles strengthened my understanding of React development and helped me make practical decisions about structuring and maintaining an interactive web application.


## 🛠️ Tech Stack


## 🚀 Getting Started
⚡ **Quick Start:** `npm install && npm run dev`

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org) (v20.19 or v22.12 or higher)
- **npm** (included with Node.js)

### Installation & Setup
1. Clone the respository
```bash
git clone https://github.com/jpholdsworth/neomanga.git
cd neomanga
```
2. Install dependencies 
```bash
npm install
```
3. Start the development server
```bash
npm run dev
```
4. Open your browser and visit
```
http://localhost:5173/
```

## 🐛 Development Log


## 🚧 Challenges & Learnings


## 🔮 Future Improvements


## 🙏 Acknowledgements


## 📜 License
This project's source code is licensed under the [MIT License](https://mit-license.org/)

> Manga cover artwork belongs to its respective copyright holders, publishers and creators. Some images were sourced from Amazon product listings. 
>
> NeoManga is an independent project and is not affiliated with or endorsed by Amazon or any manga publisher.

---

<div align="center">
 <strong>Built with ❤️, ☕ and ⚛️ by Jacob Holdsworth.</strong>
    
  [👆 Back to Top](#-neomanga)
</div>