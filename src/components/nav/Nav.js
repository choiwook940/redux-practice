import React from "react"
import { useSelector, useDispatch } from "react-redux"

export default function Nav() {
  const courses = useSelector((state) => state.courses.contents)
  const dispatch = useDispatch()
  
  function handleLinkClick(event, id) {
    event.preventDefault()
    const action = {type: 'SELECT', id}
    dispatch(action)
  }

  return <nav>
    <ol>
      {courses.map(item => { 
          return <li key={item.id}><a onClick={e => handleLinkClick(e, item.id)} href={`${item.id}.html`}>{item.title}</a></li>
      })}
    </ol>
  </nav>
}