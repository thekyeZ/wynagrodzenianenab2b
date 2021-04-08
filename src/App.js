// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [config, setConfig] = useState({
    netto: 0,
    daily: 0,
    hourly: 0,
    vat: 23,
    taxOption: 17,
    holiday: false,
  });

  React.useEffect(() => {
    console.log('config set', config);
  }, [config]);

  function handleConfigChange(e) {
    let value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setConfig({
      ...config,
      [e.target.id]: Number(value) === NaN ? 0 : Number(value),
    });
  }

  return (
    <div className="App">
      <div className="summary">
        <span>Na czysto:</span>
        <p>13 000PLN</p>

        <a>Szczegóły</a>

        <div className="summary-details d-none"></div>
      </div>

      <div className="data">
        <div className="incomings">
          <header>Twoje przychody</header>
          <div className="form-group">
            <label htmlFor="">
              Przychód netto:
              <input id="netto" type="number" onChange={handleConfigChange} />
            </label>

            <label htmlFor="">
              Stawka dzienna:
              <input id="daily" type="number" onChange={handleConfigChange} />
            </label>

            <label htmlFor="">
              Stawka godzinowa:
              <input id="hourly" type="number" onChange={handleConfigChange} />
            </label>

            <label htmlFor="">
              Urlop:
              <input
                id="holiday"
                type="checkbox"
                onChange={handleConfigChange}
              />
            </label>
          </div>
        </div>

        <div className="zus-info">
          <header>Informacje o ZUS:</header>


        </div>
      </div>
    </div>
  );
}

export default App;
