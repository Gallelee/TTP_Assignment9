import React from "react"

export default function Credits(props){
    let creditContents = props.creditInfo

    if(creditContents){
        return(
            <div>
                {creditContents[0].id}
            </div>
        )
    }

    return (
        <h2>Nothing to see here</h2>
    )
}