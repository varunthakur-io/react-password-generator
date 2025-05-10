# React Password Generator

A simple yet powerful password generator built with React. This application allows users to customize password length and choose which character types to include (uppercase, lowercase, digits, symbols). Users can copy generated passwords to the clipboard with ease.

---

## Features

- Adjustable password length
- Toggleable character types (uppercase, lowercase, digits, symbols)
- Copy generated passwords to clipboard
- Clean and user-friendly interface

---

## Installation

To run this application locally, you'll need Node.js and npm (or yarn) installed on your computer.

1. Clone this repository:

   ```bash
   git clone https://github.com/varunthakur-io/react-password-generator.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-password-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run start
   ```

   The application will be available at `http://localhost:5173` by default.

---

## Usage

- Adjust the password length using the range slider.
- Toggle character types (uppercase, lowercase, digits, symbols) to include in the generated password.
- Click the "COPY" button to copy the generated password to the clipboard.

---

## Project Structure

```
password_generator/
├── public/                # Public assets
├── src/                   # Source code
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point for React
│   ├── index.css          # Tailwind CSS imports
├── .eslintrc.cjs          # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
├── index.html             # HTML template
└── README.md              # Project documentation
```

---

## Development

### Scripts

- **Start Development Server**:  
  ```bash
  npm run dev
  ```

- **Build for Production**:  
  ```bash
  npm run build
  ```

- **Preview Production Build**:  
  ```bash
  npm run preview
  ```

- **Lint Code**:  
  ```bash
  npm run lint
  ```

### Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can customize styles in the tailwind.config.js file.

---

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Styled using [Tailwind CSS](https://tailwindcss.com/)
```