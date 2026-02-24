import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
          <div className="flex justify-center space-x-4">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="h-16 w-16 animate-bounce" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="h-16 w-16 animate-spin-slow" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
            Vite + React + Tailwind
          </h1>
          <div className="space-y-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p className="text-gray-600">
              Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> to test HMR
            </p>
          </div>
          <p className="text-sm text-gray-400 italic">
            Click on the logos to learn more
          </p>
        </div>
      </div>
    </>
  )
}

export default App
