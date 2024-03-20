import React from 'react'

const FareDetails=()=>{
    return(
        <div className='flex '>
            <ul>
                <li>Fare Details</li>
                <li>Ticket Price<span>1200</span></li>
                <li>Processing Fee</li>
                <li>Discount</li>
                <li>Insurance Amount</li>
                <li><b>Total</b></li>
            </ul>
        </div>
    )
}
export default FareDetails;