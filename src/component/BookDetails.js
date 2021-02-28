import React from 'react'
import { Link } from 'react-router-dom'

const books = [
  {
    id: 1,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    language: 'English',
  },
  {
    id: 2,
    title: 'Harry Potter',
    author: 'JK Rolling',
    language: 'English',
  },
  {
    id: 3,
    title: 'the story of my life',
    author: ' Hellen keller',
    language: 'English',
  },
  {
    id: 4,
    title: 'Power of your subconscious mind',
    author: 'Joseph Murphy',
    language: 'English',
  },
  {
    id: 5,
    title: 'Zero to one',
    author: 'Peter Theil',
    language: 'English',
  },
]

const BookDetails = (props) => {
  console.log(props)
  return (
    <div>
      <Link to="/">
        <button className="text-left btn btn-warning">&lt; Back</button>
      </Link>
      <div className="d-flex justify-content-center align-items-center h-100">
        <h1>Details of book with ID - {props.match.params.book_id}</h1>
      </div>
    </div>
  )
}

export default BookDetails
