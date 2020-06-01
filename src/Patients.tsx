import React, { PureComponent } from 'react';

interface OwnProps {
}

type Props = OwnProps;

class Patients extends PureComponent<Props> {
  render() {
    return (
      <div className="container mx-auto">
        <h2 className="text-green-900 text-2xl mb-12 font-bold border-green-900 border-b-2">Patients</h2>
        <div className="flex w-full justify-end items-center mb-4">
          <input
            className="bg-gray-600 appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-400 leading-tight focus:outline-none focus:bg-gray-500 focus:border-green-500"
            id="patients-search" type="text" placeholder="Search"/>
          <button
            className="bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded">
            New patient
          </button>
        </div>
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row bg-gray-800 text-gray-600">
              <div className="table-cell p-4 text-sm">First name</div>
              <div className="table-cell p-4 text-sm">Last name</div>
              <div className="table-cell p-4 text-sm">Date of birth</div>
              <div className="table-cell p-4 text-sm">Email</div>
              <div className="table-cell p-4 text-sm">Town</div>
              <div className="table-cell p-4 text-sm">Street address</div>
              <div className="table-cell p-4 text-sm">Phone</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row bg-gray-700 text-gray-500">
              <div className="table-cell p-4 text-sm">John</div>
              <div className="table-cell p-4 text-sm">Doe</div>
              <div className="table-cell p-4 text-sm">06.08.1981</div>
              <div className="table-cell p-4 text-sm">jdoe@live.com</div>
              <div className="table-cell p-4 text-sm">New York</div>
              <div className="table-cell p-4 text-sm">Boulevard of broken dreams 20/2</div>
              <div className="table-cell p-4 text-sm">555-555-55</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patients;
