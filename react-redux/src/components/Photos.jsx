import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "./../features/photos/photosSlice";

export default function Photos() {
  const { photos, isLoading, isError, error } = useSelector(
    (state) => state.photos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading photos....</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }

  if (!isLoading && !isError && photos.length === 0) {
    content = <h1>No photos found!</h1>;
  }

  if (!isLoading && !isError && photos.length > 0) {
    content = (
      <ol>
        {photos.map((photo) => (
          <li key={photo.id}><img src={photo.url} alt={photo.id} /></li>
        ))}
      </ol>
    );
  }

  return (
    <div>
      <h1>photos</h1>
      {content}
    </div>
  );
}
