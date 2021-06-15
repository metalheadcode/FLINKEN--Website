import React from "react"
import "./SmallBadge.css"
import Badge from "react-bootstrap/Badge"

const SmallBadge = ({ color, children }) => {
  return (
    <div className="SmallBadge">
      <Badge className={`SmallBadge ${color}`}>{children}</Badge>
    </div>
  )
}

export default SmallBadge
