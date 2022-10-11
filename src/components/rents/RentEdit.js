import RentForm from "./RentForm";

import {useDispatch, useSelector} from "react-redux";
import {fetchRent} from "../../redux/actions";
import {editRent} from "../../redux/actions";

import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";


const RentEdit = () => {
    const dispatch = useDispatch();
    const rent = useSelector((state) => state.rents);

    const {id} = useParams();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        dispatch(editRent(id, values))
            .then(navigate("/"));
    }

    useEffect(() => {
        dispatch(fetchRent(id))
    }, [dispatch,id])

    return (
        <div>
            <RentForm initialValues={rent[id]} onSubmit={onSubmit}/>
        </div>
    )
}

export default RentEdit;