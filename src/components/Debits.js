import React from "react"

export default function Debits(props){

    let debitContents = props.debitInfo


    if(debitContents){
        return(
            <div>
                <h1>Debits</h1>
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