import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  // State variables for password generation options
  const [pwdLength, setPwdLength] = useState(12); // Password length
  const [includeUppercase, setIncludeUppercase] = useState(true); // Include uppercase letters
  const [includeLowercase, setIncludeLowercase] = useState(true); // Include lowercase letters
  const [includeNumbers, setIncludeNumbers] = useState(true); // Include numbers
  const [includeSymbols, setIncludeSymbols] = useState(true); // Include symbols
  const [password, setPassword] = useState(""); // Generated password

  // Function to generate a random password based on the selected options
  const generatePassword = useCallback(() => {
    let characters = "";
    // Append characters to the pool based on selected options
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!#$%&*+-/<=>?@[\\]^_";

    // If no character sets are selected, clear the password
    if (!characters) {
      setPassword("");
      return;
    }

    // Generate password using the selected character pool
    let generatedPassword = "";
    for (let i = 0; i < pwdLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  }, [pwdLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  // Use effect to regenerate the password whenever the options change
  useEffect(() => {
    generatePassword();
  }, [pwdLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols, generatePassword]);

  // Reference to the password input field for copying to clipboard
  const passwordRef = useRef(null);

  // Function to copy the generated password to the clipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="bg-gray-900 text-white flex flex-col justify-center min-h-screen items-center">
      <div className="flex bg-gray-800 flex-col items-center w-auto border-4 border-blue-500 rounded-md p-6">
        <header>
          <h1 className="text-4xl text-yellow-400 mb-6">Password Generator</h1>
        </header>
        <div className="flex items-center mb-4 w-full">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full p-2 text-xl bg-gray-700 text-cyan-400 border-cyan-400 rounded-l-md"
          />
          <button
            onClick={copyToClipboard}
            className="p-2 bg-cyan-400 text-black text-xl rounded-r-md hover:bg-yellow-200"
          >
            COPY
          </button>
        </div>

        <div className="flex items-center mb-4 w-full">
          <input
            type="range"
            min="6"
            max="20"
            value={pwdLength}
            onChange={(e) => setPwdLength(Number(e.target.value))}
            className="w-full"
          />
          <span className="ml-4 text-xl">{pwdLength}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <label className="flex items-center justify-start mb-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            Uppercase
          </label>
          <label className="flex items-center justify-start mb-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="mr-2"
            />
            Lowercase
          </label>
          <label className="flex items-center justify-start mb-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            Digits
          </label>
          <label className="flex items-center justify-start mb-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
