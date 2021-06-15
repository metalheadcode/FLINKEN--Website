import React from "react"
import "./SimpleRating.css"
import { Star } from "../Icons/Icons"

const SimpleRating = ({ value, dark, iconColor, color, radius, textColor }) => {
  return (
    <div
      className={`SimpleRating  ${color} ${dark ? `dark` : ""}`}
      style={{
        backgroundColor: `${color}`,
        borderRadius: `${radius}px`,
      }}
    >
      <Star fill={`${iconColor}`} />
      <p
        className="text d-inline-block"
        style={{
          color: `${textColor}`,
        }}
      >
        {parseFloat(value, 10).toFixed(1)}
      </p>
    </div>
  )
}

SimpleRating.defaultProps = {
  iconColor: "#18214D",
  color: "#EFF2F6",
  radius: "4",
  textColor: "#18214D",
}

export default SimpleRating
