import ReactTooltip from "./Components/ReactTooltip"
import CustomToolTip from "./Components/CustomToolTip"
import "./App.css"

function App() {
  return (
    <>
      <div className='content'>
        <div className='tooltipper'>
          <ReactTooltip />
        </div>
        <div className='tooltipper1'>
          <CustomToolTip />
        </div>
      </div>
    </>
  )
}

export default App
