import React from "react"
import "./tooltipstyle.css"

function CustomToolTip() {
  return (
    <>
      <div className='custom-tool-tip-container'>
        <h1>Custom-Tooltip</h1>
        <div className='tooltip '>
          <button> Left success tooltip</button>
          <span className='tooltip-text-left'> CustomTooltip</span>
        </div>

        <div className='tooltip '>
          <button> Right warning tooltip</button>
          <span className='tooltip-text-right'> CustomTooltip</span>
        </div>

        <button className='tooltip'>
          Top error tooltip
          <span className='tooltip-text'> CustomTooltip</span>
        </button>

        <div className='tooltip'>
          <button> Bottom Dark tooltip</button>
          <span className='tooltip-text-bottom'> CustomTooltip</span>
        </div>
      </div>
    </>
  )
}

export default CustomToolTip
