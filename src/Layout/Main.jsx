
import { Outlet } from 'react-router-dom';
import NaveBar from '../Shared/NavBar/NaveBar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;