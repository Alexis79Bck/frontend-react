import React from 'react';

class CreateBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                    title:'', 
                    language:'', 
                    releaseYear:'', 
                    npages:'',
                    author:'-- Author --', 
                    publisher:'-- Publisher --', 
                    category:'-- Category --'
            }
            
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  
    handleSubmit(event) {
      const { title, language, releaseYear, npages, author_id, publisher_id, category_id} = this.state
            fetch('http://localhost:82/backend-example/public/api/books/new', {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    title: title, 
                    language: language, 
                    releaseYear: releaseYear, 
                    npages: npages, 
                    author_id: author_id, 
                    publisher_id: publisher_id, 
                    category_id: category_id
                }),
                
            })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true
                    })
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                    
                }
                
                
            )
      
      
      event.preventDefault();
    }
    
    requestGetAuthors() {
        fetch("http://localhost:82/backend-example/public/api/authors")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                authors: result
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
    
      requestGetPublishers() {
        fetch("http://localhost:82/backend-example/public/api/publishers")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                publishers: result
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
      
      requestGetCategories() {
        fetch("http://localhost:82/backend-example/public/api/categories")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                categories: result
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
      const { authors } = this.requestGetAuthors;
      const {publishers} = this.requestGetPublishers;
      const {categories } = this.requestGetCategories;
      return (
         
        <form onSubmit={this.handleSubmit}>
            <label>
                Title
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            </label><br />
            <label>
                Language
                <input type="text" name="language" value={this.state.language} onChange={this.handleChange} />
            </label><br />
            <label>
                Pages 
                <input type="number" name="npages" value={this.state.npages} onChange={this.handleChange} />
            </label><br />
            <label>
                Release Year
                <input type="number" name="releaseYear" min="1975"  value={this.state.releaseYear} onChange={this.handleChange} />
            </label><br />
            <label>
                Author
                <select id="author" name="author" value={this.state.author}>
                     
                    {authors.map(author => ( <option value={author.id}> {author.name} </option>  ))}
                </select>
            </label><br />
            <label>
                Publisher
                <select id="publisher" name="publisher"  value={this.state.publisher}>
                     
                    {publishers.map(publisher => ( <option value={publisher.id}> {publisher.name} </option>  ))}
                </select>
            </label><br />
            <label>
                Author
                <select id="category" name="category"  value={this.state.category}>
                    
                    {categories.map(category => ( <option value={category.id}> {category.name} </option>  ))}
                </select>
            </label><br />
         
        </form>
      );
    }
  }
export default CreateBook;