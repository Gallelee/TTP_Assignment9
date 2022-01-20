import React from "react"

export default function Debits(props){

    let debitContents = props.debitInfo


    if(debitContents){
        return(
            <div>
                <h1>Debits</h1>
                {debitContents[0].id}
            </div>
    )
    }

    return(
        <h2>Data not found</h2>
    )
    
}