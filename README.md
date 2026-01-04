# Clinic AI - Landing Page

A modern, responsive landing page for Clinic AI, an AI-powered automation platform designed for clinics and medical centers in the Middle East. The site features full Arabic language support with RTL (right-to-left) layout.

## 🌟 Features

- **Fully Translated to Arabic** - Complete Arabic translation with RTL support
- **Modern UI/UX** - Beautiful, responsive design built with React and Tailwind CSS
- **Mobile Responsive** - Optimized for all devices
- **Fast Performance** - Built with Vite for optimal loading times
- **SEO Optimized** - Meta tags and structured content for better search visibility

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Language**: TypeScript
- **Backend**: Express.js (for full-stack deployment)

## 📋 Prerequisites

- Node.js 20.19.0 or higher (or Node.js 22.12.0+)
- npm 10.7.0 or higher

## 🚀 Getting Started

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/youssfTamer/Clinic-Automation.git
   cd Clinic-Automation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev:client
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5000`

### Available Scripts

- `npm run dev:client` - Start the frontend development server
- `npm run dev` - Start the full-stack development server (frontend + backend)
- `npm run build` - Build both frontend and backend for production
- `npm run build:static` - Build only the frontend for static hosting
- `npm start` - Start the production server
- `npm run check` - Run TypeScript type checking

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── sections/  # Landing page sections
│   │   │   └── ui/        # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities and helpers
│   └── index.html         # HTML entry point
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
├── attached_assets/        # Images and static assets
└── dist/                   # Build output (generated)
```

## 🌐 Deployment

This project can be deployed as a static site or as a full-stack application.

### Static Hosting (Recommended for Landing Page)

**Vercel** (Recommended):
1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will auto-detect settings from `vercel.json`
4. Deploy!

**Netlify**:
1. Push your code to GitHub
2. Import the project on [Netlify](https://netlify.com)
3. Netlify will auto-detect settings from `netlify.toml`
4. Deploy!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🎨 Sections

The landing page includes the following sections:

1. **Hero** - Main value proposition and call-to-action
2. **Problems** - Common clinic challenges
3. **Solution** - How Clinic AI solves these problems
4. **Features** - Key features and capabilities
5. **Why Us** - Competitive advantages
6. **CTA** - Final call-to-action
7. **Footer** - Links and company information

## 🌍 Language Support

- **Primary Language**: Arabic (RTL)
- **Secondary Language**: English support available
- **RTL Support**: Full right-to-left layout support

## 📝 License

MIT License - see LICENSE file for details

## 👤 Author

**Youssef Tamer**
- GitHub: [@youssfTamer](https://github.com/youssfTamer)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/youssfTamer/Clinic-Automation/issues).

## 📞 Support

For support, email support@clinicai.com or open an issue in this repository.

---

Made with ❤️ for clinics in the Middle East

