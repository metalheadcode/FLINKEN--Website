import React from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import "./Tabs.css"

const Tabs = ({ array, onClick, classes }) => {
  const onLinksClickHandler = (event, string) => {
    event.preventDefault()
    Array.from(event.target.parentNode.childNodes).forEach((item) => {
      item.classList.remove("active")
    })
    event.target.classList.add("active")
  }

  return (
    <ButtonGroup
      className={`Tabs-group ${classes}`}
      onClick={onLinksClickHandler}
    >
      {array.map((item, index) => (
        <Button
          key={index}
          className={`Tabs-item ${index === 0 ? "active" : null}`}
          onClick={onClick}
        >
          {item}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default Tabs
