import PatientModule from './patientModule/index';
import { useSelector } from 'react-redux';
// import CustomRouter from '@libs/shared/src/customRouter';
import { createMemoryHistory } from 'history';
import { CustomRouter, Header } from '@lis-web-frontend/header';
import { Route, Routes } from 'react-router-dom';

const history = createMemoryHistory({
    initialEntries: process.env.NODE_ENV === 'development' ? ['/'] : ['/'],
});

const Component = () => {
    return <div>
        <h1>Lis Web FrontEnd Implementation</h1>
        <button onClick={()=>history.push('/patient')}>Patient Page</button>
    </div>;
}

export function App() {
    const theme = useSelector((state: any) => state.theme);
    console.log(theme);
    return (
        <CustomRouter history={history}>
            <Header>
                <Routes>
                    <Route path="/*" element={<Component />} />
                    <Route path="/patient" element={<PatientModule />} />
                </Routes>
            </Header>
        </CustomRouter>
    );
}

export default App;
