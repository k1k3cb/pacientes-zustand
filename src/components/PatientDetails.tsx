import { Patient } from '../types';

interface PatientDetailsProps {
  patient: Patient;
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  return <div>{patient.name}</div>;
};

export default PatientDetails;
