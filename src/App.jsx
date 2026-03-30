import {  getPhotos, getVideos } from "./api/mediaApi"

const App = () => {
  return (
    <>
      <div className="flex gap-4 p-4">
        <button onClick={async() => console.log(await getPhotos('cat')) }>getPhotos</button>
        <button onClick={async() => console.log( await getVideos('cat')) }>videos</button>
      </div>
    </>
  )
}

export default App