<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jay Jelaso - Professional Software Developer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            min-width: 1024px; /* Prevent layout from breaking on small screens */
        }

        .top-banner {
            display: flex;
            width: 100%;
            height: 250px;
            background: #2c3e50;
            color: white;
            position: fixed;
            top: 0;
            left: 0;
        }

        .left-section {
            flex: 1;
            display: flex;
            align-items: center;
            padding: 2rem;
            border-right: 2px solid rgba(255, 255, 255, 0.2);
            min-width: 400px;
        }

        .right-section {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2rem;
            min-width: 600px;
        }

        .profile-container {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 3px solid white;
        }

        .contact-info h2 {
            font-size: 1.8rem;
            margin-bottom: 0.8rem;
        }

        .contact-info p {
            margin: 0.3rem 0;
            font-size: 0.9rem;
        }

        .contact-info a {
            color: white;
            text-decoration: none;
        }

        .contact-info a:hover {
            text-decoration: underline;
        }

        .title-section h1 {
            font-size: 2.2rem;
            margin-bottom: 1rem;
        }

        .tech-badges {
            display: flex;
            gap: 1rem;
            margin: 1rem 0;
        }

        .tech-badge {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .tech-badge img {
            width: 20px;
            height: 20px;
        }

        .breadcrumb {
            margin-top: 1rem;
            display: flex;
            gap: 0.5rem;
            color: rgba(255, 255, 255, 0.8);
        }

        .breadcrumb span:not(:last-child):after {
            content: "›";
            margin-left: 0.5rem;
            opacity: 0.7;
        }

        .main-content {
            margin-top: 270px; /* Account for fixed header */
            padding: 2rem;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }
    </style>
</head>
<body>
    <div class="top-banner">
        <div class="left-section">
            <div class="profile-container">
                <img src="/api/placeholder/120/120" alt="Jay Jelaso" class="profile-image">
                <div class="contact-info">
                    <h2>Jay Jelaso</h2>
                    <p><a href="mailto:Jay.jelaso@gmail.com">Jay.jelaso@gmail.com</a></p>
                    <p>(434) 425-9400</p>
                    <p>Kalamazoo, MI 49008</p>
                    <p><a href="http://www.jayjelaso.com">www.jayjelaso.com</a></p>
                    <p><a href="https://www.linkedin.com/in/jay-jelaso-b0075b13a">LinkedIn Profile</a></p>
                </div>
            </div>
        </div>
        
        <div class="right-section">
            <div class="title-section">
                <h1>Professional Software Developer</h1>
                <div class="tech-badges">
                    <div class="tech-badge">
                        <img src="/api/placeholder/20/20" alt="Python">
                        Python/Django
                    </div>
                    <div class="tech-badge">
                        <img src="/api/placeholder/20/20" alt="React">
                        React.js
                    </div>
                    <div class="tech-badge">
                        <img src="/api/placeholder/20/20" alt="AWS">
                        AWS Cloud
                    </div>
                </div>
                <nav class="breadcrumb">
                    <span>Home</span>
                    <span>Portfolio</span>
                    <span>Experience</span>
                </nav>
            </div>
        </div>
    </div>

    <main class="main-content">
        <p>Over 25 years of experience as an application and web software programmer, systems engineer and database expert of large information management systems. Expert in dynamic, responsive, web applications, frontend/backend application development, database design, distributed architectures, system integration, graphical interface design. Lead programmer and team lead responsibilities on all major projects, at many major companies.</p>
    </main>
</body>
</html>