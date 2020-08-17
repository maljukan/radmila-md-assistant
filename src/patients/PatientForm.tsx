import React, { Component, FormEvent } from 'react';
import ReactModal from 'react-modal';
import { Patient } from '../model/Patient';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { dateToFirestoreTimestamp } from '../firebase/firebase.util';

interface Props {
  isOpen?: boolean,
  patient?: Patient
  onSubmit: (patient: Patient) => void,
  onClose: Function
}

interface State {
  patient: Patient;
}

class PatientForm extends Component<Props, State, { isOpen: false }> {

  constructor(props: Readonly<Props>) {
    super(props);
    const patient = props.patient || {
      firstName: '',
      lastName: '',
      dateOfBirth: dateToFirestoreTimestamp(new Date()),
      city: '',
      address: '',
      email: '',
      phone: ''
    };
    this.state = {patient: patient};
  };

  handleCloseModal() {
    this.props.onClose();
  }

  handleFirstNameChange = (event: any) => {
    this.setState({patient: {...this.state.patient, firstName: event.target.value}});
  }

  handleLastNameChange = (event: any) => {
    this.setState({patient: {...this.state.patient, lastName: event.target.value}});
  }

  handleCityChange = (event: any) => {
    this.setState({patient: {...this.state.patient, city: event.target.value}});
  }

  handleAddressChange = (event: any) => {
    this.setState({patient: {...this.state.patient, address: event.target.value}});
  }

  handlePhoneChange = (event: any) => {
    this.setState({patient: {...this.state.patient, phone: event.target.value}});
  }

  handleEmailChange = (event: any) => {
    this.setState({patient: {...this.state.patient, email: event.target.value}});
  }

  handleDateChange = (date: Date) => {
    this.setState({patient: {dateOfBirth: dateToFirestoreTimestamp(date)}});
  };

  submit(event: FormEvent) {
    event.preventDefault();
    this.props.onSubmit(this.state.patient);
    console.log(this.state.patient);
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen!}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex justify-between items-center mx-4 mt-4 border-green-900 border-b-2">
          <h2 className="text-green-900 text-2xl font-bold">Add patient</h2>
          <button onClick={() => this.handleCloseModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                 className="fill-current text-green-800 hover:text-green-600">
              <path className="heroicon-ui"
                    d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
            </svg>
          </button>
        </div>
        <div className="container p-4">
          <form onSubmit={(event) => this.submit(event)}>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">First Name</label>
              <input
                value={this.state.patient.firstName}
                onChange={this.handleFirstNameChange}
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="patient-first-name" type="text" placeholder="First name" name="firstName"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Last Name</label>
              <input
                value={this.state.patient.lastName}
                onChange={this.handleLastNameChange}
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="patient-last-name" type="text" placeholder="Last name"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Date of birth</label>
              <DatePicker onChange={this.handleDateChange}
                          selected={this.state.patient.dateOfBirth && this.state.patient.dateOfBirth.toDate()}
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          wrapperClassName="inline w-64"
                          className="bg-gray-800 appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500">
              </DatePicker>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">City</label>
              <input
                value={this.state.patient.city}
                onChange={this.handleCityChange}
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="patient-city" type="text" placeholder="City"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Address</label>
              <input
                value={this.state.patient.address}
                onChange={this.handleAddressChange}
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="patient-address" type="text" placeholder="Address"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Phone</label>
              <input
                value={this.state.patient.phone}
                onChange={this.handlePhoneChange}
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="patient-phone" type="text" placeholder="Phone"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Email</label>
              <input
                value={this.state.patient.email}
                onChange={this.handleEmailChange}
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="patient-email" type="text" placeholder="Email"/>
            </div>
            <div className="flex justify-end items-center">
              <input type="submit" value="Save"
                     className="bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded w-64 mr-4"/>
            </div>
          </form>
        </div>
      </ReactModal>
    );
  }
}

export default PatientForm;
