import { useEffect, useState } from "react"
import ranges from "./ranges"

const Destination = ({ source }) => {
  const [destination, setDestination] = useState({
    zero: 0,
    span: 100,
    unit: "%",
    value: 0,
  })

  useEffect(() => {
    function calculate() {
      // (source.value-source.zero)*(destination.span-destination.zero)/(source.span-source.zero)+destination.span)
      const result =
        ((source.value - source.zero) * (destination.span - destination.zero)) /
          (source.span - source.zero) +
        destination.zero
      setDestination({ ...destination, value: result.toFixed(2) })
    }
    calculate()
  }, [source, destination.zero, destination.span, destination.unit])

  return (
    <div>
      <h3 className='font-bold'>
        Destination {destination.zero} to {destination.span} {destination.unit}
      </h3>

      <div className='flex border border-gray-200 rounded-lg my-1 '>
        <select
          className='p-2 grow rounded-lg'
          onChange={(e) =>
            setDestination({
              ...ranges[e.target.value],
            })
          }
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
        <span className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'>
          Unit
        </span>
        <input
          className='rounded-r-lg bg-white py-1 px-2 grow shrink min-w-0 z-10'
          type='text'
          onChange={(e) =>
            setDestination((prev) => ({ ...prev, unit: e.target.value }))
          }
          value={destination.unit}
        />
      </div>

      <div className='flex border border-gray-200 rounded-lg my-1'>
        <span className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'>
          Zero
        </span>
        <input
          className='rounded-none bg-white py-1 px-2 grow shrink min-w-0 z-10'
          type='number'
          // inputMode='decimal'
          onChange={(e) =>
            setDestination((prev) => ({
              ...prev,
              zero: parseFloat(e.target.value),
            }))
          }
          value={destination.zero}
        />
        <span className='rounded-r-lg bg-gray-100 py-1 px-2 basis-16'>
          {destination.unit}
        </span>
      </div>

      <div className='flex border border-gray-200 rounded-lg my-1'>
        <span className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'>
          Span
        </span>
        <input
          className='rounded-none bg-white py-1 px-2 grow shrink min-w-0 z-10'
          type='number'
          // inputMode='decimal'
          onChange={(e) =>
            setDestination((prev) => ({
              ...prev,
              span: parseFloat(e.target.value),
            }))
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
          {destination.value}
        </span>
        <span className='rounded-r-lg bg-gray-100 py-1 px-2 basis-16'>
          {destination.unit}
        </span>
      </div>
    </div>
  )
}

export default function ScaleComp() {
  const [source, setSource] = useState({
    zero: 4.0,
    span: 20.0,
    unit: "mA",
    value: 4.0,
  })

  const [destQty, setDestQty] = useState(1)

  return (
    <>
      <section className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        <div className='p-2 border rounded-md bg-white'>
          <h3 className='font-bold'>
            Source {source.zero} to {source.span} {source.unit}
          </h3>

          <div className='flex border border-gray-200 rounded-lg my-1'>
            <select
              className='p-2 grow rounded-lg'
              onChange={(e) =>
                setSource({
                  ...ranges[e.target.value],
                  value: ranges[e.target.value].zero,
                })
              }
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

          <div className='flex border border-gray-200 rounded-lg my-1'>
            <span className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'>
              Unit
            </span>
            <input
              className='rounded-r-lg bg-white py-1 px-2 grow shrink min-w-0 z-10'
              type='text'
              onChange={(e) =>
                setSource((prev) => ({ ...prev, unit: e.target.value }))
              }
              value={source.unit}
            />
          </div>

          <div className='flex border border-gray-200 rounded-lg my-1'>
            <span className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'>
              Zero
            </span>
            <input
              className='rounded-none bg-white py-1 px-2 grow shrink min-w-0 z-10'
              type='number'
              // inputMode='decimal'
              onChange={(e) =>
                setSource((prev) => ({
                  ...prev,
                  zero: parseFloat(e.target.value),
                }))
              }
              value={source.zero}
            />
            <span className='rounded-r-lg bg-gray-100 py-1 px-2 basis-16'>
              {source.unit}
            </span>
          </div>

          <div className='flex border border-gray-200 rounded-lg my-1'>
            <span className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'>
              Span
            </span>
            <input
              className='rounded-none bg-white py-1 px-2 grow shrink min-w-0 z-10'
              type='number'
              // inputMode='decimal'
              onChange={(e) =>
                setSource((prev) => ({
                  ...prev,
                  span: parseFloat(e.target.value),
                }))
              }
              value={source.span}
            />
            <span className='rounded-r-lg bg-gray-100 py-1 px-2 basis-16'>
              {source.unit}
            </span>
          </div>

          <div className='flex border border-gray-200 rounded-lg my-1'>
            <span className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'>
              Value
            </span>
            <input
              className='rounded-none bg-white py-1 px-2 grow shrink min-w-0 z-10'
              type='number'
              onChange={(e) => {
                const str = e.target.value
                if (str.charAt(str.length - 1) === ".") return
                // if (str.charAt(0) === "-" && str.length == 1) return
                setSource((prev) => ({ ...prev, value: parseFloat(str) }))
              }}
              value={source.value}
              // min={source.zero}
              // max={source.span}
            />
            <span className='rounded-r-lg bg-gray-100 py-1 px-2 basis-16'>
              {source.unit}
            </span>
          </div>
        </div>

        {[...Array(destQty)].map((value, index) => {
          return (
            <div key={index} className='p-2 border rounded-md bg-white'>
              <Destination source={source} />
            </div>
          )
        })}

        <button
          className='p-2 rounded-md w-full my-2 bg-gray-400 hover:bg-gray-500 text-white'
          onClick={() => setDestQty(destQty + 1)}
        >
          Add another
        </button>
      </section>
    </>
  )
}
