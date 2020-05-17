// Geolocation calls the geolocation api to get user info
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLocale } from "../store/actions/LocationActions";

const Geolocation = props => {
    useEffect(() => {
        props.fetchLocale();
    }, []);
    console.log("init ",props);
    return (
        <main>
            <h1>Locale</h1>
            {props.isFetching && <h3>Fetching data...</h3>}
            {props.locale && <div className='success'>
                {props.locale[0].flavor_name}
                <h3>{props.locale.image_uris.large}</h3>
                <h3>{props.locale.rarity}</h3>
            </div>}
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
        locale: state.locale.locale,
        add: state.locale.add,
        error: state.locale.error
    };
};

export default connect(
    mapStateToProps,
    { fetchLocale }
)(Geolocation);