import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {

  const [search, setSearch] = useState({
      city: '',
      country: ''
  });

  const [ consult, setConsult ] = useState(false);
  const [ result, setResult ] = useState({});
  const [ error, setError ] = useState(false);

  const { city, country } = search;
  
  useEffect(() => {
    const fetchAPI = async () => {
      if(consult){        
        const appId = '6f70beba367c18b644cc2a0854d891df';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
        const res = await fetch(url);
        const json = await res.json();
        setResult(json);
        setConsult(false);
        if(result.cod === "404"){
          setError(true);
        } else {
          setError(false);
        }
      }
    }
    
    fetchAPI();
  }, [consult, city, country, result.cod]);


  let component;

  if(error) {
    component = <Error message="There is not results"/>
  } else {
    component = <Weather result={result} />
  }


  return (
    <Fragment>
      <Header 
        title="Weather React"
      />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
