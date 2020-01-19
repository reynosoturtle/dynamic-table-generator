import React from 'react'
import Dropdown from './utility/Dropdown'

const Sorter = (props) => {

    return (
        <>
            Sort by: <Dropdown headers={props.headers} value={props.sortOption} setter={props.setSortOption} /> in
            <Dropdown headers={props.orderOptions} value={props.orderOption} setter={props.setOrderOption} /> order <br />
        </>
    );
}

export default Sorter