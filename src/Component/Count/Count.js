import React from 'react'
import "./count.css"
const Count = (props) => {
  const selectedDevs = props.selectPerson;
  let totalPrice = 0;
  selectedDevs.reduce((total,dev)=>{
   const salary = dev.salary;
    const removeComa = salary.replace(",","");
    const salaryNumber = parseInt(removeComa)
   totalPrice= total + salaryNumber;
    return totalPrice
  },0);

  const handleRemoveItem = (index) => {
    const newItems = [...selectedDevs];
    newItems.splice(index, 1);
    props.SetdataFunction(newItems)
  }

  return (
    <div className='count'>
        {
          selectedDevs.map((dev, index)=>
            <div className="select_person_container">
              <div className="image_container">
                <img src={dev.img} alt="" />
              </div>
              <div className='selecteddev_container_info'>
                <h2>Name: {dev.first_name + dev.last_name}</h2>
                <p>{dev.profession}</p>
                <p className='salary'>Salary: {dev.salary}</p>
                <div className="minus_btn">
                  <button onClick={()=>{handleRemoveItem(index)}}><i class="fa-solid fa-minus"></i></button>
                </div>
              </div>

            </div>
            
        )
        }
          <div className='Total'>
            <h1>Total Cost: ${totalPrice}</h1>
          </div>
    </div>
  )
}

export default Count