import React, { useState } from "react"
import {Link} from "react-router-dom"
import "../component-styles/debits.css"

export default function Debits(props){

    let debitContents = props.debitInfo
    const [newBalance,setNewBalance] = useState(props.balance)
    

    const addDebit = async (ev) => {

        ev.preventDefault()
        debitContents.unshift({description: ev.target[0].value, amount: ev.target[1].value, date: new Date().toISOString()})
        setNewBalance(newBalance? (parseFloat(newBalance)-parseFloat(ev.target[1].value)).toFixed(2) : (parseFloat(props.balance)-parseFloat(ev.target[1].value)).toFixed(2))
       console.log(newBalance)

    }
    

    if(debitContents){
        return(
            <div>
                <nav id="deb-nav">
                    <h1>Debits</h1>
                    <h4>Account Balance: {newBalance? newBalance:props.balance}</h4> 
                    <div id={"deb-links"}>
                        <Link to="/">Home</Link>
                        <Link to="/Credits">Credits</Link>
                    </div>
                </nav>

                

                <h3>Add New Debits?</h3>

                <form onSubmit={(ev) => addDebit(ev)}>
                    <input type={"text"} placeholder="Enter a description for your new Debit"/>
                    <input type={"text"} placeholder="Enter the amount for the new debit"/>
                    <input type={"submit"} value={"Add Debit"}/>
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
        <h1>Debits</h1>
    )
    
}