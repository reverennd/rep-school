// Image.js

function Image({ photo }) {
  return (
    <span className="photo">
      <img src={photo.url} alt={photo.author} />
      <span className="overlay">
        <div className="big-text">{photo.author}</div>
        <div className="small-text">{photo.url}</div>
      </span>
    </span>
  )
}

export default Image
