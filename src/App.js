import './App.css';
// import Routes from './Routes';
// import { BrowserRouter } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import Widgets from './widgets/Widgets';

function App() {
    return (
        <div className="app">
            {/* <BrowserRouter>
                <Routes />
            </BrowserRouter> */}

            <Sidebar />

            <Feed />

            <Widgets />
        </div>
    );
}

export default App;
