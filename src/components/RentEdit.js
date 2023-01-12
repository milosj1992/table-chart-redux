import RentForm from "./RentForm";

import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../redux/actions";


import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {updateExistItem} from "../redux/actions";


const RentEdit = () => {
    const dispatch = useDispatch();
    const rent = useSelector(state => state.rents.items);

    const {id} = useParams();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        dispatch(updateExistItem(id, values))
            .then(()=>navigate("/"))
            .catch((error) => {
                console.error(`Error while editing item with id ${id}: ${error}`)
            })
    }

    useEffect(() => {
        dispatch(fetchItems(id))
    }, [dispatch,id])

    return (
        <div>
            <RentForm initialValues={rent[id]} onSubmit={onSubmit}/>
        </div>
    )
}

export default RentEdit;
