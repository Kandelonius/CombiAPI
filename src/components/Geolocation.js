// Geolocation calls the geolocation api to get user info
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLocale } from "../store/actions";

const Geolocation = props => {
    useEffect(() => {
        props.fetchLocale();
    }, []);
    return (
        <main>
            <h1>Locale</h1>
            {props.isFetching && <h3>Fetching data...</h3>}
            {props.error && <div className='failure'>
                <h1>{props.error}</h1>
            </div>}
        </main>
    )
}
const mapStateToProps = state => {
    console.log('BRE', state);
    return {
        isFetching: state.locale.isFetching,
        smurf: state.locale.smurf,
        add: state.locale.add,
        error: state.locale.error
    };
};

export default connect(
    mapStateToProps,
    { fetchLocale }
)(Geolocation);