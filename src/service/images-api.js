function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=28008769-991cef6bea94341115fdc5eba&image_type=photo&orientation=horizontal&per_page=12`
  );
}
export default fetchImages;
