import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchItems} from '../redux/actions';
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
    const rent = useSelector(state => state.rents.items);
    const isLoading = useSelector(state => state.rents.isLoading);
    const hasError = useSelector(state => state.rents.hasError);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (hasError) {
        return <p>An error occurred. Please try again.</p>;
    }

    return (
        <div>
            <div className="rent-list">
                {rent.data ?
                    <div>
                        {[initialRent, ...rent.data].map(rentInMap => {
                            return (
                                <div className="ui horizontal list" key={rentInMap.id}>

                                    <div className="item">
                                        <div className={"content"}>{rentInMap.id}</div>
                                    </div>
                                    <div className="item">
                                        <div className={"content"}>{rentInMap.year}</div>
                                    </div>
                                    <div className="item">
                                        <div className={"content"}>{rentInMap.effectiveRent}</div>
                                    </div>
                                    <div className="item">
                                        <div className={"content"}>{rentInMap.startingRent}</div>
                                    </div>
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

                    </div>
                    : <div>No data</div>
                }
            </div>
            <Link to={`/rents/new`}>
                <div className="ui right floated small primary labeled icon button">
                    <i className="plus icon"/> Add Rent
                </div>
            </Link>
            <RentBar/>
        </div>
    );
};

export default RentList;
