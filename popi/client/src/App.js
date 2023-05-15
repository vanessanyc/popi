import React, { useEffect, useState } from 'react'
import './App.css'
import Homepage from './components/Homepage/Homepage'

function App() {

  var apiKey = "c2b279f1bbfca29d3c01815222dafcf9";
  const [backendData, setBackendData] = useState(undefined)
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])  

  const [albumInfo, setAlbumInfo] = useState([{}]) 
  useEffect(() => {
    fetch("/album").then(
      response => response.json()
      ).then(
        data => {
          setAlbumInfo(data)
        }
      )
  }, [])
  
  return (

    <div>
    <div className="App">
      <Homepage />
    </div>
    </div>
  )
}

export default App