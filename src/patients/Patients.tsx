import React, { Component } from 'react';
import { Patient } from '../model/Patient';
import Modal from 'react-modal';
import PatientForm from './PatientForm';
import DialogService from '../shared/dialog/DialogService';
import PatientsService from "../services/PatientsService";
import { Link } from 'react-router-dom';

interface Props {
}

interface State {
  isPatientFormOpen: boolean;
  patients: Patient[];
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
    PatientsService.getAll()
      .then((patients) => {
        console.log(patients);
        this.setState({ patients });
      })
      .catch((error) => {
        this.setState({ patients: [] });
        throw error;
      });
  }

  handleOpenModal() {
    this.setState({ isPatientFormOpen: true });
  }

  handleCloseModal() {
    this.setState({ isPatientFormOpen: false });
  }

  addPatient = (patient: Patient) => {
    PatientsService.add(patient).then((patients) => {
      this.setState({
        patients: patients
      });
    });
    console.log(patient);
  };

  removePatient = async (id?: string) => {
    if (!id) {
      throw new Error('Bad state: Nothing to remove');
    }
    const result = await DialogService.show({ title: 'Confirmation', message: 'Are you sure?' });
    if (result) {
      try {
        const patients = await PatientsService.remove(id);
        this.setState({ patients: patients });
      } catch (err) {
        this.setState({ patients: [] });
      }
    }
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
            id="patients-search" type="text" placeholder="Search" />
          <button onClick={() => this.handleOpenModal()}
            className="inline-flex items-center justify-around bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded w-56">
            <svg viewBox="0 0 20 20" fill="currentColor" className="user-add w-6 h-6">
              <path
                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
            </svg>
            <span>New patient</span>
          </button>
        </div>
        <div className="table w-full border-collapse border border-gray-700">
          <div className="table-header-group">
            <div className="table-row  bg-gray-800 text-gray-600">
              <div className="table-cell px-4 py-2 text-sm">#</div>
              <div className="table-cell px-4 py-2 text-sm">First name</div>
              <div className="table-cell px-4 py-2">Last name</div>
              <div className="table-cell px-4 py-2">Email</div>
              <div className="table-cell px-4 py-2">Date of birth</div>
              <div className="table-cell px-4 py-2">Town</div>
              <div className="table-cell px-4 py-2">Street address</div>
              <div className="table-cell px-4 py-2">Phone</div>
              <div className="table-cell px-4 py-2"></div>
            </div>
          </div>
          <div className="table-row-group">
            {
              this.state.patients.map((patient, index) => {
                return (
                  <div className="table-row bg-gray-900 text-gray-400 hover:text-gray-200 border border-gray-700" key={index}>
                    <div className="table-cell px-4 py-2 text-sm align-middle">{index}</div>
                    <div className="table-cell px-4 py-2 text-sm align-middle">{patient.firstName}</div>
                    <div className="table-cell px-4 py-2 text-sm align-middle">{patient.lastName}</div>
                    <div className="table-cell px-4 py-2 text-sm align-middle">{patient.email}</div>
                    <div className="table-cell px-4 py-2 text-sm align-middle">{patient.dateOfBirth?.toDate().toLocaleDateString()}</div>
                    <div className="table-cell px-4 py-2 text-sm align-middle">{patient.city}</div>
                    <div className="table-cell px-4 py-2 text-sm align-middle">{patient.address}</div>
                    <div className="table-cell px-4 py-2 text-sm align-middle">{patient.phone || ''}</div>
                    <div className="table-cell px-4 py-2 text-sm align-middle">
                      <Link to={{ pathname: `/patients/${patient.id}`}}>
                        <button className="bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-2 border border-green-600 rounded">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="chevron-double-right w-6 h-6">
                            <path fillRule="evenodd"
                              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                              clipRule="evenodd"></path>
                            <path fillRule="evenodd"
                              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                              clipRule="evenodd"></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
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
