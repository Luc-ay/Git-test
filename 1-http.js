const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`<h1>Welcome to our Home page</h1>
<a href="/about">back about</a>`)
    return // Stop further execution
  }

  if (req.url === '/about') {
    res.end(`<h1> Welcome to our Short History </h1>
<a href="/">back home</a>
      `)
    return // Stop further execution
  }

  // Handles all other routes
  res.end(`
    <h>Oops!</h>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})
