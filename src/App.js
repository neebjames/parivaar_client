import React from 'react'

// import {
//     TextField,
//     Button
//   } from 'react-md';

  
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch(process.env.REACT_APP_PARIVAAR_SERVER_URL + "familydetails")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
    render() {
        return (
            <div className="md-grid">
           
    {/* <TextField id="placeholder-only-title" placeholder="Enter house name" className="md-cell md-cell--bottom" block={true}/>
    <Button floating>home</Button> */}
    <p className="App-intro">{this.state.apiResponse}</p>

          </div>
        );
      }
}