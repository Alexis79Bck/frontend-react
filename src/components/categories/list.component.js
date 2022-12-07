import React from 'react';

class CategoriesList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        categories: []
      };
    }
  
    componentDidMount() {
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
      const { error, isLoaded, categories } = this.state;
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
                <th> Name </th>
                
                <th colSpan="2"> </th>
              </tr>            
            </thead>
            <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <th> {category.id} </th>
                <th> {category.name} </th>
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
  export default CategoriesList;