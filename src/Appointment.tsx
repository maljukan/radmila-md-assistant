import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import {Appointment as AppointmentModel} from './model/Appointment';

interface OwnProps {}

type Props = OwnProps;

class Appointment extends PureComponent<Props, {showModal: boolean, appointments: AppointmentModel[]}> {

  constructor(props: Readonly<OwnProps>) {
    super(props);
    this.state = {
      showModal: false,
      appointments: [
        {
          firstName: 'John',
          lastName: 'Doe',
          date: new Date(),
          time: new Date(),
          doctor: 'Florian Acula',
          cause: 'Rash'
        }
      ]
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }

  handleCloseModal() {
    this.setState({showModal: false});
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container mx-auto">
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="flex justify-between items-center mx-4 mt-4 border-green-900 border-b-2">
            <h2 className="text-green-900 text-2xl font-bold">Add appointment</h2>
            <button onClick={this.handleCloseModal}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className="fill-current text-green-800 hover:text-green-600">
                <path className="heroicon-ui"
                      d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
              </svg>
            </button>
          </div>
          <div className="container p-4">
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">First Name</label>
              <input
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="appointment-first-name" type="text" placeholder="First name"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Last Name</label>
              <input
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="appointment-last-name" type="text" placeholder="Last name"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Date</label>
              <input
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="appointment-date" type="text" placeholder="Date"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Time</label>
              <input
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="appointment-time" type="text" placeholder="Time"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Doctor</label>
              <input
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="appointment-doctor" type="text" placeholder="Doctor"/>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="inline text-green-800 pr-4">Reason</label>
              <input
                className="bg-gray-800 inline appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500 w-64"
                id="appointment-cause" type="text" placeholder="Reason"/>
            </div>
            <div className="flex justify-end items-center">
              <button onClick={this.handleOpenModal}
                      className="bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded w-64 mr-4">
                Save
              </button>
            </div>
          </div>
        </ReactModal>
        <h2 className="text-green-900 text-2xl mb-12 font-bold border-green-900 border-b-2">Appointments</h2>
        <div className="flex w-full justify-end items-center mb-4">
          <input
            className="bg-gray-600 appearance-none border-2 border-gray-700 rounded py-2 px-4 mr-4 placeholder-gray-400 leading-tight focus:outline-none focus:bg-gray-500 focus:border-green-500"
            id="patients-search" type="text" placeholder="Search"/>
          <button onClick={this.handleOpenModal}
            className="bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded w-56">
            New appointment
          </button>
        </div>
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row bg-gray-800 text-gray-600">
              <div className="table-cell p-4 text-sm">First name</div>
              <div className="table-cell p-4 text-sm">Last name</div>
              <div className="table-cell p-4 text-sm">Date</div>
              <div className="table-cell p-4 text-sm">Time</div>
              <div className="table-cell p-4 text-sm">Doctor</div>
              <div className="table-cell p-4 text-sm">Cause</div>
            </div>
          </div>
          <div className="table-row-group">
            {
              this.state.appointments.map((appointment, index) => {
                return (
                  <div className="table-row bg-gray-700 text-gray-200 hover:text-green-600" key={index}>
                    <div className="table-cell p-4 text-sm">{appointment.firstName}</div>
                    <div className="table-cell p-4 text-sm">{appointment.lastName}</div>
                    <div className="table-cell p-4 text-sm">{appointment.date.toDateString()}</div>
                    <div className="table-cell p-4 text-sm">{appointment.time.toLocaleTimeString()}</div>
                    <div className="table-cell p-4 text-sm">{appointment.doctor}</div>
                    <div className="table-cell p-4 text-sm">{appointment.cause}</div>
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

export default Appointment;
