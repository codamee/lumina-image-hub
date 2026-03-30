import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"

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
        <div >
            <form onSubmit={(e) => handleSubmit(e)} className="flex gap-5 p-10 bg-gray-900 ">
                <input value={text} className="w-full border-2 px-4 py-2 outline-none rounded text-xl" type="text" placeholder="Search photos & videos..." required onChange={(e) => {
                    setText(e.target.value)
                }} />
                <button className=" border-2 px-4 py-2 outline-none rounded text-xl active:scale-95 cursor-pointer">Search</button>
            </form>
        </div>
    )
}

export default SearchBar