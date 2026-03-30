import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlice"

const Tabs = () => {
    const activeTab = useSelector((state) => state.search.activeTab)
    const dispatch = useDispatch()
    const tabs = ["photos", "videos"]

    return (
        <div className="flex gap-10 p-10">
            {tabs.map((tab, index) => {
                return <button key={index} className={`${(activeTab === tab ? 'bg-blue-500' : 'bg-gray-600')} px-4 py-2 rounded transition cursor-pointer uppercase active:scale-95`} onClick={() => dispatch(setActiveTab(tab))}>{tab}</button>
            })}
        </div>
    )
}

export default Tabs