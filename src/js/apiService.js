const KEY = '23138360-a86df174725cc8e09fae0ddd6';
export default function fetchImages(searchQuery, pageNumber) {
  return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${KEY}
`)
    .then(r => r.json())
    .catch(error => console.log(error));
}
