import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from'./components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/page/Main/Main';
import Introduce from './components/page/Introduce/Introduce';
import Use from './components/page/Use/Use';
import Course from './components/page/Course/Course';
import Reservation from './components/page/Reservation/Reservation';
import Facility from './components/page/Facility/Facility';
// import Login from './components/page/Login/Login';
// import Membership from './components/page/Membership/Membership';
// import Event from './components/page/Event/Event';
// import Information from './components/page/Information/Information';
// import Road from './components/page/Road/Road';


import { useState, useEffect } from 'react';
function App() {
  const [isHeaderPix, setHeaderPix] = useState(false);
  function HeaderPix() {
    useEffect(() => {
      setHeaderPix(true);
      return () => {
        setHeaderPix(false);
      };
    }, []);
    return isHeaderPix;
  }
  const [isFooterPix, setFooterPix] = useState(false);
  function FooterPix() {
    useEffect(() => {
      setFooterPix(true);
      return () => {
        setFooterPix(false);
      };
    }, []);
    return isFooterPix;
  }
  return (
    <div className="App">
      <Header HeaderPixd={isHeaderPix}/>
        <Routes>
          <Route path='/*' element={<Main />}/>
          <Route path='/Introduce/*' element={<Introduce  FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/>
          <Route path='/Use/*' element={<Use FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/>
          <Route path='/Course/*' element={<Course FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/>
          <Route path='/Reservation/*' element={<Reservation FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/>
          <Route path='/Facility/*' element={<Facility FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/>
          {/* <Route path='/Login/*' element={<Login FooterPixd={FooterPix} Headerpixd={HeaderPix} />}/>
          <Route path='/Membership/*' element={<Membership FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/>
          <Route path='/Event/*' element={<Event FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/>
          <Route path='/Information/*' element={<Information FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/> */}
          {/* <Route path='/Road/*' element={<Information FooterPixd={FooterPix} Headerpixd={HeaderPix}/>}/>  */}
        </Routes> 
      <Footer FooterPixd={isFooterPix}/>
    </div>
  );
}

export default App;
