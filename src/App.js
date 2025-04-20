import React from 'react';
import './index.css'; // Make sure this imports index.css where Tailwind is applied

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl text-blue-500 font-bold">
          TailwindCSS is working!
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700">
          Test Button
        </button>
      </header>
    </div>
  );
}

export default App;
