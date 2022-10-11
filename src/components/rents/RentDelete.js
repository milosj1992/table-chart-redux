import {deleteRent} from "../../redux/actions";
import {useDispatch} from "react-redux";

import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const RentDelete = () => {
    const dispatch = useDispatch();

    const {id} = useParams();
    const navigate = useNavigate();

    const doDelete = (value) => {
        dispatch(deleteRent(value))
            .then(navigate("/"));
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