import React from "react"

export default function Debits(props){

    let debitContents = props.debitInfo


    if(debitContents){
        return(
            <div>
                {debitContents[0].id}
            </div>
    )
    }

    return(
        <h2>Data not found</h2>
    )
    
}