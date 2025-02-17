const contentData = {
    introduction: {
        title: "Introduction",
        content: `
            <div class="intro-section" style="display: flex; flex-direction: column; gap: 20px;">
                <img src="https://res.cloudinary.com/dzi3u164c/image/upload/v1739705075/core_qfs6ge.png" 
                     alt="Introduction Image" class="intro-image" 
                     style="width: 100%; max-width: 600px; display: block; margin: 20px auto; border-radius: 10px; 
                     box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);">
                
                <p style="margin-bottom: 10px;">Welcome to our premium dark-mode agency web template, designed to elevate your brand with a sleek, 
                modern, and professional look. Built using <strong>HTML, CSS, JavaScript, React, and Tailwind CSS</strong>, 
                this template ensures high performance, seamless navigation, and an engaging user experience.</p>
                
                <p style="margin-bottom: 10px;">Perfect for creative agencies, freelancers, and businesses, this template features:</p>
                
                <ul style="list-style-type: none; padding: 0; margin-bottom: 20px;">
                    <li style="margin-bottom: 8px;">⚡ <strong>Dark Mode Aesthetic</strong> – Trendy and visually stunning design.</li>
                    <li style="margin-bottom: 8px;">📱 <strong>Fully Responsive</strong> – Optimized for all devices.</li>
                    <li style="margin-bottom: 8px;">🚀 <strong>Fast & Lightweight</strong> – Ensuring smooth performance.</li>
                    <li style="margin-bottom: 8px;">🎨 <strong>Customizable</strong> – Easy to modify with clean, modular code.</li>
                    <li style="margin-bottom: 8px;">✨ <strong>Animated Interactions</strong> – Powered by Framer Motion & GSAP.</li>
                </ul>
                
                <p style="margin-top: 20px;">Take your online presence to the next level with a website that stands out!</p>                 
            </div>
        `
    },
    packages: {
        title: "Packages",
        content: `
            <div class="packages-section" style="display: flex; flex-direction: column; gap: 20px;">
               <p style="margin-top: 20px;">
    This project uses a set of carefully selected packages to ensure high performance, smooth animations, 
    and an excellent user experience. Below is a list of all dependencies and how you can install them.
</p>

                
                <h3 style="margin-top: 10px;">🛠 Installation Guide</h3>
                <p>To install all required dependencies, open your terminal in the project folder and run:</p>
                <pre style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 5px; overflow-x: auto;">
    npm install
                </pre>
                
                <h3 style="margin-top: 10px;">📦 Main Dependencies</h3>
                <ul style="list-style-type: none; padding: 0; margin-bottom: 20px;">
                    <li style="margin-bottom: 8px;">⚛️ <strong>React 19</strong> – The latest version of React for building the UI.</li>
                    <li style="margin-bottom: 8px;">🌐 <strong>React Router DOM 7</strong> – Handles navigation and routing.</li>
                    <li style="margin-bottom: 8px;">🎨 <strong>Tailwind CSS</strong> – A utility-first CSS framework for styling.</li>
                    <li style="margin-bottom: 8px;">⚡ <strong>Framer Motion & GSAP</strong> – For smooth animations and transitions.</li>
                    <li style="margin-bottom: 8px;">🖼️ <strong>Lottie React</strong> – Supports animated illustrations.</li>
                    <li style="margin-bottom: 8px;">🛠️ <strong>SweetAlert2</strong> – Customizable pop-up notifications.</li>
                    <li style="margin-bottom: 8px;">🚀 <strong>Lucide React</strong> – A modern icon library for UI elements.</li>
                </ul>
                
                <h3 style="margin-top: 10px;">🔧 Developer Tools</h3>
                <p>These tools help maintain clean code and efficient development:</p>
                <ul style="list-style-type: none; padding: 0; margin-bottom: 20px;">
                    <li style="margin-bottom: 8px;">📝 <strong>ESLint</strong> – Ensures code quality and consistency.</li>
                    <li style="margin-bottom: 8px;">⚡ <strong>Vite</strong> – A fast development server and build tool.</li>
                    <li style="margin-bottom: 8px;">🎨 <strong>PostCSS & Autoprefixer</strong> – CSS processing tools.</li>
                </ul>
                
                <h3 style="margin-top: 10px;">📜 Running the Project</h3>
                <p>After installation, use the following commands to start the project:</p>
                <pre style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 5px; overflow-x: auto;">
    npm run dev  // Start development server
    npm run build  // Build for production
    npm run preview  // Preview production build
                </pre>
                
                <p>Now you're ready to customize and launch your agency website! 🚀</p>
            </div>
        `
    },
    navbar: {
        title: "Navbar",
        content: `
           <div class="navbar-section">
    <img src="https://res.cloudinary.com/dzi3u164c/image/upload/v1739772908/1_pryehl.png" 
         alt="Navbar Logo" class="navbar-logo" 
         style="width: 100%; height: 250px; max-width: 900px; display: block; margin: 20px auto; border-radius: 10px; 
         box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);">  
    <p><strong>Note:</strong> You can change the logo by replacing the image in the code</p>
</div>

        `
    },
    banner: {
        title: "Banner",
        content: `
           <div class="Banner-section">
    <img src="https://res.cloudinary.com/dzi3u164c/image/upload/v1739774550/2_u0pod4.png" 
         alt="Banner video" class="banner-video" 
         style="width: 100%; height: 400px; max-width: 900px; display: block; margin: 20px auto; border-radius: 10px; 
         box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);">  
    <p><strong>Note:</strong> You can change the video by replacing the video in the code</p>
</div> `
    },
    services: {
        title: "Services",
        content: `
        <div class="services-section">
 <img src="https://res.cloudinary.com/dzi3u164c/image/upload/v1739781685/3_iyeukc.png" 
      alt="services" class="services" 
      style="width: 100%; height: 500px; max-width: 900px; display: block; margin: 20px auto; border-radius: 10px; 
      box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);">  
 <p><strong>Note:</strong> You can change the services according to your need in the code</p>
</div> `
    },
    portfolio: {
        title: "Portfolio",
        content: `
        <div class="portfolio-section">
 <img src="https://res.cloudinary.com/dzi3u164c/image/upload/v1739783699/4_mjjqsw.png" 
      alt="portfolio" class="portfolio" 
      style="width: 100%; height: 500px; max-width: 900px; display: block; margin: 20px auto; border-radius: 10px; 
      box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);">  
 <p><strong>Note:</strong> You can place your portfolios and give url also</p>
</div> `
    },
    contact: {
        title: "Contact",
        content: `
        <div class="contact-section">
 <img src="https://res.cloudinary.com/dzi3u164c/image/upload/v1739788007/5_swds53.png" 
      alt="contact" class="contact" 
      style="width: 100%; height: 500px; max-width: 900px; display: block; margin: 20px auto; border-radius: 10px; 
      box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);">  
 <p><strong>Note:</strong> You have to give your email address in the picture mentioned. If anyone gives a message you will get the message in that mail</p>
</div> `
    }
};

// Function to dynamically insert content and styles
function showContent(section) {
    const dynamicContent = document.getElementById("dynamic-content");

    // Apply inline styles for dynamic content
    dynamicContent.className = "bg-opacity-10 p-5 rounded-lg backdrop-blur-lg shadow-lg text-white";

    // Set HTML content dynamically
    dynamicContent.innerHTML = `
            <h2 style="color: #ffcc00;">${contentData[section].title}</h2>
                ${contentData[section].content}
`;

    // Apply specific inline styles for the Introduction section (Image, Table, etc.)
    if (section === "introduction") {
        // Style for image
        const image = dynamicContent.querySelector('.intro-image');
        image.style.width = "100%";
        image.style.maxWidth = "600px";
        image.style.display = "block";
        image.style.margin = "20px auto";
        image.style.borderRadius = "10px";
        image.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.1)";
    }
}

// Sidebar Toggle Function for Mobile
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
