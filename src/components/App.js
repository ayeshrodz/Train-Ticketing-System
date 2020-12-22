import React from "react"
import Signup from "./auth/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import AuthMain from "./auth/AuthMain"

function App() {
  return (
    <AuthProvider>
      {/* Header */}

      {/* Login */}
      <AuthMain/>

    </AuthProvider>
    
  )
}

export default App;
