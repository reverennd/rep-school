// Gallery.js
import { useEffect, useState } from "react"
import Image from "./Image"

function Gallery() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = () => {
    // Fetch photos from the API
    // Update the 'photos' state with the fetched data
  }

  const handleFetchNewPhotos = () => {
    // Fetch new photos and update the 'photos' state
  }

  return (
    <div id="gallery">
      {photos.map((photo) => (
        <Image key={photo.id} photo={photo} />
      ))}
      <div id="morephotos">
        <button className="morephotos" onClick={handleFetchNewPhotos}>
          More Photos
        </button>
      </div>
    </div>
  )
}

export default Gallery
