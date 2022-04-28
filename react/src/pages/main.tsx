import React from "react"
import Top from "../components/top"
import "../css/main.css"
import img from "../assets/images/507615.png"

export default function Main(){
    return (
        <>
            <div className="top-class">
                <Top content="vans" />
            </div>
            <div className="content-box">
                <img src={img} alt="" />
            </div>
        </>
    )
}