import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return ( 
    <div className= "App">
        <header className= "App-header">
            <img src= {logo} className= "App-logo" alt= "logo"/>
            <div>Hello, Elibabah!</div>
            <a className= "App-link" href = "https://reactjs.org" target= "_blank" rel= "noopener noreferrer">
            Hello World!</a> 
            <Button variant="danger">Hola, amigos!</Button>
        </header> 
        <Footer/>
    </div>
    );
}

export default App;