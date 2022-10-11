import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRents} from "../../redux/actions";
import {Link} from "react-router-dom";
import RentBar from "./RentBar";

const initialRent = {
    id: "id",
    year: "year",
    effectiveRent: "effective rent",
    startingRent: "starting rent"
};

const RentList = () => {
    const dispatch = useDispatch();
    const rent = useSelector((state) => Object.values(state.rents));

    const initialAndRent = [initialRent, ...rent];

    useEffect(() => {
        dispatch(fetchRents());
    }, [dispatch])

    return (
        <div>
            <div className="rent-list">

                {initialAndRent.map(rentInMap => {
                    return (
                        <div className="ui horizontal list" key={rentInMap.id}>

                            {Object.values(rentInMap).map((element, i) => {
                                return (
                                    <div className="item" key={i + "unique" + rentInMap.id}>
                                        <div className="content">{element}</div>
                                    </div>
                                )
                            })}

                            {typeof rentInMap.year === 'string' ? null :
                                (
                                    <div className="right floated content">
                                        <Link to={`/rents/edit/${rentInMap.id}`}>
                                            <button className="ui button primary">Edit</button>
                                        </Link>
                                        <Link to={`/rents/delete/${rentInMap.id}`}>
                                            <button className="ui button negative">Delete</button>
                                        </Link>
                                    </div>
                                )}

                        </div>
                    )
                })}
                <Link to={`/rents/new`}>
                    <div className="ui right floated small primary labeled icon button">
                        <i className="plus icon"/> Add Rent
                    </div>
                </Link>
            </div>

            <RentBar/>
        </div>
    )

}


export default RentList;