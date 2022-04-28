import React from "react"
import Top from "../components/top"
import { Button } from "antd"

export default function App(){

    return (
        <>
            <Top />
            <span>hello golang</span>
            <Button type="primary">Primary Button</Button>
        </>
    )
}