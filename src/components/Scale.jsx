// import React from "@astrojs/react"
import { useState } from "react"

const Input = ({ tag, label, state, setState }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-0 mt-1'>
      <label
        class='font-bold sm:text-right sm:pt-2 mr-2 block align-middle'
        for={tag}
      >
        {label}:{" "}
      </label>
      <input
        class='px-3 py-1 leading-[1.6] shadow-sm border border-1 rounded-md'
        id={tag}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}
export default function Scale() {
  const [fromZero, setFromZero] = useState(4)
  const [fromSpan, setFromSpan] = useState(20)
  const [fromUnit, setFromUnit] = useState("mA")
  const [fromValue, setFromValue] = useState(12)

  return (
    <>
      <p>This will scale from one value to another. {fromZero}</p>

      <div className='grid grid-cols-1 gap-4 rounded-md shadow-md p-4 bg-white'>
        <Input
          tag='fromZero'
          label='From Zero'
          state={fromZero}
          setState={setFromZero}
        />
        <Input
          tag='fromSpan'
          label='From Span'
          state={fromSpan}
          setState={setFromSpan}
        />
      </div>
      {/* <label for='fromZero'>From Zero: </label>
      <input
        id='fromZero'
        value={fromZero}
        onChange={(e) => setFromZero(e.target.value)}
      />
      <label for='fromSpan'>From Span: </label>
      <input
        id='fromSpan'
        value={fromSpan}
        onChange={(e) => setFromSpan(e.target.value)}
      />

      <label for='fromUnit'>From Unit: </label>
      <input
        id='fromUnit'
        value={fromUnit}
        onChange={(e) => setFromUnit(e.target.value)}
      />

      <label for='fromValue'>From Value: </label>
      <input
        id='fromValue'
        value={fromValue}
        onChange={(e) => setFromValue(e.target.value)}
      /> */}
    </>
  )
}
