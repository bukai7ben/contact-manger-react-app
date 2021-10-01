import './App.css'
import AddContact from './components/AddContact';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardsList from './containers/CardsList';
import {useState} from "react";

function App() {
    const [searchValue,setSearchValue] = useState('');

    return (
        <div className="App">
            <Header/>
            <div className="container">
                <AddContact/>
                <div>
                    <SearchBar setSearchValue={setSearchValue}/>
                    <CardsList searchValue={searchValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
