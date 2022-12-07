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
                    author_id:'', 
                    publisher_id:'', 
                    category_id:''
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
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default CreateBook;