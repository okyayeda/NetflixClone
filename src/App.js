import React from 'react';
import './App.css';
import requests from './requests';
import Row from './components/Row';
import Banner from "./components/Banner";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
       
       <Nav/>
       <Banner/>
       <Row 
       title="NETFLİX ORİGİNALS"
        fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow={true} 
        />
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title="Romantce Movies" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
