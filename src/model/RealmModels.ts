export const PatientSchema = {
  name: 'Patient',
  properties: {
    firstName: 'string',
    lastName: 'string',
    dateOfBirth: 'date',
    email: 'string',
    phone: 'string',
    city: 'string',
    address: 'string'
  }
};

export const AppointmentSchema = {
  name: 'Appointment',
  properties: {
    firstName: 'string',
    lastName: 'string',
    date: 'date',
    time: 'date',
    doctor: 'string',
    cause: 'string'
  }
};
