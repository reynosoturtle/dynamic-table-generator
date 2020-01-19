import React from 'react'
import TableColumn from './TableColumn'

const TableRow = (props) => {
    let columns = props.headers.map((header, index) => <TableColumn key={index} data={props.data[header]} />)
    return (
        <tr>
            {columns}
        </tr>
    );
}

export default TableRow