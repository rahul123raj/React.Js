import React from 'react'
import { students } from './studentdata'
import './students.css'

const StudentsDetails = () => {
    // console.log(students)

  return (
    <>
    <div className="students">
        <div className="header">Priority Students</div>
        <div className="container">
            <table >
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>yop</th>
                        <th>degree</th>
                        <th>stream</th>
                        <th>place</th>
                    </tr>
                </thead>

                <tbody>
                {
                    
                // students.map((elem,i)=>{
                //     return(
                //         <tr>
                //             <td>{i+1}</td>
                //             <td>{elem.fnm}</td>
                //             <td>{elem.lnm}</td>
                //             <td>{elem.yop}</td>
                //             <td>{elem.deg}</td>
                //             <td>{elem.sttream}</td>
                //             <td>{elem.place}</td>
                //         </tr>
                //     )
                // })

                // Destructuring 

                students.map((elem,i)=>{
                    let {fnm,lnm,yop,deg,sttream,place} = elem
                     return (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{fnm}</td>
                                    <td>{lnm}</td>
                                    <td>{yop}</td>
                                    <td>{deg}</td>
                                    <td>{sttream}</td>
                                    <td>{place}</td>
                                </tr>
                    )
                })
            }
                </tbody>
            </table>
            
        </div>
    </div>
    </>
  )
}

export default StudentsDetails