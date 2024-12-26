import React, { useState } from 'react'
import { studentsdata } from './studentsdata'
import './students.css'


const Students = () => {
    console.log(studentsdata)
    let [data,setData] = useState(studentsdata)

    let viewDetails = (fnm,lnm,age)=>{
        alert(`${fnm} ${lnm} age is ${age}`)
    }

    let deleteData = (id,fnm)=>{
    //    let x =  data.filter((elem)=>{
    //         return elem.id !== id
    //     })

    //     setData(x)

   let bool =  window.confirm(`${fnm} data wants to delete`)
    if(bool){
    setData(data.filter((elem,index)=> {return (index+1 !== id)}))
    alert(`${fnm } data is deleted`)

    }else{
        alert(`${fnm} data is not deleted`)
    }

    }

    let deleteAll = ()=>{
       let bool = window.confirm('want to delete all data')
       if(bool){
        setData([])
       }else{
        alert('nothing is deleted')
       }
    }



    let addStudent = ()=>{
        let fname = prompt('Enter First Name')
        let lname = prompt('Enter Last Name')
        let dob = prompt('Enter dob YYYY')
        let place = prompt('Enter yor Place')

        // console.log(fname,lname,dob,place)
        
        let newdata = {
            id : 0,
        fnm : fname,
        lnm : lname,
        dob : dob,
        place : place
        }

        setData([...data,newdata])
    }
let duplicate = (id,fnm,lnm,dob,place)=>{
    setData([...data,{id,fnm,lnm,dob,place}])
}
  return (
    <div>
        <div className="studentsdetails"> student Details
            <table>
                <thead>
                    <tr>
                        <th>SR.NO</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Age</th>
                        <th>Place</th>
                        <th>View</th>
                        <th>Delete</th>
                        <th>Duplicate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((elem,index)=>{
                            let {id,fnm,lnm,dob,place} = elem
                            let date = new Date()
                    
                            let age = date.getFullYear() - dob
                            return (
                                <>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{fnm}</td>
                                        <td>{lnm}</td>
                                        <td>{dob}</td>
                                        <td>{age}</td>
                                        <td>{place}</td>
                                        <td ><button id='view' onClick={()=> viewDetails(fnm,lnm,age)}>View</button></td>
                                        <td><button  id='delete' onClick={()=>{deleteData(index+1,fnm)}}>Delete</button></td>

                                        <td><button onClick={()=> duplicate(id,fnm,lnm,dob,place)}>Duplicate</button></td>
                                    </tr>

                                </>
                            )
                        })
                    }

                </tbody>
                <tfoot>
                <tr >
                        <td colSpan={5}>{data.length !== 0 ? 
                            <button className='add-deleteall' onClick={deleteAll}>Delete All data</button>
                            : <div>Data is not found</div>
                            }</td>

                            <td colSpan={4}><button className='add-deleteall' onClick={addStudent}>Add Users</button></td>
                    </tr>
                </tfoot>
            </table>
            </div>
       </div>
  )
  
}

export default Students