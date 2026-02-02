import React, { useState, useEffect } from 'react'

function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      {
        data && data.map(item => (
          <p key={item.id}>{item.title}</p>
        ))
      }
    </div>
  )
}

export default Home
