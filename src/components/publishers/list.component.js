import React from 'react';

class PublishersList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        publishers: []
      };
    }
  
    componentDidMount() {
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
  
    render() {
      const { error, isLoaded, publishers } = this.state;
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
            {publishers.map(publisher => (
              <tr key={publisher.id}>
                <th> {publisher.id} </th>
                <th> {publisher.name} </th>
                <th> {publisher.country} </th>
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
  export default PublishersList;