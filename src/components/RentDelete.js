import {useDispatch} from "react-redux";

import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {removeItem} from "../redux/actions";


const RentDelete = () => {
    const dispatch = useDispatch();

    const {id} = useParams();
    const navigate = useNavigate();

    const doDelete = (value) => {
        dispatch(removeItem(value))
            .then(() => navigate("/"))
            .catch((error) => {
                console.error(`Error while deleting item with id ${value}: ${error}`)
            })
    }

    return (<div className="modal-background">
        <div className="modal-rent">
            <div className="modal-content">{`Are you sure you want to delete the stream with id: ${id}`}</div>
            <div className="modal-actions">
                <div className="">
                    <button className="ui button negative" onClick={() => doDelete(id)}>Delete</button>
                    <Link to={"/"}>
                        <button className="ui button">Cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>)
}
export default RentDelete;
