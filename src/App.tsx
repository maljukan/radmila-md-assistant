import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Patients from './Patients';
import Appointment from './Appointment';

function App() {
  return (
    <div className="flex h-screen p-4">
      <div className="w-64 h-full p-4 shadow-lg flex flex-col justify-between">
        <header>
          <h1 className="text-center font-bold text-green-700 text-2xl">Radmila</h1>
          <p className="text-center mx-auto font-bold text-green-700">MD assistant</p>
          <svg width="108px" height="128px" viewBox="0 0 54 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink" className="mx-auto fill-current text-green-700">
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" type="MSPage">
              <path className="beat-loader"
                    d="M0.5,38.5 L16,38.5 L19,25.5 L24.5,57.5 L31.5,7.5 L37.5,46.5 L43,38.5 L53.5,38.5" id="Path-2"
                    strokeWidth="2" type="MSShapeGroup">
              </path>
            </g>
          </svg>
        </header>

        <ul className="nav navbar-nav">
          <li className="mb-3">
            <NavLink exact={true} className="block text-center text-green-500 py-2 border border-white rounded hover:border-gray-200 hover:bg-gray-200"
                     activeClassName='text-green-600 font-bold' to='/'>Appointments</NavLink>
          </li>
          <li className="mb-3">
            <NavLink className="block text-center text-green-500 py-2 border border-white rounded hover:border-gray-200 hover:bg-gray-200"
                     activeClassName='text-green-600 font-bold' to='/patients'>Patients</NavLink>
          </li>
        </ul>

        <footer>
          <h3 className="text-center text-gray-400">Dr Florian Acula MD</h3>
        </footer>
      </div>
      <div className="w-full h-full">
        <div className="w-full h-full rounded overflow-hidden shadow-lg p-4">
          <Route exact path="/" component={Appointment} ex/>
          <Route path="/patients" component={Patients}/>
        </div>
      </div>
    </div>
  );
}

export default App;
