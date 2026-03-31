const ResultCard = ({ item }) => {
    const addCollection = (item) => {
        const oldData = JSON.parse(localStorage.getItem("collection")) || []
        const newData = [...oldData, item]
        localStorage.setItem("collection", JSON.stringify(newData))
    }

    return (
        <div className='relative h-85 w-85 '>
            <a href={item.url} className='h-full w-full'>
                {(item.type === 'photo') ? <img src={item.src} alt={item.title} className='rounded w-full h-full object-cover' /> : ' '}
                {(item.type === 'video') ? <video autoPlay muted={true} src={item.src} className='object-cover w-full h-full rounded'></video> : ' '}
            </a>

            <div className='flex justify-between items-center  p-2 gap-8 absolute bottom-0  bg-linear-to-r from-black/50 to-transparent w-full'>
                <h1 className='font-semibold line-clamp-1 capitalize'>{item.title}</h1>
                <button onClick={() => { addCollection(item) }} className='px-4 py-2 rounded bg-blue-500 font-semibold active:scale-95'>Save</button>
            </div>
        </div>
    )
}

export default ResultCard