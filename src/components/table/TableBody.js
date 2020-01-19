import React from 'react'
import TableRow from './TableRow.js'

const TableBody = (props) => {
    let rows = props.data.map(row => {
        return <TableRow key={row._id} headers={props.headers} data={row} />
    })
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

export default TableBody