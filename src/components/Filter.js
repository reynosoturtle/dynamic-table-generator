import React from 'react'
import Dropdown from './utility/Dropdown'

const Filter = (props) => {

    return (
        <>
            Filter by: <Dropdown headers={props.filterOptions} value={props.filterOption} setter={props.setFilterOption} /> in
        </>
    );
}

export default Filter