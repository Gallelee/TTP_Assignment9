import React from "react"

export default function Credits(props){
    let creditContents = props.creditInfo

    if(creditContents){
        return(
            <div>
                <h1>Credits</h1>
                <h3>Account Balance: {props.balance}</h3>
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