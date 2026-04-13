# Suraj Sonawane - Portfolio

A modern, responsive portfolio website built with **React 19** and **Vite 5**.

## 🚀 Features

- **Fast Development** - Vite provides instant server start and HMR (Hot Module Replacement)
- **Modern React** - React 19 with functional components and hooks
- **Responsive Design** - Mobile-first, fully responsive layout
- **CSS Modules** - Scoped styling with CSS modules
- **Smooth Scrolling** - React Scroll integration for smooth navigation
- **Icon Library** - React Icons for beautiful SVG icons
- **Production Ready** - Optimized build for deployment

## 📁 Project Structure

```
src/
├── App.jsx              # Main application component
├── main.jsx             # Vite entry point
├── components/          # React components
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Certificates.js
│   ├── Contact.js
│   └── Footer.js
└── styles/
    ├── global.css
    ├── Header.module.css
    ├── Hero.module.css
    ├── About.module.css
    ├── Skills.module.css
    ├── Projects.module.css
    ├── Certificates.module.css
    ├── Contact.module.css
    └── Footer.module.css
```

## 🛠 Installation

1. **Clone or setup the project:**
   ```bash
   cd My-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 💻 Development

Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000` with:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for component changes
- Native ES modules

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 👀 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Tech Stack

- **React 19.1.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **React Scroll 1.9.3** - Smooth scrolling
- **React Icons 5.5.0** - Icon library
- **CSS Modules** - Component-scoped styling

## 🚀 Deployment

The `dist/` folder is ready to be deployed to any static hosting service:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `dist` folder
- **AWS S3 + CloudFront**
- **GitHub Pages**
- **Any other static hosting**

## ✍️ Customization

### Adding a New Section

1. Create a new component in `src/components/`
2. Add the component to `src/App.jsx`
3. Create corresponding CSS module in `src/styles/`
4. Add navigation link to the Header component

### Modifying Styles

All CSS modules are in `src/styles/` using the naming convention:
- `ComponentName.module.css`

Global styles are in `src/styles/global.css`

## 📝 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Developer

**Suraj Sonawane**
- MERN Stack Developer
- Location: Pune, India
- GitHub: [Suraj051198](https://github.com/Suraj051198)
- LinkedIn: [sonawane-suraj](https://www.linkedin.com/in/sonawane-suraj/)
- Email: surajsonawane172@gmail.com

---

**Built with ❤️ using React & Vite**


### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
