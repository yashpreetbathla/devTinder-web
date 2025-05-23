# DevTinder Web

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/tech%20stack-React%20%26%20Vite-orange.svg)](https://reactjs.org)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yashpreetbathla/devTinder-web/actions)

A modern web application that connects developers based on their skills, interests, and project goals. DevTinder Web provides a Tinder-like interface for developers to find and collaborate with other developers on exciting projects.

## 🚀 Features

- 🔄 Tinder-like swiping interface for developers
- 🔍 Advanced filtering based on skills, interests, and location
- 💬 Real-time chat using Socket.IO
- 📊 User profiles with skills and project history
- 🔐 Secure authentication and data protection
- 🎨 Modern, responsive UI with DaisyUI components

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Styling**: Tailwind CSS + DaisyUI
- **Real-time Communication**: Socket.IO
- **API Client**: Axios
- **Development Tools**: ESLint, PostCSS

## 📁 Project Structure

```mermaid
graph TD
    A[devTinder-web] --> B[src]
    A --> C[public]
    A --> D[my-react-router-app]
    
    subgraph Source Code (src)
        B --> E[App.jsx]
        B --> F[main.jsx]
        B --> G[components]
        B --> H[utils]
    end
    
    subgraph Components
        G --> I[Profile]
        G --> J[Chat]
        G --> K[Match]
        G --> L[Swiping]
        G --> M[Layout]
    end
    
    subgraph Utils
        H --> N[api]
        H --> O[auth]
        H --> P[socket]
        H --> Q[constants]
    end
    
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style G fill:#bbf,stroke:#333,stroke-width:2px
    style H fill:#bff,stroke:#333,stroke-width:2px
```

## 📂 Directory Structure

Here's a detailed breakdown of the project structure:

```
devTinder-web/
├── src/                    # Source code directory
│   ├── components/         # Reusable React components
│   │   ├── Profile/        # User profile components
│   │   ├── Chat/          # Chat interface components
│   │   ├── Match/         # Matching system components
│   │   ├── Swiping/       # Tinder-like swiping interface
│   │   └── Layout/        # Layout components
│   ├── utils/             # Utility functions and helpers
│   │   ├── api/          # API client and services
│   │   ├── auth/         # Authentication utilities
│   │   ├── socket/       # Socket.IO client configuration
│   │   └── constants/    # Application constants
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Entry point of the application
├── public/                # Static assets
├── my-react-router-app/   # React Router configuration
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── eslint.config.js      # ESLint configuration
```

Each directory serves a specific purpose:

- `src/`: Contains all the source code of the application
  - `components/`: Reusable React components organized by feature
  - `utils/`: Utility functions and helper modules
- `public/`: Static assets like images, fonts, and favicon
- `my-react-router-app/`: Contains React Router configuration and related files
- Configuration files: Various configuration files for build tools and development environment

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yashpreetbathla/devTinder-web.git
cd devTinder-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

To build the application for production:

```bash
npm run build
```

The production build will be available in the `dist` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the React and Vite communities for their amazing tools
- Special thanks to all contributors who have helped improve this project

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers directly.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
