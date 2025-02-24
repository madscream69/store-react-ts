import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import MainAbout from './components/MainAbout';

function App() {
    return (
        <div className="wrapper">
            <Header></Header>
            <MainAbout></MainAbout>
            <Footer></Footer>
        </div>
    );
}

export default App;
