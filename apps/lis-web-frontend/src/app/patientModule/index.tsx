import { withReducer } from '@lis-web-frontend/header';
import { PatientModule } from '@lis-web-frontend/patient-module';
import configureStore from '../../store';
import { produce } from 'immer';

const store = configureStore();

// Patient Module Slice with produce from immer.js
const patientModuleSlice = (
    state = {
        chartId: '',
        firstName: '',
        lastName: '',
        middleName: '',
        dateOfBirth: '',
        gender: '',
        address1: '',
        address2: '',
        zip: '',
        city: '',
        state: '',
        country: '',
        co: '',
        phone: '',
        race: '',
        roomNo: '',
        patientClient: '',
        email: '',
        fullPassportName: '',
        passportNum: '',
        passportCountry: '',
    },
    action: any
) =>
    produce(state, (draft) => {
        switch (action.type) {
            case 'CHANGE_FIRST_NAME':
                draft.firstName = action.payload;
                break;
            default:
                break;
        }
    });

export default withReducer(
    'patientModule',
    patientModuleSlice,
    store
)(PatientModule as any);
