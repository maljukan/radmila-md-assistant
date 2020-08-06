import React, { Component, FormEvent } from 'react';
import { Patient } from '../model/Patient';
import Modal from 'react-modal';
import PatientForm from './PatientForm';
import * as path from 'path';

interface Props {
}

interface State {
  isPatientFormOpen: boolean,
  patients: Patient[]
}

Modal.setAppElement('#root');

class Patients extends Component<Props, State> {

  constructor(props: Readonly<Props>) {

    super(props);
    this.state = {
      isPatientFormOpen: false,
      patients: []
    };
  }

  componentDidMount() {
  }

  handleOpenModal() {
    this.setState({isPatientFormOpen: true});
  }

  handleCloseModal() {
    this.setState({isPatientFormOpen: false});
  }

  addPatient = (patient: Patient) => {
    console.log(patient);
  };

  render() {
    return (
      <div className="container mx-auto">
        <PatientForm onSubmit={this.addPatient} isOpen={this.state.isPatientFormOpen}
                     onClose={() => this.handleCloseModal()}>
        </PatientForm>
        <h2 className="text-green-900 text-2xl mb-12 font-bold border-green-900 border-b-2">Patients</h2>
        <div className="flex w-full justify-end items-center mb-4">
          <input
            className="bg-gray-600 appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-400 leading-tight focus:outline-none focus:bg-gray-500 focus:border-green-500"
            id="patients-search" type="text" placeholder="Search"/>
          <button onClick={() => this.handleOpenModal()}
                  className="bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded w-56">
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
            {
              this.state.patients.map((patient, index) => {
                return (
                  <div className="table-row bg-gray-700 text-gray-500" key={index}>
                    <div className="table-cell p-4 text-sm">{patient.firstName}</div>
                    <div className="table-cell p-4 text-sm">{patient.lastName}</div>
                    <div className="table-cell p-4 text-sm">{patient.email}</div>
                    <div className="table-cell p-4 text-sm">{patient.dateOfBirth?.toDateString()}</div>
                    <div className="table-cell p-4 text-sm">{patient.city}</div>
                    <div className="table-cell p-4 text-sm">{patient.address}</div>
                    <div className="table-cell p-4 text-sm">{patient.phone}</div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Patients;
