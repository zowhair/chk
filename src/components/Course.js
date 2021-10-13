import React from 'react'
import Header from './Header'
import Content  from './Content'


const Course = (props) => {
    // console.log(props.course)
    
    return (
        <>
            <Header name={props.course} />
            <Content content={props.course} />
        </>
    )
}

export default Course