
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CollectionCard from '../components/CollectionCard';
import { clearCollection } from '../redux/features/collectionSlice';
import { toast } from 'react-toastify';


const CollectionPage = () => {
    const items = useSelector(state => state.collection.items)
    const dispatch = useDispatch()
    const removeWholeCollection = () => {
        dispatch(clearCollection())
        toast.error("Collection Removed")
    }
    return (
        <div className='text h-screen'>
            <nav className='p-10 bg-gray-800 flex justify-center items-center'>
                <Link to={"/"} className='w-1/5'>
                    <button className='px-4 py-2 w-full rounded font-semibold cursor-pointer bg-blue-600'>Home</button>
                </Link>
            </nav>
            <div className='flex justify-between items-center py-5 px-10'>
                <p className='px-4 py-2 rounded font-semibold cursor-pointer border'>your collection</p>
                <button onClick={() => { removeWholeCollection() }} className='px-4 py-2 rounded font-semibold cursor-pointer bg-red-600'>clear collection</button>
            </div>
            {(items.length===0) && <div className='p-10 text-xl'>🔥Nothing to show here ! Add some to collection ....</div>}
            <div className="grid grid-cols-4 gap-7 px-10 pb-10 justify-between ">
                {items.map((item, index) => {
                    return <CollectionCard key={item.id || index} item={item} />
                })}
            </div>
        </div>
    )
}

export default CollectionPage