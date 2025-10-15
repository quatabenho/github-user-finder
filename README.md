# GitHub User Finder 🔍

A beautiful and responsive web application to search and display GitHub user information with an elegant interface.

![Demo](animation.gif)

## ✨ Features

- 🔍 **Quick Search** - Search for any GitHub user by username
- 👤 **User Profile** - Display comprehensive user information including:
  - Profile picture and bio
  - Name and username
  - Public repositories count
  - Followers and following count
  - Location, company, and website
  - Twitter/X handle
  - Account creation date
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast & Lightweight** - Pure vanilla JavaScript, no frameworks
- 🎭 **Error Handling** - User-friendly error messages for various scenarios
- ⌨️ **Keyboard Support** - Press Enter to search

## 🚀 Demo

Try searching for popular GitHub users like:
- `torvalds` - Linus Torvalds
- `gaearon` - Dan Abramov
- `addyosmani` - Addy Osmani
- `tj` - TJ Holowaychuk

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and gradients
- **JavaScript (ES6+)** - Async/await, Fetch API
- **GitHub API** - REST API for user data
- **Boxicons** - Beautiful icon library
- **Google Fonts** - Quicksand font family

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to fetch data from GitHub API)

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/quatabenho/github-user-finder.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd github-user-finder
   ```

3. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

4. **Start searching!**
   - Enter a GitHub username in the search box
   - Click "Search" or press Enter
   - View the user's profile information

## 📁 Project Structure

```
github-user-finder/
│
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # JavaScript logic and API calls
├── animation.gif       # Demo animation
└── README.md          # Project documentation
```

## 🎯 Key Features Explained

### Search Functionality
- Real-time search with loading indicator
- Enter key support for quick searches
- Input validation to prevent empty searches

### Error Handling
- **404 Error** - User not found
- **403 Error** - API rate limit exceeded
- **Network Errors** - Connection issues
- Auto-dismiss error messages after 10 seconds

### User Information Display
- Conditionally displays available information
- Hides empty fields for a cleaner interface
- Clickable links for blog and Twitter
- Formatted join date in a readable format

### Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Touch-friendly interface
- Optimized layouts for tablets and phones

## 🌐 API Information

This project uses the [GitHub REST API](https://docs.github.com/en/rest) (v3):
- Endpoint: `https://api.github.com/users/{username}`
- Rate Limit: 60 requests per hour (unauthenticated)
- No API key required for basic usage

## 🎨 Color Scheme

- Primary Gradient: `#667eea` → `#764ba2`
- Background: Linear gradient purple theme
- Accent Colors: White, light purple tints
- Text: Dark gray (`#333`) and medium gray (`#666`)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Future Enhancements

- [ ] Display user's popular repositories
- [ ] Add dark mode toggle
- [ ] Show contribution graph
- [ ] Compare two GitHub users
- [ ] Export user data as PDF
- [ ] Save search history
- [ ] Add user authentication for higher API limits

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**quatabenho**

- GitHub: [@quatabenho](https://github.com/quatabenho)

## 🙏 Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for providing the data
- [Boxicons](https://boxicons.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Quicksand font
- Inspiration from various GitHub user finder projects


---

⭐ **If you like this project, please give it a star!** ⭐

Made with ❤️ by quatabenho