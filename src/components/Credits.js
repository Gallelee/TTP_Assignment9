import React, {useState} from "react"

export default function Credits(props){
    let creditContents = props.creditInfo
    
    const [newCredBalance, setNewCredBalance] = useState(props.balance)
    
   

    const addCredit = (ev) => {
        ev.preventDefault()
       creditContents.push({description: ev.target[0].value, amount: ev.target[1].value})
       setNewCredBalance(newCredBalance? (parseFloat(newCredBalance)+parseFloat(ev.target[1].value)).toFixed(2) : (parseFloat(props.balance)+parseFloat(ev.target[1].value)).toFixed(2))
       console.log(typeof props.balance)
    }

    if(creditContents){
        return(
            <div>
                <h1>Credits</h1>
                <h3>Account Balance: {newCredBalance? newCredBalance : props.balance}</h3>

                <form onSubmit={(ev) => addCredit(ev)}>
                    <input type={"text"} placeholder="Enter a description for your new Debit"/>
                    <input type={"text"} placeholder="Enter the amount for the new debit"/>
                    <input type={"submit"} value={"Save Changes"}/>
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