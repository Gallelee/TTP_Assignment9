import React, {useState} from "react"
import {Link} from "react-router-dom"
import "../component-styles/debits.css"

export default function Credits(props){
    let creditContents = props.creditInfo
    
    const [newCredBalance, setNewCredBalance] = useState(props.balance)
    
   

    const addCredit = (ev) => {
        ev.preventDefault()
        if(ev.target[0].value !== "" && ev.target[1].value !== ""){
       creditContents.unshift({description: ev.target[0].value, amount: ev.target[1].value, date: new Date().toISOString()})
       setNewCredBalance(newCredBalance? (parseFloat(newCredBalance)+parseFloat(ev.target[1].value)).toFixed(2) : (parseFloat(props.balance)+parseFloat(ev.target[1].value)).toFixed(2))
       console.log(typeof props.balance)
        }
        else{
            alert("Check Your Entries")
        }
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
                    <label>Description</label>
                    <input type={"text"}/>
                    <label>Amount</label>
                    <input type={"number"} step={"0.01"} min={"0"}/>
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