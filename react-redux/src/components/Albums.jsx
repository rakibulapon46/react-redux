import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAlbums } from './../features/albums/albumsSlice';

export default function Albums() {
    const {albums, isLoading, isError, error} = useSelector((state) => state.albums)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchAlbums())
    }, [dispatch])

    let content;

    if (isLoading) {
        content = <h1>Albums Loading....</h1>
    }

    if (!isLoading && isError) {
        content = <h1>{error}</h1>
    }

    if (!isLoading && !isError && albums.length === 0) {
        content = <h1>No data found</h1>
    }

    if (!isLoading && !isError && albums.length > 0) {
        content = <ul>{albums.map((album) => <li key={album.id}>{album.title}</li>)}</ul>
    }

    return(
        <div className="albums">
            <h1>Albums</h1>
            {content}
        </div>
    )
}
