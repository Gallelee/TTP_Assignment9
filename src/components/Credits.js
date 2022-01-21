import React, {useState} from "react"
import {Link} from "react-router-dom"
import "../component-styles/debits.css"

export default function Credits(props){
    let creditContents = props.creditInfo
    
    const [newCredBalance, setNewCredBalance] = useState(props.balance)
    
   

    const addCredit = (ev) => {
        ev.preventDefault()
       creditContents.unshift({description: ev.target[0].value, amount: ev.target[1].value})
       setNewCredBalance(newCredBalance? (parseFloat(newCredBalance)+parseFloat(ev.target[1].value)).toFixed(2) : (parseFloat(props.balance)+parseFloat(ev.target[1].value)).toFixed(2))
       console.log(typeof props.balance)
    }

    if(creditContents){
        return(
            <div>
                <nav id={"cred-nav"}>
                    <h1>Credits</h1>
                    <h4>Account Balance: {newCredBalance? newCredBalance : props.balance}</h4>
                    <div id={"cred-links"}>
                    <Link to="/">Home</Link>
                    <Link to="/Debits">Debits</Link>
                    </div>
                </nav>

                

                <h3>Add New Credits?</h3>

                <form onSubmit={(ev) => addCredit(ev)}>
                    <input type={"text"} placeholder="Enter a description for your new Debit"/>
                    <input type={"text"} placeholder="Enter the amount for the new debit"/>
                    <input type={"submit"} value={"Add Credit"}/>
                </form>

                {creditContents.map( elm => {
                    return(<div className="credit-card">
                                <h4>{elm.description}</h4>
                                <h4>{elm.amount}</h4>
                                <h4>{elm.date}</h4>
                        </div>)
                })}

            </div>
        )
    }

    return (
        <h2>Nothing to see here</h2>
    )
}