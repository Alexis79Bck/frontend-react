import './App.css';
import BooksList from './components/books/list.component';
import AuthorsList from './components/authors/list.component';
import PublishersList from './components/publishers/list.component';
import CategoriesList from './components/categories/list.component';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>                    
                        <Link to="books/">Books</Link>
                    </li>
                    <li>                    
                        <Link to="authors/">Authors</Link>
                    </li>
                    <li>                    
                        <Link to="publisher/">Publishers</Link>
                    </li>
                    <li>                    
                        <Link to="categories/">Categories</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="books/" element={<BooksList />}/>
                <Route path="authors/" element={<AuthorsList />}/>
                <Route path="publishers/" element={<PublishersList />}/>
                <Route path="categories/" element={<CategoriesList />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
