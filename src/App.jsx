import { Route, Routes } from "react-router-dom"
import { getPhotos, getVideos } from "./api/mediaApi"

import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import { ToastContainer, Zoom } from "react-toastify"

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover={true}
        theme="dark"
        transition={Zoom}
      />
      <div className=" bg-[#0D1321] text-white overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>

      </div>
    </>
  )
}

export default App