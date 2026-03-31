import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { addCollection } from "../redux/features/collectionSlice"
import { toast, ToastContainer } from "react-toastify"


const ResultCard = ({ item }) => {
    const items = useSelector((state) => state.collection.items)
    const dispatch = useDispatch()
    const addToCollection = (item) => {
        dispatch(addCollection(item))
        toast.success('Saved to collection');
    }

    return (
        <>
            <div className='relative h-85 w-85 rounded'>
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        opacity: { duration: 1 }
                    }}

                    className="h-full w-full bg-white/5 rounded-xl overflow-hidden shadow-lg">
                    <a href={item.url} className='h-full w-full'>
                        {(item.type === 'photo') ? <img src={item.src} alt={item.title} className='rounded w-full h-full object-cover' /> : ' '}
                        {(item.type === 'video') ? <video autoPlay muted={true} src={item.src} className='object-cover w-full h-full rounded'></video> : ' '}
                    </a>
                </motion.div>

                <div className='flex justify-between items-center  p-2 gap-8 absolute bottom-0  bg-linear-to-r from-black/50 to-transparent w-full'>
                    <h1 className='font-semibold line-clamp-1 capitalize'>{item.title}</h1>
                    <button onClick={() => { addToCollection(item) }} className='px-4 py-2 rounded bg-blue-500 font-semibold active:scale-95 cursor-pointer'>Save</button>
                </div>
            </div>
        </>
    )
}

export default ResultCard