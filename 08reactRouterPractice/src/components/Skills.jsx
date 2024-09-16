import React from 'react'
import { useParams } from 'react-router-dom'

function Skills() {
  const {id}=useParams();
  return (
    <>
        <div>Skills:{id}{typeof(id)}</div>

    </>
  )
}

export default Skills