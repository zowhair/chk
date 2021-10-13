import React from 'react'
import Part from './Part'
import Total from './Total'
import Header from './Header'
const Content = (props) => {
    // console.log("props in content: ",props)
    // let a = props.content.map(a => a.name)
    // let a = props.content.map(ab => {
    //     console.log(ab.name)
    //     ab.parts.map(ba => {
    //         console.log(ba)
    //     })
    // })
    let courseX = props
    // console.log(courseX)
    // const content = props
    // console.log('content ', content[0].exercises)

    let total = 0
    
    //  content.map(exr => {
    //     // console.log("ExRRR",exr.exercises)
    //     return total+= exr.exercises
    // })
    // let a = content.reduce((acc, item) => {
    //     acc+item
    // })
    // console.log("courseX" ,courseX)
   
    
    return (
        <>
          
            {
                props.content.map(ab => {
                    // console.log(ab.name);
                    let aname = ab.name;
                    <Header hed={aname} />

                    ab.parts.map(ba => {
                        <Part contt = {ba} />
                    })
                })
            }
           
        </>
    )
}

export default Content
  /* <ul>
                {content.map(obj => {
                    // console.log(obj);
                   return  <Part key={obj.id} part={obj.name} exer={obj.exercises}  />
                    // return <Part obj={obj} />
                })}
            </ul> */