import React from 'react';
// import SimpleSlider from './carousel'
import monsoon3 from './monsoon3.jpg'
import move2 from './move2.jpg'
import beams from './beams.jpg'
// import carousel from './carousel.js'
import './App.css';

function App() {
  return (
    <div className="App">
      
    <div className="Panel1">
      <img src={monsoon3} className="Monsoon-logo" alt="monsoon"/>
     <div className="Words1">
       <h1>MONSOON III</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a diam. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quis commodo odio aenean sed adipiscing diam. Diam phasellus vestibulum lorem sed risus ultricies.
        </p>
      </div>

    </div>
<div className="Main-panel">
    <div className="Panel2">
      <img src={beams} className="Beams-logo" alt="Beams"/>
      <div className="Words2">
        <h1 style={{color: 'white'}}>BEAMS</h1>
        <p style={{color: 'white'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Imperdiet nulla malesuada pellentesque elit eget gravida. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Tempus quam pellentesque nec nam aliquam. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Vitae tortor condimentum lacinia quis vel eros donec ac. Adipiscing tristique risus nec feugiat in.
        </p>
      </div>
      

    </div>

    <div className="Panel3">
      <img src={move2} className="Move-logo" alt="move"/>
      <div className="Words3">
        <h1 style={{color: 'white'}}>MOVE 2</h1>
        <p style={{color: 'white'}} id="text2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Imperdiet nulla malesuada pellentesque elit eget gravida. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Tempus quam pellentesque nec nam aliquam. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Vitae tortor condimentum lacinia quis vel eros donec ac. Adipiscing tristique risus nec feugiat in.
        </p>
        
      </div>

</div>
    </div>
</div>
  );
}





export default App;
