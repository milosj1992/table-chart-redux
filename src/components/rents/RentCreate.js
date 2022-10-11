import RentForm from "./RentForm";

import {useDispatch} from "react-redux";
import {createRent} from "../../redux/actions";
import {useNavigate} from "react-router-dom";

const RentCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        dispatch(createRent(values))
            .then(navigate("/"));
    }

    return (
        <div>
            <RentForm onSubmit={onSubmit}/>
        </div>
    )
}
export default RentCreate;