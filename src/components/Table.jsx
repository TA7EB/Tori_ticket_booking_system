import React from 'react'

const Table = ()=>{
    return(  
        <div className="overflow-x-auto p-10 m-10">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>Boat</th> 
        <th>Dep.Time</th> 
        <th>Arr. Time</th> 
        <th>Seat Availble</th> 
        <th>Fare</th> 
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>Sampan-3</td> 
        <td>10:00 AM</td> 
        <td>11:30 AM</td> 
        <td>20</td> 
        <td>90 Taka</td> 
      </tr>
      </tbody>
      </table>
      </div>



        )
    }
    export default Table;