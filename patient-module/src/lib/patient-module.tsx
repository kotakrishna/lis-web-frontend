import { useNavigate } from 'react-router-dom';
import './patient-module.scss';

/* eslint-disable-next-line */
export interface PatientModuleProps {}

export function PatientModule(props: PatientModuleProps) {
  const navigate = useNavigate();
  return (
    <div >
      <h1>Patient Details</h1>
      {/* Create a Patient Form with First Name, Last Name, Date of Birth, Gender, Insurance ID, Address1, Address2, Zip, City, State, Country, C/O, Phone, Race, RoomNo, Patient Client, Email, Full Passport Name, Passport Num, Passport Country */}
      <form action="">
        <div className="container">
          <div>
            ID: <input type="text" name="ID" />
          </div>
          <div>
            Chart ID: <input type="text" name="ChartId" />
          </div>
          <div>
            First Name: <input type="text" name="firstName" />
          </div>
          <div>
            Last Name: <input type="text" name="lastName" />
          </div>
          <div>
            Middle Name: <input type="text" name="middleName" />
          </div>
          <div>
            Date of Birth: <input type="date" name="dob" />
          </div>
          <div>
            Gender:
            <select name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          </div>
          <div className='container'>
          <div>
            Address 1: <input type="text" name="address1" />
          </div>
          <div>
            Address 2: <input type="text" name="address2" />
          </div>
          <div>
            Zip: <input type="text" name="zip" />
          </div>
          <div>
            City: <input type="text" name="city" />
          </div>
          <div>
            State: <input type="text" name="state" />
          </div>
          <div>
            Country: <input type="text" name="country" />
          </div>
          <div>
            C/O: <input type="text" name="co" />
          </div>
          <div>
            Phone: <input type="text" name="phone" />
          </div>
          <div>
            Race: <input type="text" name="race" />
          </div>
          <div>
            Room No: <input type="text" name="roomNo" />
          </div>
          <div>
            Patient Client: <input type="text" name="patientClient" />
          </div>
          <div>
            Email: <input type="text" name="email" />
          </div>
          <div>
            Full Passport Name: <input type="text" name="passportName" />
          </div>
          <div>
            Passport Num: <input type="text" name="passportNum" />
          </div>
          <div>
            Passport Country: <input type="text" name="passportCountry" />
          </div>
        </div>
      </form>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default PatientModule;
