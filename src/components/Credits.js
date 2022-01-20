import React, {useState} from "react"

export default function Credits(props){
    let creditContents = props.creditInfo
    let balance = props.balance

    let i = 0 //used to increment state to force update

    const [userCredit, setUserCredit] = useState(i)//using the state to force an update
   

    const addCredit = (ev) => {
        i++
        ev.preventDefault()
       creditContents.push({description: ev.target[0].value, amount: ev.target[1].value})
       setUserCredit(i) // forces an update to display the new debit
    }

    if(creditContents){
        return(
            <div>
                <h1>Credits</h1>
                <h3>Account Balance: {balance}</h3>

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