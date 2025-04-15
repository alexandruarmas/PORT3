# Modern Portfolio Website

A sleek, responsive portfolio website with smooth animations and modern UI design. Built with React, Vite, and Tailwind CSS.

![Portfolio Screenshot](https://i.postimg.cc/GpRncMyp/portofolio.png)

## ✨ Features

- **Stunning UI Design**: Beautiful, modern user interface with smooth animations and transitions
- **Responsive Layout**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Animated Backgrounds**: Dynamic gradient background with parallax effects
- **Project Showcase**: Gallery of projects with detailed information pages
- **Certificates Display**: Showcase your achievements and certifications
- **Firebase Integration**: Dynamic content loading from Firebase
- **Performance Optimized**: Fast loading times and smooth interactions
- **Accessibility Focused**: Built with accessibility in mind

## 🚀 Technologies Used

- **React**: Frontend UI library
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Firebase**: Backend and database
- **Framer Motion**: Animation library
- **AOS**: Animate on scroll library
- **Material UI**: React component library
- **Lucide React**: Icon library
- **React Router**: Navigation and routing with v7 future flags enabled for forward compatibility

## 📋 Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn package manager
- Firebase account (for dynamic content)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alexandruarmas/PORT3.git
   cd PORT3
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Add your Firebase configuration in `src/firebase.js`

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Customization

### Content Customization

1. **Personal Information**: Update your personal information in the relevant components in the `src/Pages` directory.

2. **Projects**: Add your projects to Firebase with the following structure:
   ```
   projects/
     - id: auto-generated
     - Title: string
     - Description: string
     - Img: string (URL)
     - Link: string
     - TechStack: array
     - date: timestamp
   ```

3. **Certificates**: Add your certificates to Firebase with the following structure:
   ```
   certificates/
     - id: auto-generated
     - Title: string
     - Img: string (URL)
     - date: timestamp
   ```

### Style Customization

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Layout**: Adjust layout in individual component files
- **Animations**: Modify animations in component files or by adjusting AOS parameters

## 📱 Responsive Design

This portfolio is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Push your code to a GitHub repository
2. Log in to Netlify and select "New site from Git"
3. Choose your repository and configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/alexandruarmas/PORT3/issues).

## 📄 License

This project is [Apache 2.0](LICENSE) licensed.

## 📬 Contact

If you want to contact me, you can reach me at contact@alexandruarmas.ro or through social media links on the website.

---

Made with ❤️ by Alexandru Armas

---

# Tutorial: Running the Project  

Here's a simple guide to run this project.  

## Prerequisites  

Ensure that you have already installed:  
- **Node.js**  

---

## Steps to Run the Project  

1. **Download this project:**  

   ```bash  
   git clone https://github.com/alexandruarmas/PORT3.git  
   ```  

2. **Install all dependencies:**  

   ```bash  
   npm install  
   ```  
   Or use:  

   ```bash  
   npm install --legacy-peer-deps  
   ```  

3. **Run the project:**  

   ```bash  
   npm run dev  
   ```  

4. **Open in browser:**  

   Access the application through the link displayed in your terminal.  

---

## Creating a Production Build  

To create a production-ready build:  

1. Run the build command:  

   ```bash  
   npm run build  
   ```  

2. The build files will be saved in the `dist` folder. You can upload this folder to your hosting server.  

---

## Notes  

If you encounter issues while running the project, ensure that:  
- Node.js is correctly installed.  
- You're in the correct project directory.  
- All dependencies are installed without errors.  

---

## Firebase Configuration  

To configure Firebase for this project, follow these steps:  

1. **Add Firebase to the Project:**  
   - Go to the [Firebase Console](https://console.firebase.google.com/).  
   - Create a new project or use an existing one.  

2. **Enable Firestore Database:**  
   - Create a database.  

3. **Go to Project Settings:**  
   - Click the settings icon.  
   - Copy the Firebase configuration.  

4. **Go to Rules:**  
   - Set the rules to `true`.  

5. **Adjust the Collection Structure:**  
   - Set up the collections as shown in the following images:  

   ![Collection Structure Example 1](https://github.com/user-attachments/assets/38580122-08a4-4499-a8fd-0f253652a239)  
   ![Collection Structure Example 2](https://github.com/user-attachments/assets/d563d7ad-f1ab-46ff-8185-640dcebd0363)  

6. **Update `firebase.js` and `firebase-comment.js` Files:**  
   - Replace the `firebaseConfig` content with your Firebase configuration.  

## GitHub Repository

This project is hosted on GitHub at [https://github.com/alexandruarmas/PORT3](https://github.com/alexandruarmas/PORT3).

## Live Demo

You can see the live demo of this project at [https://alexandruarmas.github.io/PORT3/](https://alexandruarmas.github.io/PORT3/).

## React Router v7 Compatibility

This project uses React Router v6 with future flags enabled to ensure compatibility with the upcoming React Router v7 release:

```jsx
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/project/:id" element={<ProjectPageLayout />} />
  </Routes>
</BrowserRouter>
```

The future flags address:
- `v7_startTransition`: Enables React Router to wrap state updates in React.startTransition
- `v7_relativeSplatPath`: Changes how relative paths are resolved within splat routes

