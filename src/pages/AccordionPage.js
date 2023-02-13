import React from 'react'
import Accordion from '../componets/Accordion';


const AccordionPage = () => {
  const items=[
    {
      id:"A",
      label:"can I use React on a Project",
      content:"You can use react on any project you want "
    },
    {
      id:"B",
      label:"can I use Javascript on a Project",
      content:"You can use javascript on any project you want "
    },
    {
      id:"C",
      label:"can I use css on a Project",
      content:"You can use css on any project you want "
    },
  ]
  return (
    <div>
    <Accordion items={items}/>
    </div>
  )
}

export default AccordionPage