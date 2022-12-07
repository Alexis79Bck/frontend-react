import React from 'react';

class BooksList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        books: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:82/backend-example/public/api/books")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              books: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, books } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <table>
            <thead>
              <tr>
                <th> ID </th>
                <th> Title </th>
                <th> Language </th>
                <th> Release Year </th>
                <th> Pages </th>
                <th> Author </th>
                <th> Publisher </th>
                <th colSpan="2"> </th>
              </tr>            
            </thead>
            <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <th> {book.id} </th>
                <th> {book.title} </th>
                <th> {book.language} </th>
                <th> {book.releaseYear} </th>
                <th> {book.npages} </th>
                <th> {book.author.name} </th>
                <th> {book.publisher.name} </th>
                <th > EDIT </th>
                <th > DELETE </th>
              </tr> 
            ))}
            </tbody>
            
          </table>
        );
      }
      
    }
    
    
  }
export default BooksList;