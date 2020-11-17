import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBrewery } from "../store/actions/BreweryActions";
import './Brewery.css';

const Brewery = props => {
  useEffect(() => {
    props.fetchBrewery();
  }, [])
  return (
    <main>
      <h1>Brewery</h1>
      {props.isFetching && <h3>Fetching data...</h3>}
      {props.brewery && <div className='success'>
         <a href={props.brewery.website_url} target="_blank">{props.brewery.name}</a>
        <h3>{props.brewery.city}</h3>
        <h3>{props.brewery.state}</h3>
       
      </div>}
      {props.error && <div className='failure'>
        <h1>{props.error}</h1>
      </div>}
    </main>
  );
};

const mapStateToProps = state => {
  console.log('BRE', state.brew);
  return {
    isFetching: state.brew.isFetching,
    brewery: state.brew.brewery,
    location: state.brew.location,
    error: state.brew.error
  };
};

export default connect(
  mapStateToProps,
  { fetchBrewery }
)(Brewery);