import React from "react"

export default function UserProfile(props){

    return(
        <div>
            <h1>User Profile</h1>

            <div>Username: {props.username}</div>
            <div>Member Since: {props.memberSince}</div>
        </div>
    )
}