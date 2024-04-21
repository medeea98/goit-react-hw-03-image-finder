// App.js
/* import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader'; 

export class App extends Component {
  state = {
    key: "39728913-c0ee6c2d48ec23bc7f8279286",
    query: '',
    images: [],
    loading: false,
    page: 1,
    showModal: false,
    modalImage: ''
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true, page: 1 }, async () => {
      try {
        const response = await axios.get(`https://pixabay.com/api/?q=${this.state.query}&page=1&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`);
        this.setState({ images: response.data.hits });
      } catch (error) {
        console.error('Error fetching images: ', error);
      }
      this.setState({ loading: false });
    });
  };

  loadMoreImages = async () => {
    this.setState({ loading: true, page: this.state.page + 1 });

    try {
      const response = await axios.get(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page + 1}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`);
      this.setState(prevState => ({ images: [...prevState.images, ...response.data.hits] }));
    } catch (error) {
      console.error('Error fetching more images: ', error);
    }

    this.setState({ loading: false });
  };

  openModal = (image) => {
    this.setState({ showModal: true, modalImage: image.largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImage: '' });
  };

  setQuery = (query) => {
    this.setState({ query });
  }

  render() {
    const { images, loading, showModal, modalImage } = this.state;

    return (
      <div>
        <Searchbar setQuery={query => this.setQuery(query)} onSubmit={this.handleSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {loading && <Loader />}
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        {showModal && <Modal closeModal={this.closeModal} modalImage={modalImage} />}
      </div>
    );
  }
}


 */
import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';

export const App = () => {
  const [key] = useState("39728913-c0ee6c2d48ec23bc7f8279286");
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(1);

    try {
      const newQuery = e.target.elements[1].value;

      // Fetch images for the new query
      await fetchImages(newQuery);
    } catch (error) {
      console.error('Error fetching images: ', error);
    }

    setLoading(false);
  };

  const fetchImages = async (query) => {
    try {
      const response = await axios.get(`https://pixabay.com/api/?q=${query}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
      setImages(response.data.hits);
    } catch (error) {
      console.error('Error fetching images: ', error);
    }
  };

  const loadMoreImages = async () => {
    setLoading(true);
    setPage(page + 1);

    try {
      const response = await axios.get(`https://pixabay.com/api/?q=${query}&page=${page + 1}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
      setImages(prevImages => [...prevImages, ...response.data.hits]);
    } catch (error) {
      console.error('Error fetching more images: ', error);
    }

    setLoading(false);
  };

  const openModal = (image) => {
    setShowModal(true);
    setModalImage(image.largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  return (
    <div>
      <Searchbar setQuery={setQuery} onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && <Button onClick={loadMoreImages} />}
      {showModal && <Modal closeModal={closeModal} modalImage={modalImage} />}
    </div>
  );
};

