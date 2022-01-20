import React from "react"

export default function Debits(props){

    let debitContents = props.debitInfo

    const addDebit = (ev) => {
        ev.preventDefault()
       alert(ev.target[0].value)
    }

    if(debitContents){
        return(
            <div>
                <h1>Debits</h1>
                <h2>Add new Debits?</h2>
                <form onSubmit={(ev) => addDebit(ev)}>
                    <input type={"text"} placeholder="Enter a description for your new Debit"/>
                    <input type={"text"} placeholder="Enter the amount for the new debit"/>
                    <input type={"submit"}/>
                </form>
                {debitContents.map( elm => {
                    return(<div className="debit-card">
                                <h4>{elm.id}</h4>
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