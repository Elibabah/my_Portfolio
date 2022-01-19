import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';


function App() {
    return ( 
    <div className= "App">
        <header className= "App-header">
            <img src= {logo} className= "App-logo" alt= "logo"/>
            <div>Hello, Elibabah!</div>
            <a className= "App-link" href = "https://reactjs.org" target= "_blank" rel= "noopener noreferrer">
            Hello World!</a> 
        </header> 
        <Footer/>
    </div>
    );
}

export default App;