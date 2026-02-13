import { useState } from "react"
import "./Post.css"

export default function Post() {
  const [showInput, setShowInput] = useState(false)
  const [text, setText] = useState("")
  const [savedText, setSavedText] = useState("")

  const handleWrite = () => {
    setShowInput(true)
  }

  const handleRead = async () => {
    if (!text) return alert("Please write something first!")

    alert("Reading your post...")

   
    const response = await fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    })

    const data = await response.json()

    setSavedText(data.message)
    setShowInput(false)
  }

  return (
    <div className="post-container">
      <div className="post-card">
        <h2>Create Post</h2>

        {showInput && (
          <input
            type="text"
            placeholder="Write something..."
            className="post-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}

        <div className="btn-group">
          <button className="btn write-btn" onClick={handleWrite}>
            Write
          </button>

          <button className="btn read-btn" onClick={handleRead}>
            Read
          </button>
        </div>

        {savedText && (
          <p style={{ marginTop: "20px" }}>
            <strong>Your Post:</strong> {savedText}
          </p>
        )}
      </div>
    </div>
  )
}
