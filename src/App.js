import 'bootstrap/dist/css/bootstrap.min.css'
import Book from './component/Book'
import BookDetails from './component/BookDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <h1 className="text-white bg-dark p-2 text-center">Book Store</h1>
        <Route exact path="/" component={Book} />
        <Route path="/:book_id" component={BookDetails} />
      </Router>
    </>
  )
}

export default App
