import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMTG } from "../store/actions/MTGActions";

const MTG = props => {
    console.log("init ",props);
    useEffect(() => {
        props.fetchMTG();
    }, []);
    return (
        <main>
            <h1>MTG</h1>
            {props.isFetching && <h3>Fetching data...</h3>}
            {props.MTG && <div className='success'>
                {props.MTG.data.flavor_name}
                <h3>{props.MTG.data.image_uris.large}</h3>
                <h3>{props.MTG.data.rarity}</h3>
            </div>}
            {props.error && <div className='failure'>
                <h1>{props.error}</h1>
            </div>}
        </main>
    )
}
const mapStateToProps = state => {
    console.log('BRE', state.MTG);
    return {
        isFetching: state.MTG.isFetching,
        MTG: state.MTG.MTG,
        add: state.MTG.add,
        error: state.MTG.error
    };
};

export default connect(
    mapStateToProps,
    { fetchMTG }
)(MTG);