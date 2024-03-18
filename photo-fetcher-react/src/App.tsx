import React, { useState, useEffect } from "react"
import "./App.css"

const PhotoFetcher = () => {
  const [photos, setPhotos] = useState([])
  const [grayscale, setGrayscale] = useState(false)

  useEffect(() => {
    fetchAndDisplayPhotos()
  }, [])

  const fetchPhoto = async () => {
    try {
      const response = await fetch("https://picsum.photos/367/367")
      if (!response.ok) {
        throw new Error("Failed to fetch photo")
      }
      const photoUrl = response.url
      return photoUrl
    } catch (error) {
      console.error(error)
    }
  }

  const fetchAndDisplayPhotos = async () => {
    try {
      let newPhotos = []
      for (let i = 0; i < 4; i++) {
        const photoUrl = await fetchPhoto()
        newPhotos.push(photoUrl)
      }
      setPhotos(newPhotos)
    } catch (error) {
      console.error(error)
    }
  }

  const toggleGrayscale = () => {
    setGrayscale(!grayscale)
  }

  const applyGrayscale = () => {
    return grayscale ? "grayscale" : ""
  }

  return (
    <section className="main-container">
      <p>Photo Fetcher</p>

      <div className="controls">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="toggleSwitch"
            checked={grayscale}
            onChange={toggleGrayscale}
          />
          <label htmlFor="toggleSwitch">Make photos grayscale</label>
        </div>
        <button id="loadMoreBtn" onClick={fetchAndDisplayPhotos}>
          Fetch New Photos
        </button>
      </div>

      <div className="photo-container">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt="Random Photo"
            className={applyGrayscale()}
          />
        ))}
      </div>
    </section>
  )
}

export default PhotoFetcher
