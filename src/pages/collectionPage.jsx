
import { Link } from 'react-router-dom'

const CollectionPage = () => {
    return (
        <div className='text-xl'>
            <nav className='p-10 bg-gray-800 flex justify-between items-center'>
                <p className='px-4 py-2 rounded border font-bold'>your collection</p>
                <Link to={"/"}>
                    <button className='px-4 py-2 rounded font-semibold cursor-pointer bg-blue-600'>Home</button>
                </Link>
            </nav>

        </div>
    )
}

export default CollectionPage