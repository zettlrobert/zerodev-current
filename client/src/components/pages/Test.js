import React, { Fragment, useState } from 'react'

const Test = () => {

  const [testData, updateTestData] = useState({
    dataItems: []
  })

  const testFunction = async () => {
    console.log('Just Testing...')
    try {
      const res = await fetch('/api/test');
      const data = await res.json();

      updateTestData(prevState => {
        return { dataItems: data }
      })

    } catch (err) {

      console.log('error in Test function' + err);
    }
  }


  return (
    <Fragment>
      <div style={seeMe}>
        <button style={button} onClick={testFunction}>Click ME</button>
        {testData.dataItems !== null ? (<div>{testData.dataItems.name}</div>) : "Möp"}
      </div>
    </Fragment>
  )
}

const seeMe = {

}

const button = {
  color: 'black',
  margin: '1rem',
  padding: '1rem'
}

export default Test
