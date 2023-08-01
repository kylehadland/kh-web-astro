import { useEffect, useState } from "react"
import ranges from "./ranges"

export default function DestForm({ source, destination, remove, edit, index }) {
  const [value, setValue] = useState()

  useEffect(() => {
    function calculate() {
      // (source.value-source.zero)*(destination.span-destination.zero)/(source.span-source.zero)+destination.span)
      const result =
        ((source.value - source.zero) * (destination.span - destination.zero)) /
          (source.span - source.zero) +
        destination.zero
      setValue(result.toFixed(2))
    }
    calculate()
  }, [source, destination.zero, destination.span, destination.unit])

  return (
    <>
      <div>
        <div className='flex justify-between'>
          <h2 className='font-bold'>
            Destination {destination.zero} to {destination.span}{" "}
            {destination.unit}
          </h2>
          <button
            title='Remove'
            className='p-1'
            onClick={() => remove(destination)}
          >
            X
          </button>
        </div>

        <div className='flex border border-gray-200 rounded-lg my-1 '>
          <label for={`destSelect${index}`} className='hidden'>
            Quick Select
          </label>
          <select
            id={`destSelect${index}`}
            className='p-2 grow rounded-lg'
            onChange={(e) => edit(destination, { ...ranges[e.target.value] })}
            defaultValue=''
          >
            <option value='' disabled>
              Quick select a range
            </option>
            {ranges.map((range, index) => {
              return (
                <option key={index} value={index}>
                  {range.zero} to {range.span} {range.unit}
                </option>
              )
            })}
          </select>
        </div>

        <div className='flex border border-gray-200 rounded-lg my-1 '>
          <label
            for={`destUnit${index}`}
            className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'
          >
            Unit
          </label>
          <input
            id={`destUnit${index}`}
            className='rounded-r-lg bg-white py-1 px-2 grow shrink min-w-0 z-10'
            type='text'
            onChange={(e) => edit(destination, { unit: e.target.value })}
            value={destination.unit}
          />
        </div>

        <div className='flex border border-gray-200 rounded-lg my-1'>
          <label
            for={`destZero${index}`}
            className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'
          >
            Zero
          </label>
          <input
            id={`destZero${index}`}
            className='rounded-none bg-white py-1 px-2 grow shrink min-w-0 z-10'
            type='number'
            // inputMode='decimal'
            onChange={(e) =>
              edit(destination, { zero: parseFloat(e.target.value) })
            }
            value={destination.zero}
          />
          <span className='rounded-r-lg bg-gray-100 py-1 px-2 basis-16'>
            {destination.unit}
          </span>
        </div>

        <div className='flex border border-gray-200 rounded-lg my-1'>
          <label
            for={`destSpan${index}`}
            className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'
          >
            Span
          </label>
          <input
            id={`destSpan${index}`}
            className='rounded-none bg-white py-1 px-2 grow shrink min-w-0 z-10'
            type='number'
            // inputMode='decimal'
            onChange={(e) =>
              edit(destination, { span: parseFloat(e.target.value) })
            }
            value={destination.span}
          />
          <span className='rounded-r-lg bg-gray-100 py-1 px-2 basis-16'>
            {destination.unit}
          </span>
        </div>

        <div className='flex border border-gray-200 rounded-lg my-1'>
          <span className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'>
            Value
          </span>
          <span className='rounded-none bg-white py-1 px-2 grow shrink min-w-0 font-bold z-10'>
            {value}
          </span>
          <span className='rounded-r-lg bg-gray-100 py-1 px-2 basis-16'>
            {destination.unit}
          </span>
        </div>
      </div>
    </>
  )
}
