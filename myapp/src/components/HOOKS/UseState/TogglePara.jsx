import React, { useState } from 'react'

const TogglePara = () => {
    let [para,setPara] = useState(true)

    let togglepara = () =>{
        setPara(!para)
    }
  return (
    <>
    <div className="togglepara">
        <button onClick={togglepara}> 
            {para ? 'show para' :'hide para'}
        </button>

        <p>
            {
                para ? '' : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptate commodi mollitia nostrum minus ullam delectus voluptates sed nobis maxime culpa laudantium natus, accusamus id, quos similique. Eius, amet. Est.'
            }
        </p>
    </div>
    </>
  )
}

export default TogglePara