import React, {DragEventHandler, ReactElement, RefObject, useRef} from "react"
import {FC} from "react"
import styled from 'styled-components'

export const Draggable: FC = (props) => {
    return (
        <>
            <Container className="container">
                {["A", "B", "C"].map((item) => {
                    return <DraggableObject name={item}/>
                })}
            </Container>
        </>
    )
}



interface NameProps {
    name: string
}

const DraggableObject: FC<NameProps> = (props) => {
    const refs = useRef<HTMLDivElement>(null)

    return (
        <>
            <Box draggable="true" className="box" ref={refs} onDragStart={handleDragStart}>{props.name}</Box>
        </>
    )
}

const handleDragStart: DragEventHandler = (event: React.DragEvent) => {
    const element = event.currentTarget as HTMLDivElement
    element.style.opacity = "0.4"
}







const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
`

const Box = styled.div`
    border: 3px solid #666;
    background-color: #ddd;
    border-radius: .5em;
    padding: 10px;
    cursor: move;
`
