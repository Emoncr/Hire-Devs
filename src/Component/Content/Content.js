import React, { useEffect, useState } from 'react'
import Count from '../Count/Count'
import "./content.css"
import Categori from '../Categoris/Categori'
import Person from '../Person/Person'

//get data from local storage====

  const getData =()=>{
    const localData = localStorage.getItem("selectItems");
    if (localData) {
      return JSON.parse(localData)
    }
    else{
      return [];
    }
  }
const Content = () => {
  const [data, setdata] = useState(getData())
  //set items on local storage=======
  useEffect(() => {
    localStorage.setItem("selectItems", JSON.stringify(data))
  }, [data])
  
  return (
    <div className='content'>
        <div className="container">
            <div className="optinholder">
            {/* <Categori ></Categori> */}
              <Person data= {data} dataFunction={setdata}></Person>
              <Count  selectPerson={data} SetdataFunction={setdata}></Count>
            </div>
        </div>
    </div>
  )
}

export default Content