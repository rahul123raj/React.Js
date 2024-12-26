import React from 'react'
import { employee } from './employeedata'
import './employee.css'

const EmployeeDetails = () => {
  return (
    <>
    <div className="container">
        <table >
            <thead>
                <tr>
                    <th>sr.no</th>
                    <th>fnm</th>
                    <th>lnm</th>
                    <th>place</th>
                    <th>deg</th>
                    <th>stream</th>
                    <th>emoji</th>
                </tr>
            </thead>

            <tbody>
                {
                    employee.map((elem,i)=>{
                        let {fnm,lnm,place,deg,sttream,emoji} = elem
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{fnm}</td>
                                <td>{lnm}</td>
                                <td>{place}</td>
                                <td>{deg}</td>
                                <td>{sttream}</td>
                                <td><img src={emoji} alt="" /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default EmployeeDetails