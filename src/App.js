import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast';



class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      modalVisible: false,
      beast: {},
    }
  }
  
  showModalApp = (beast) => {
    this.setState({
      modalVisible: true,
      beast: beast
    })
  }

  closeModalApp = () => {
    this.setState({
      modalVisible: false,
    })
  }

  render() {
    return(
      <>
        <Header />
        
        <SelectedBeast 
          modalVisible={this.state.modalVisible}
          beast={this.state.beast}
          closeModalProp={this.closeModalApp} />
        <Main 
          showModalPropApp={this.showModalApp}
          data={data}
          
        />
        <Footer />
      </>
    )
  }
}

export default App;
