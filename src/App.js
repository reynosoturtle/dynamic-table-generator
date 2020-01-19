import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table.js'
import Sorter from './components/Sorter.js'
import TestData from './configs/test.json'

const processData = ({ data, headers }, sortOption, orderOption) => {
  let processed = data.map(object => {
    headers.forEach(header => {
      let type = typeof data.find(object => object[header] !== undefined)[header]
      if (!object.hasOwnProperty(header)) {
        switch (type) {
          case 'number':
            object[header] = undefined
            break
          case 'boolean':
            object[header] = null
            break
          case 'string':
            object[header] = ''
            break
          default:
            break
        }
      }
    })

    return object
  })

  return sortData(sortOption, processed, orderOption)
}

const getUniqueHeaders = (data) => {
  let extracted = []
  data.forEach(obj => {
    let array = Object.keys(obj)
    extracted = extracted.concat(array)
  })

  return Array.from(new Set(extracted))
}

// Sort string, case-insensitive
const sortString = (key, arr, order) => {
  return arr.sort(function (a, b) {
    if (a[key] === '') {
      return 1
    } else if (b[key] === '') {
      return -1
    } else {
      return order === 'asc'
        ? a[key].toLowerCase().localeCompare(b[key].toLowerCase())
        : b[key].toLowerCase().localeCompare(a[key].toLowerCase())
    }
  })
}

// Sort SpecialCharacter String
const getNumberFromSpecialString = (string) => {
  let noSpecialCharacters = string.replace(/[^0-9a-zA-Z.]/g, '')
  return Number(noSpecialCharacters)
}

const sortSpecialCharacter = (key, arr, order) => {
  return arr.sort(function (a, b) {
    if (a[key] === '') {
      return 1
    } else if (b[key] === '') {
      return -1
    } else {
      return order === 'asc'
        ? getNumberFromSpecialString(a[key]) - getNumberFromSpecialString(b[key])
        : getNumberFromSpecialString(b[key]) - getNumberFromSpecialString(a[key])
    }
  })
}

// Sort number or boolean
const regularSort = (key, arr, order) => {
  return arr.sort(function (a, b) {
    if (a[key] === null || a[key] === undefined) {
      return 1
    } else if (b[key] === null || b[key] === undefined) {
      return -1
    } else {
      return order === 'asc'
        ? a[key] - b[key]
        : b[key] - a[key]
    }
  })
}

const sortData = (key, data, order) => {
  let item = data.find(object => object[key] !== undefined && object[key] !== null)[key]

  if (typeof item === 'string') {
    if (item.substr(0, 1) === '$' || item.substr === '+') {
      // SpecialCharacter string
      return sortSpecialCharacter(key, data, order)
    } else {
      // Regular string
      return sortString(key, data, order)
    }
  } else if (typeof item === 'number' || typeof item === 'boolean') {
    // Number or boolean
    let sorted = regularSort(key, data, order)
    return sorted
  }
}

const App = () => {
  const [headers, setHeaders] = useState(getUniqueHeaders(TestData))
  const [sortOption, setSortOption] = useState(headers[0])
  const orderOptions = ['asc', 'des']
  const [orderOption, setOrderOption] = useState(orderOptions[0])

  const [dataList, setDataList] = useState(processData({ data: TestData, headers: headers }, sortOption, orderOption))
  console.table(dataList)

  useEffect(() => {
    setDataList(processData({ data: TestData, headers: headers }, sortOption, orderOption))
  }, [headers, sortOption, orderOption])

  return (
    <div className="App">
      <Sorter headers={headers} data={dataList} sortOption={sortOption} setSortOption={setSortOption} orderOptions={orderOptions} orderOption={orderOption} setOrderOption={setOrderOption} />
      <Table data={dataList} headers={headers} />
    </div>
  );
}

export default App;
