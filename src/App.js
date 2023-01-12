import {BrowserRouter, Route, Routes} from "react-router-dom";
import RentList from "./components/RentList";
import RentDelete from "./components/RentDelete";
import RentEdit from "./components/RentEdit";
import RentCreate from "./components/RentCreate";


const App = () => {
    return (
        <BrowserRouter>
            <div className="ui container">
                <Routes>
                    <Route path="/" exact element={<RentList/>}/>
                    <Route path="/rents/new" exact element={<RentCreate/>}/>
                    <Route path="/rents/edit/:id" exact element={<RentEdit/>}/>
                    <Route path="/rents/delete/:id" exact element={<RentDelete/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;
