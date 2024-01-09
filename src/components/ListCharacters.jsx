//KEY1 = &ts=1&apikey=1d755b0535238860d088aecc847d7670&hash=5dce89f1b02a48091e3bca218bc7d14c
//KEY2 = &ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e

import React from "react";
import { CardCharacters } from './Card';
import Spinner from 'react-bootstrap/Spinner';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 8;

class CharactersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: false,
      currentItems: null,
      totalItems: 0,
      pageCount: 0,
      itemOffset: 0,
    }
  }

  makeRequest() {
    this.setState({ loading: true })
    fetch(`http://gateway.marvel.com/v1/public/characters?&nameStartsWith=${this.props.value.search}&orderBy=${this.props.value.select}&limit=${this.props.value.number}&ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e`, {
    })
      .then(respons => respons.json())
      .then(data => this.setState({ data, pageCount: Math.ceil(data.data.total / ITEMS_PER_PAGE), currentItems: data.data.results, totalItems: data.data.total, loading: false }),
    );
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(`http://gateway.marvel.com/v1/public/characters?limit=8&ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e`, {
    })
      .then(respons => respons.json())
      .then(data => this.setState({ ...this.state, data, pageCount: Math.ceil(data.data.total / ITEMS_PER_PAGE), currentItems: data.data.results, totalItems: data.data.total, loading: false })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      this.makeRequest()
    }
    if (prevState.itemOffset !== this.state.itemOffset) {
      if (this.props.value.search) {
        fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.props.value.search}&limit=8&offset=${this.state.itemOffset}&ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e`, {
        })
          .then(respons => respons.json())
          .then(data => this.setState({ ...this.state, data, currentItems: data.data.results, loading: false })
          );
      } else {
        fetch(`http://gateway.marvel.com/v1/public/characters?limit=8&offset=${this.state.itemOffset}&ts=1&apikey=667293d4e840a1862bd8817004eaf003&hash=83b9f15915011ff3bd81d5cd37c59c7e`, {
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
              resultObject.results && resultObject.results.map(({ id, name, thumbnail, description, modified, comics }) => (
                <CardCharacters
                  key={id}
                  title={name}
                  src={`${thumbnail.path}/standard_fantastic.jpg`}
                  srcMd={`${thumbnail.path}/portrait_uncanny.jpg`}
                  srcLg={`${thumbnail.path}/landscape_incredible.jpg`}
                  description={description}
                  modified={modified}
                  comicsList={comics.items?.length === 0 ? <p className="card-text">There is no information about the participation in the comics</p> : comics.items.map(({ name }) => { return <li key={name} className='popup__item'><i className="fa-solid fa-check"></i>{name}</li> })}
                />
              ))
          }
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

export default CharactersList;