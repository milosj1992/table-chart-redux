import RentForm from "./RentForm";

import {useDispatch} from "react-redux";

import {addNewItem } from "../redux/actions"
import {useNavigate} from "react-router-dom";

const RentCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        dispatch(addNewItem(values))
            .then(()=>navigate("/"))
            .catch((error) => {
                console.error(`Error while adding item with id ${values}: ${error}`)
            })
    }

    return (
        <div>
            <RentForm onSubmit={onSubmit}/>
        </div>
    )
}
export default RentCreate;
