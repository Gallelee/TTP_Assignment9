import React, { useState } from "react"

export default function Debits(props){

    let debitContents = props.debitInfo

    const [userDebit, setUserDebit] = useState(0)//using the state to force an update
   

    const addDebit = (ev) => {
        ev.preventDefault()
       debitContents.push({description: ev.target[0].value, amount: ev.target[1].value})
       setUserDebit(1) // forces an update to display the new debit
    }
    

    if(debitContents){
        return(
            <div>
                <h1>Debits</h1>
                <h2>Add new Debits?</h2>
                <h3>Account Balance: {props.balance}</h3> 
                <form onSubmit={(ev) => addDebit(ev)}>
                    <input type={"text"} placeholder="Enter a description for your new Debit"/>
                    <input type={"text"} placeholder="Enter the amount for the new debit"/>
                    <input type={"submit"}/>
                </form>
                {debitContents.map( elm => {
                    return(<div className="debit-card">
                                <h4>{elm.description}</h4>
                                <h4>{elm.amount}</h4>
                                <h4>{elm.date}</h4>
                        </div>)
                })}
            </div>
    )
    }

    return(
        <h2>Data not found</h2>
    )
    
}