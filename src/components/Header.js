import React from 'react'
import Content from './Content'

const Header = (props) => {
    console.log(props)
    // let aa = props
    // console.log(typeof aa)
    // aa.map(x=> 
    //     console.log(x))
    return (

            <h1>{props.hed}</h1>
    )
}

export default Header