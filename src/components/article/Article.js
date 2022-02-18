import React from "react"
import { useSelector, useDispatch } from "react-redux"

export default function Article() {
  const courses = useSelector((state) => state.courses)
  const dispatch = useDispatch()

  return <div>
    {courses.contents.map(course => {
      return <>
        <h2>{course.title}</h2>
        <p>{course.desc}</p>      
      </>
    })}
  </div>
}