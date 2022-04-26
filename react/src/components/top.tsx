import React from "react"
import "../css/top.css"

interface IProps{
    content:string
}

type IPropsType = keyof IProps;

export default function Top(props:IProps){

    function contentHandler(props:IPropsType):IPropsType{
        return props
    }

    return (
        <div className="top-component">
            <span>index page</span>
            <a href="position.html"> to position page { contentHandler("content") } </a>
        </div>
    )
}