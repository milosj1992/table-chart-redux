import {BrowserRouter, Route, Routes} from "react-router-dom";
import RentList from "./rents/RentList";
import RentCreate from "./rents/RentCreate";
import RentEdit from "./rents/RentEdit";
import RentDelete from "./rents/RentDelete";
import RentForm from "./rents/RentForm";


const App = () => {
    return (
        <BrowserRouter>
            <div className="ui container">
                <Routes>
                    <Route path="/" exact element={<RentList/>}/>
                    <Route path="/rents/new" exact element={<RentCreate/>}/>
                    <Route path="/rents/edit/:id" exact element={<RentEdit/>}/>
                    <Route path="/rents/delete/:id" exact element={<RentDelete/>}/>
                    <Route path="/rents/form" exact element={<RentForm/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;