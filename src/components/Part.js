import React from 'react'
// import Course  from './Course'
import Content from './Content'

const Part = (props) => {
    
    // let a = props.part.map(a => a)
    // console.log(a)
    // let  bx = props.part.forEach(a => console.log(a.name))
    // console.log("props of noteeeeeeee ", props)
    // const {part} = props

    console.log("parts")
    return (
        <>
            {
             <li> {props.contt}</li> 
            }
        </>  
    )
}

// const Note = ({note}) => {
//     return (
//         <li>{note.content}</li>
//     )
// }

// export default Note
export default Part