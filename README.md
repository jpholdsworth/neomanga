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
 
### Component Structure
- **`App`** - the main application component, providing the overall structure.
- **`Home`** - organises the homepage content and its featured sections.
- **`Products` & `ItemList`** - display manga products and organise product listings.
- **`DisplayManga` & `DisplayItem`** - present manga content and individual items within the catalogue.
- **`ProductDetail`** - displays detailed information about a selected manga title.
- **`FilterSection`** - provides filtering controls to help users find manga.
- **`MangaCarousel` & `Featured`** - showcase manga titles and featured content.
- **`HeaderSection` & `FooterSection`** - provide shared navigation and footer content across the application.
- **`Account`, `Blog` & `AdditionalInfo`** - provide account-related, blog and supplementary content.
- **`ErrorPage`** - displays an error view when a route cannot be resolved or an error needs to be handled.

### State Management
Application state is managed using React hooks and the Context API:
 
- **`useState`** manages local component state, such as search queries, filtering options and interactive UI elements, where applicable.
- **Context API** shares shopping cart state between the components that need access to cart data, reducing excessive prop passing.
State updates keep the relevant interface elements in sync with user interactions, including cart changes, item quantities and price calculations.

<details>
<summary>View data flow</summary>

1. Manga product information is loaded from the custom manga data file.
2. Product components render the catalogue using the available manga data.
3. Users browse, search and filter manga titles.
4. Selecting a manga navigates to its product details view.
5. Shopping cart interactions update the shared cart state.
6. Quantity changes update the cart contents and total price.
7. React re-renders affected components when their relevant state changes.

</details>

<details>
<summary>View project file structure</summary>

```
src/
├── assets/
│   ├── AkiraExpandedDemo.otf
│   ├── alien.png
│   └── NotoSans-Regular.ttf
├── component/
│   ├── account.jsx
│   ├── additional-info.jsx
│   ├── blog.jsx
│   ├── display-item.jsx
│   ├── display-manga.jsx
│   ├── error-page.jsx
│   ├── featured.jsx
│   ├── filter-section.jsx
│   ├── footer-details.jsx
│   ├── footer-section.jsx
│   ├── header-section.jsx
│   ├── home.jsx
│   ├── item-list.jsx
│   ├── manga-carousel.jsx
│   ├── product-detail.jsx
│   ├── products.jsx
│   └── special-offers.jsx
├── styles/
│   ├── account.css
│   ├── blog.css
│   ├── display-manga.css
│   ├── error-page.css
│   ├── featured.css
│   ├── filter-section.css
│   ├── footer-section.css
│   ├── genres.css
│   ├── header-section.css
│   ├── item-list.css
│   ├── manga-carousel.css
│   ├── navigation.css
│   ├── product-detail.css
│   └── special-offers.css
├── App.jsx
├── index.css
├── main.jsx
└── routes.jsx
```
 
</details>

### 🔑 Key Principles
- **Separation of Concerns** - keeping React components, styling, routing and product data separate to keep the codebase organised.
- **Component Reusability** - using dedicated components for shared interface elements, product displays and navigation.
- **Shared State Management** - using the Context API to share application state between components where required.
- **Data-Driven Rendering** - generating product listings and details from structured manga data.
- **Client-Side Routing** - using React Router to navigate between application views.
- **Responsive Design** - styling the interface to support different screen sizes and devices.
- **Maintainability** - organising components and stylesheets into distinct files to make the application easier to understand and update.

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
- [ ] Add cart persistance using `localStorage` to retain shopping cart contents across page refreshes
- [ ] Migrate manga data from JSON to a SQL database accessed through a backend API, supporting structured queries and more flexible product searching and filtering
- [ ] Introduce role-based authorisation to control access to features and actions according to user roles
- [ ] Integrate a payment provider to support secure transactions and complete the checkout experience
- [ ] Enhance accessibility with improved keyboard navigation, semantic HTML and ARIA attributes for people with different accessibility needs
- [ ] Add automated tests for component behaviour and core functionality, including shopping cart operations and checkout
- [ ] Implement a light and dark theme toggle so users can switch between modes
- [ ] Explore lazy loading and code splitting to improve loading performance as the application grows

## 🙏 Acknowledgements
Special thanks to my friends for providing valuable feedback on the user interface (UI) and user experience (UX). Their feedback helped me identify areas for improvement and refine the overall shopping experience.

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