import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./App.css"

function Home() {
  const [isGreyscale, setIsGreyscale] = useState(false)
  const [tracer, setTracer] = useState(0)
  const baseURL = "https://picsum.photos/367/300"

  const fetchAndAppendImages = (count) => {
    const gallery = document.getElementById("gallery")
    for (let i = 0; i < count; i++) {
      fetch(baseURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`)
          }
          return response
        })
        .then((data) => {
          const photoItem = document.createElement("span")
          photoItem.classList.add("photo")

          const imageElement = document.createElement("img")
          imageElement.src = data.url
          let newURL = `https://picsum.photos/id/${data.headers.get(
            "picsum-id"
          )}/info`

          fetch(newURL)
            .then((response) => response.text())
            .then((dataStr) => {
              let response = JSON.parse(dataStr)
              const overlay = document.createElement("span")
              overlay.classList.add("overlay")

              const line1 = document.createElement("div")
              line1.innerText = response.author
              line1.classList.add("big-text")

              const line2 = document.createElement("div")
              line2.innerText = response.url
              line2.classList.add("small-text")

              overlay.appendChild(line1)
              overlay.appendChild(line2)

              photoItem.appendChild(imageElement)
              photoItem.appendChild(overlay)
              gallery.appendChild(photoItem)
              setTracer((prevTracer) => prevTracer + 1)
            })
        })
        .catch((error) => {
          console.error("Error fetching image:", error)
        })
    }
  }

  const handleFetchImages = () => {
    const gallery = document.getElementById("gallery")
    const temp = tracer
    setTracer(0)
    gallery.innerHTML = ""
    fetchAndAppendImages(temp)
  }

  const handleToggleGreyscale = () => {
    setIsGreyscale((prevState) => !prevState)
    const gallery = document.getElementById("gallery")
    gallery.classList.toggle("greyscale", isGreyscale)
  }

  return (
    <div className="maincont">
      <div className="titular">Photo Fetcher</div>
      <div className="cntrl">
        <span id="graytoggle">
          <label htmlFor="graybutton" className="switch">
            <input
              type="checkbox"
              id="graybutton"
              onChange={handleToggleGreyscale}
            />
            <span className="slider round"></span>
          </label>
          <label htmlFor="graybutton">Make photos grayscale</label>
        </span>
        <span id="refetch">
          <button className="refetch" onClick={handleFetchImages}>
            Fetch New Photos
          </button>
        </span>
      </div>
      <div id="gallery"></div>
      <div id="morephotos">
        <button className="morephotos" onClick={() => fetchAndAppendImages(4)}>
          More Photos
        </button>
      </div>
    </div>
  )
}

export default Home
