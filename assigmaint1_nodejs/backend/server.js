const http = require("http")

const server = http.createServer((req, res) => {

  // Allow CORS (very important for React)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(200)
    res.end()
    return
  }

  if (req.method === "POST" && req.url === "/post") {
    let body = ""

    req.on("data", chunk => {
      body += chunk.toString()
    })

    req.on("end", () => {
      const data = JSON.parse(body)

      console.log("Received:", data.message)

      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ message: data.message }))
    })

  } else {
    res.writeHead(404)
    res.end("Route not found")
  }
})

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000")
})
