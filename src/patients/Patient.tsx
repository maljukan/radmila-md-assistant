import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Patient as PatientModel } from '../model/Patient';
import PatientsService from "../services/PatientsService";

interface Props extends RouteComponentProps<any> {
  location: any;
}

interface State {
  patient?: PatientModel;
}

class Patient extends Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      patient: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const patient = PatientsService.get(id);
    this.setState({ patient });
  }

  render() {
    return (
      <div className="container mx-auto">
        <h2 className="text-green-900 text-2xl mb-12 font-bold border-green-900 border-b-2">
          {this.state.patient?.firstName + ' ' + this.state.patient?.lastName}
        </h2>
        <div className="flex w-full justify-end items-center mb-4">
          {this.state.patient?.lastName + ' ' + this.state.patient?.lastName}
        </div>
      </div>
    );
  }
}

export default withRouter(Patient as any);
