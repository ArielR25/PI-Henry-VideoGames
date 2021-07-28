import './search.css';
import React from 'react';
import { connect } from 'react-redux';
import { gamesSearch } from '../../actions';

export function Search (props) {
    function searchFuncion(event) {
        event.preventDefault()
        let gameName = document.getElementById('searchText').value
        props.gamesSearch(gameName)
    }
    return (
        <div className='search'>
            <form className='searchForm'>
                <input type='text' id='searchText' className='searchText'/>
                <button className='Buton3' onClick={(e) => searchFuncion(e)}>Buscar</button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        filteredGames: state.filteredGames
    }
}

export default connect( mapStateToProps, { gamesSearch })(Search);