import { useState } from "react"
import { formatPrice } from "../utils"



const FormRange = ({ label, name, size }) => {
  const step = 1000
  const maxPrice = 100000
  const [selectedPrice, setSelectedPrice] = useState(maxPrice)

  return (
    <div>
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input type="range" name={name} min={0} max={maxPrice} value={selectedPrice} onChange={(e) =>
        setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step} />
      <div className="flex justify-between text-xs px-2 mt-2">
        <span className="font-bold  ">0</span>
        <span className="font-bold  ">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  )
}

export default FormRange