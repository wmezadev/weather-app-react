import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [search, setSearch] = useState({
      city: '',
      country: ''
  });

  const [ consult, setConsult ] = useState(true);

  const { city, country } = search;
  
  useEffect(() => {
    const fetchAPI = async () => {
      //const api = fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}`);
    }
    fetchAPI();
  }, [consult]);

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
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
