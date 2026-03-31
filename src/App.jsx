import { Route, Routes } from "react-router-dom"
import { getPhotos, getVideos } from "./api/mediaApi"

import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"

const App = () => {
  return (
    <>
      <div className=" bg-gray-950 text-white overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage/>} />
        </Routes>

      </div>
    </>
  )
}

export default App