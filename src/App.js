import React, { Component } from 'react';
import api from './Components/service/api';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import LoadMore from './Components/LoadMore/LoadMore';
import { ThreeDots } from 'react-loader-spinner'
import NoPictures from './Components/NoPictures/NoPictures';


export default class App extends Component {
  state = {
    query: '',
    lastQuery: '',
    page: 1, 
    pictures: [],
    loading: false
  }

  componentDidUpdate(prevProps, prevState) { 
    const prevQuery = prevState.lastQuery;
    const nextQuery = this.state.lastQuery;
    if (prevQuery !== nextQuery) {
      this.handleSearch();
    } 
  }

  handleInputChange = e => {
    this.setState({ query: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault(e); 
    if (this.state.query !== this.state.lastQuery) {
      this.setState({
      lastQuery: this.state.query,
      query: '',
      pictures: [],
      page: 1
    });
    }
    return;
    
  }

  handleSearch = () => {
    const { lastQuery, page, loading } = this.state;
    this.setState({loading:true})
    api.findImages(lastQuery, page)
      .then(images => this.setState(prevState => ({ pictures: [...prevState.pictures, ...images], page: prevState.page + 1 })))
      .finally(() => this.setState({loading: false}))
  }  

  handleLoadMore = () => {
    this.handleSearch();
  }

  render() {
    const { query, pictures } = this.state;
    return (
      <div className="App">
        <Searchbar inputChange={this.handleInputChange} handleSearch={this.handleSubmit} inputValue={query}></Searchbar>
        {this.state.loading && <ThreeDots height="50" width="50" radius="9"color="#3f51b5" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>}
        {this.state.pictures.length > 0 &&  <ImageGallery pictures={pictures}></ImageGallery>}
        {this.state.pictures.length > 0 && <LoadMore loadMore={this.handleLoadMore}></LoadMore>}
        {(this.state.lastQuery.length > 0 && this.state.pictures.length === 0) && <NoPictures></NoPictures>}
      </div>
    )
  }
}
