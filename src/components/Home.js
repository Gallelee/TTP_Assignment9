import React from "react"
import AccountBalance from "./AccountBalance"
import {Link} from "react-router-dom"

export default function Home(props){
    

    return(
        <div>
            <h1>Bank of React</h1>
            <AccountBalance balance={props.balance}/>
            <Link to="/userProfile">User Profile</Link>
        </div>
    )
}