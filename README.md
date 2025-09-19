# 🎬 Movie Finder

A modern, responsive React application for discovering and exploring movies using The Movie Database (TMDb) API. Built with React, Vite, and Tailwind CSS, featuring a beautiful dark/light theme toggle and favorites management.

![Movie Finder](https://img.shields.io/badge/React-18+-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5+-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🔍 **Movie Search**: Search for movies using TMDb's extensive database
- 🎭 **Movie Details**: View detailed information including cast, ratings, and synopsis
- ❤️ **Favorites Management**: Add/remove movies from your personal favorites list
- 🌓 **Dark/Light Theme**: Toggle between dark and light themes with smooth transitions
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI**: Clean, intuitive interface with Tailwind CSS styling

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.9.1
- **API**: The Movie Database (TMDb) API
- **State Management**: React Context API
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **TMDb API Key** (free registration at [themoviedb.org](https://www.themoviedb.org/))

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd movie-finder
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit the `.env` file and add your TMDb API key:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

### 4. Get Your TMDb API Key
1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings → API
4. Request an API key (choose "Developer" option)
5. Copy your API key to the `.env` file

### 5. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
movie-finder/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard.jsx       # Individual movie card component
│   │   └── Navbar.jsx          # Navigation bar with theme toggle
│   ├── contexts/
│   │   ├── MovieContext.jsx    # Movie state management
│   │   └── ThemeContext.jsx    # Theme state management
│   ├── pages/
│   │   ├── FavoritesMovies.jsx # Favorites page
│   │   ├── HomePage.jsx        # Main search and popular movies
│   │   └── MovieDetail.jsx     # Detailed movie information
│   ├── services/
│   │   └── api.js              # TMDb API integration
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global styles
│   ├── index.css               # Tailwind CSS imports
│   └── main.jsx                # Application entry point
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Project dependencies
├── tailwind.config.js         # Tailwind CSS configuration
└── vite.config.js            # Vite configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code analysis

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard:
   - `VITE_TMDB_API_KEY=your_api_key`
   - `VITE_TMDB_BASE_URL=https://api.themoviedb.org/3`

### Option 2: AWS S3 Static Hosting
Use the provided deployment script:
```bash
chmod +x deploy-s3.sh
./deploy-s3.sh
```

See `aws-s3-setup.md` for detailed AWS deployment instructions.

### Option 3: Vercel
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

## 🔧 Configuration

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TMDB_API_KEY` | Your TMDb API key | Yes |
| `VITE_TMDB_BASE_URL` | TMDb API base URL | Yes |

### Theme Configuration
The app supports both dark and light themes. Theme preference is stored in localStorage and persists across sessions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page for existing solutions
2. Create a new issue with detailed description
3. Include your environment details and error messages

## 🔮 Future Enhancements

- [ ] User authentication and personalized recommendations
- [ ] Movie trailers and video integration
- [ ] Advanced filtering and sorting options
- [ ] Watchlist functionality
- [ ] Social features (reviews, ratings)
- [ ] Offline support with service workers

---

**Happy movie hunting! 🍿**
