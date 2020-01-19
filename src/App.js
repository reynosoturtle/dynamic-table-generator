import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table.js'
import TestData from './configs/test.json'

const processData = ({ data, headers }) => {
  let processed = data.map(object => {
    headers.forEach(header => {
      let type = typeof data.find(object => object[header] !== undefined)[header]
      if (!object.hasOwnProperty(header)) {
        switch (type) {
          case 'number':
            object[header] = null
            break
          case 'boolean':
            object[header] = null
            break
          case 'string':
            object[header] = undefined
            break
          default:
            break
        }
      }
    })

    return object
  })

  return processed
}

const getUniqueHeaders = (data) => {
  let extracted = []
  data.forEach(obj => {
    let array = Object.keys(obj)
    extracted = extracted.concat(array)
  })

  return Array.from(new Set(extracted))
}

const App = () => {
  const [headers, setHeaders] = useState(getUniqueHeaders(TestData))
  const [dataList, setDataList] = useState(processData({ data: TestData, headers: headers }))
  console.table(dataList)

  return (
    <div className="App">
      <Table data={dataList} headers={headers} />
    </div>
  );
}

export default App;
