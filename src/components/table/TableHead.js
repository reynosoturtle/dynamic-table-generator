import React from 'react'

const TableHead = (props) => {
    let headers = props.headers.map(header => <th key={header}>{header}</th>)
    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
}

export default TableHead