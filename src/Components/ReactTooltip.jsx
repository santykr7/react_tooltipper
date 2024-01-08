import React from "react"
import "./tooltipstyle.css"
import { Tooltip } from "react-tooltip"

function ReactTooltip() {
  return (
    <>
      <div className='tool-tip-container'>
        <h1>React-Tooltip</h1>
        <a
          data-tooltip-id='my-tooltip'
          data-tooltip-content='helloworld!!'
          data-tooltip-place='left'
          data-tooltip-variant='success'
        >
          <button> Left success tooltip</button>
        </a>

        <a
          data-tooltip-id='my-tooltip'
          data-tooltip-content='helloworld!!'
          data-tooltip-place='right'
          data-tooltip-variant='warning'
        >
          <button> Right warning tooltip</button>
        </a>

        <a
          data-tooltip-id='my-tooltip'
          data-tooltip-content='helloworld!!'
          data-tooltip-place='top'
          data-tooltip-variant='error'
        >
          <button> Top error tooltip</button>
        </a>

        <a
          data-tooltip-id='my-tooltip'
          data-tooltip-content='helloworld!!'
          data-tooltip-place='bottom'
          data-tooltip-variant='dark'
        >
          <button> Bottom Dark tooltip</button>
        </a>

        <Tooltip id='my-tooltip' />
      </div>
    </>
  )
}

export default ReactTooltip
