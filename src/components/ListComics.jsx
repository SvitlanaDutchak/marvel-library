import React from "react";
import { CardComics } from './Card';
import Spinner from 'react-bootstrap/Spinner';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 8;

class ComicsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: false,
      currentItems: null,
      totalItems: 0,
      pageCount: 0,
      itemOffset: 0
    }
  }

  makeRequest() {
    this.setState({ loading: true })
    fetch(`http://gateway.marvel.com/v1/public/comics?&titleStartsWith=${this.props.value.search}&orderBy=${this.props.value.select}&limit=${this.props.value.number}&formatType=${this.props.value.format}&ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e`, {
    })
      .then(respons => respons.json())
      .then(data => this.setState({ data, pageCount: Math.ceil(data.data.total / ITEMS_PER_PAGE), currentItems: data.data.results, totalItems: data.data.total, loading: false }));
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(`http://gateway.marvel.com/v1/public/comics?limit=8&ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e`, {
    })
      .then(respons => respons.json())
      .then(data => this.setState({  ...this.state, data, pageCount: Math.ceil(data.data.total / ITEMS_PER_PAGE), currentItems: data.data.results, totalItems: data.data.total, loading: false  }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      this.makeRequest()
    }
    if (prevState.itemOffset !== this.state.itemOffset) {
      if (this.props.value.search) {
        fetch(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${this.props.value.search}&limit=8&offset=${this.state.itemOffset}&ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e`, {
        })
          .then(respons => respons.json())
          .then(data => this.setState({ ...this.state, data, currentItems: data.data.results, loading: false })
          );
      } else {
        fetch(`http://gateway.marvel.com/v1/public/comics?limit=8&offset=${this.state.itemOffset}&ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e`, {
        })
          .then(respons => respons.json())
          .then(data => this.setState({ ...this.state, data, currentItems: data.data.results, loading: false })
          );
      }

    }
  }

  handlePageClick = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % this.state.totalItems;
    this.setState({
      ...this.state,
      itemOffset: newOffset
    });
  };

  render() {

    const { data, loading } = this.state;
    let resultObject = {};
    resultObject = { ...resultObject, ...data.data }

    return (
      loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <>
          <div className='cards'> {
            resultObject.results?.length === 0 ? <h2 className="title">No results</h2> :
              resultObject.results && resultObject.results.map(({ id, title, thumbnail, description, modified, creators, stories, prices }) => (
                <CardComics
                  key={id}
                  title={title}
                  src={`${thumbnail.path}/standard_fantastic.jpg`}
                  srcMd={`${thumbnail.path}/portrait_uncanny.jpg`}
                  srcLg={`${thumbnail.path}/landscape_incredible.jpg`}
                  description={description}
                  modified={modified}
                  prices={prices[0]?.price === 0 ? <span>no information</span> : <span>{prices[0].price}</span>}
                  creatorsList={creators.items?.length === 0 ? <p className="card-text">There is no information about autors</p> : creators.items.map(({ name }) => { return <li key={name} className='popup__item'><i className="fa-solid fa-check"></i>{name}</li> })}
                  storiesList={stories.items?.length === 0 ? <p className="card-text">There is no information about the participation in the comics</p> : stories.items.map(({ name }) => { return <li key={name} className='popup__item'><i className="fa-solid fa-check"></i>{name}</li> })}
                />
              ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={this.handlePageClick}
            pageRangeDisplayed={5}
            pageCount={this.state.pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </>
      )
    )
  }
}

export default ComicsList;