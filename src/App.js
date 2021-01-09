import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
//Akshay Sinha 6-1-2021
function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* {by default any variable in a javascript if not assigned is of boolean type
    and can be used directly for ex:- "isLargeRow" below
    but we can also assign it true value for a better readability} */}
      <Row
        title="NETFLIX ORIGINALS(Clone By Akshay Sinha)"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

//api key for tmdb : b0eae052e64cc0edcb369ff7dec2292c
