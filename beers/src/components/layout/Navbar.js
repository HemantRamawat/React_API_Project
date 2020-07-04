import React , { Component } from 'react';


class App extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems,{});
          });
        
    }

  render() {
    return (
      <div>
         <div className="navbar-fixed">
         <nav>
    <div className="nav-wrapper #000000 black">
      <a href="#!" className="brand-logo" >BeerS</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <div className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        </div>
      </ul>
    </div>
    
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Home</a></li>
    <li><a href="badges.html">Shop</a></li>
    <li><a href="collapsible.html">Menu</a></li>
    <li><a href="mobile.html">About</a></li>
  </ul>

  
  </div>
      </div>
      
      
    );
  }
}

export default App;
