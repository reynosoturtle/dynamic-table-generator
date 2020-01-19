import React from 'react'

const TableColumn = (props) => {
    let display = props.data
    if (typeof props.data === 'boolean') {
        display = props.data ? 'True' : 'False'
    } else if (props.data === undefined || props.data === null) {
        display = 'N/A'
    }

    return (
        <td>
            {display}
        </td>
    );
}

export default TableColumn