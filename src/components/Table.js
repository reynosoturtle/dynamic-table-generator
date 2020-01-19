import React from 'react'
import TableHead from './table/TableHead'
import TableBody from './table/TableBody'

const Table = (props) => {
    return (
        <table>
            <TableHead headers={props.headers} />
            <TableBody headers={props.headers} data={props.data} />
        </table>
    );
}

export default Table