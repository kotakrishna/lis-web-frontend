import { createMemoryHistory } from 'history';
import { CustomRouter, Header } from '@lis-web-frontend/header';
import { Route, Routes } from 'react-router-dom';
import { PatientModule } from '@lis-web-frontend/patient-module';
const history = createMemoryHistory({
  initialEntries: process.env.NODE_ENV === 'development' ? ['/'] : ['/'],
});

const Component = () => {
  return <div>
      <h1>LIS Lite Implementation</h1>
      <button onClick={()=>history.push('/patient')}>Patient Page</button>
  </div>;
}


export function App() {
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
