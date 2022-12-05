// import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function DashBoardView(){
    const loc = useLocation()
    const name = loc.state.name
    return(
        <>
            {name}
        </>
    )
}