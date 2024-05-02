import { usePatientStore } from '../store';
import PatientDetails from './PatientDetails';

const PatientList = () => {
  // const patients = usePatientStore((state) => state.patients)
  const { patients } = usePatientStore();

  console.log(patients);

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>
            Listado de Pacientes
          </h2>
          <p className='text-lg mt-5 mb-10 text-center'>
            {' '}
            Administra tus
            <span className='text-indigo-600 font-bold '>
              pacientes y citas
            </span>
          </p>
          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
          <p className='text-lg mt-5 mb-10 text-center'>
            Comienza agregando pacientes{' '}
            <span className='text-indigo-600 font-bold '>
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
