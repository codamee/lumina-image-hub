import { useEffect } from "react";
import { getVideos, getPhotos } from "../api/mediaApi";
import {
    setError,
    setLoading,
    setQuery,
    setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
    const { query, loading, error, activeTab, results } = useSelector(
        (store) => store.search,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (!query) {
            dispatch(setQuery('nature'));
            return
        };
        const getData = async () => {
            try {
                dispatch(setLoading());
                let data = [];
                if (activeTab === "photos") {
                    const response = await getPhotos(query);
                    data = response.map((item) => ({
                        id: item.id,
                        type: "photo",
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }));
                }
                if (activeTab === "videos") {
                    const response = await getVideos(query);
                    data = response.map((item) => ({
                        id: item.id,
                        type: "video",
                        title: item.user.name || "video",
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }));
                }
                dispatch(setResults(data));
            } catch (error) {
                dispatch(setError(error.message));
            }
        };
        getData();
    }, [query, activeTab]);
    if (error) return <div>Error</div>;
    if (loading) return <div>Loading</div>;
    return (
        <div className="grid grid-cols-4 gap-7 px-10 pb-10 justify-between  ">
            {results.map((item, index) => {
                return <ResultCard key={index} item={item} />
            })}
        </div>
    );
};

export default ResultGrid;
