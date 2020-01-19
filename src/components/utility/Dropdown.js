import React from 'react'

const Dropdown = (props) => {
    let options = props.headers.map(header => <option key={"sortBy" + header} value={header}>{header}</option>)

    return (
        <select selected={props.value} onChange={(e) => props.setter(e.target.value)}>
            {options}
        </select>
    );
}

export default Dropdown