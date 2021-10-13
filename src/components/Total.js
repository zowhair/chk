import React from 'react'


const Total = (props) => {
    console.log(props.exer)
    let exer = props.exer
    // let exercises = exer.map(s => {
    //     console.log(s)
    // })
    // let total = Object.values(exer.exe)
    // let arr = []
    // let total = Object.values(props).reduce((t, {exercises}) => arr.push(exercises), 0)
   
    // console.log("Exer type", typeof exer)
    return (
        <h4>Total of {exer} exercises</h4>
    )
}

export default Total;