import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"
import { Link } from "react-router-dom"

const SearchBar = () => {
    const [text, setText] = useState('')
    const query = useSelector((state) => state.search.query)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        console.log(query);
        setText('')
    }

    return (
        <div className="bg-[#1D2D44] flex justify-between items-center p-10 shadow-xl">
            <div className="text-4xl font-bold">
                <h1>&euro;Lum<span className="text-blue-600">ina&sect;</span></h1>
            </div>
            <div className="flex gap-5 w-1/2">
                <form onSubmit={(e) => handleSubmit(e)}  className="flex gap-5 w-full">
                    <input value={text} autoFocus={true} className=" w-full border border-gray-600 px-4 py-2 outline-none rounded text-xl" type="text" placeholder="Search photos & videos..." required onChange={(e) => {
                        setText(e.target.value)
                    }} />
                    <button className="bg-white text-black px-4 py-2 outline-none rounded text-xl active:scale-95 cursor-pointer">Search</button>
                </form>
                <Link to={'/collection'}><button className="bg-blue-600  px-4 py-2 outline-none rounded text-xl active:scale-95 cursor-pointer font-semibold">Collection</button></Link>
            </div>
            
        </div>
    )
}

export default SearchBar