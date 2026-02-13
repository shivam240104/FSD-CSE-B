import { Routes, Route } from "react-router-dom"
import Navbar from "./Nav.jsx"
import Home from "./Landing.jsx"
import Work from "./Post.jsx"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  )
}

export default App
