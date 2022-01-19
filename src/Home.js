import React from "react"
import AccountBalance from "./AccountBalance"

export default function Home(props){
    

    return(
        <div>
            <h1>Bank of React</h1>
            <AccountBalance balance={props.balance}/>
        </div>
    )
}