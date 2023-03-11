import React, { useState } from 'react'
import "./person.css"
import fakeData from "../../fakeData/MOCK_DATA.json"
const Person = (props) => {
    const [Alldata, setData]=useState(fakeData)
  return (
    <div className='person'>
        {
          Alldata.map((data)=>
          <div class="person_box">
            <div class="person_img">
              <img src={data.img} alt="Your image" />
            </div>
            <div class="person-info">
              <h2>{data.first_name +" "+ data.last_name}</h2>
              <p>Profession: {data.profession}</p>
              <p>salary: {data.salary}</p>
              <div className='btn_container'>
                <button onClick={()=>{props.dataFunction([...props.data,data])}} className='add_btn'><i class="fa-solid fa-user-plus"></i>add to team</button>
                {/* <button className='count_btn'>count pricing</button> */}
              </div>
            </div>
            
          </div>
          )
        }
    </div>       
  )
}

export default Person