
import BooksList from './components/books/list.component';
import CreateBook from './components/books/create.component';
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
                    <li> Books                   
                        <ol>
                            <li>
                                <Link to="books/">List</Link>                                                                 
                            </li>
                            <li>
                                <Link to="books/new">New</Link>
                            </li>
                        </ol>
                        
                    </li>
                    <li> Authors
                        <ol>
                            <li>
                                <Link to="authors/">List</Link>                                    
                            </li>
                        </ol>               
                        
                    </li>
                    <li> Publishers
                        <ol>
                            <li>
                                <Link to="publishers/">List</Link>                                    
                            </li>
                        </ol>
                    </li>
                    <li>  Categories
                        <ol>
                            <li>
                                <Link to="categories/">List</Link>                                    
                            </li>
                        </ol>
                    </li>
                </ul>
            </nav>
            <hr /><br /><hr />
            <Routes>
                <Route path="books/" element={<BooksList />}/>
                <Route path="books/new" element={<CreateBook />}/>
                <Route path="authors/" element={<AuthorsList />}/>
                <Route path="publishers/" element={<PublishersList />}/>
                <Route path="categories/" element={<CategoriesList />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
