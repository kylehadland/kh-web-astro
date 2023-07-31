import ranges from "./ranges"

export default function SourceForm({ source, setSource }) {
  return (
    <>
      <div className='p-2 border rounded-md bg-white'>
        <h3 className='font-bold'>
          Source {source.zero} to {source.span} {source.unit}
        </h3>

        <div className='flex border border-gray-200 rounded-lg my-1'>
          <label for='sourceSelect' className='hidden'>
            Quick Select
          </label>
          <select
            id='sourceSelect'
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
          <label
            for='sourceUnit'
            className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'
          >
            Unit
          </label>
          <input
            id='sourceUnit'
            className='rounded-r-lg bg-white py-1 px-2 grow shrink min-w-0 z-10'
            type='text'
            onChange={(e) =>
              setSource((prev) => ({ ...prev, unit: e.target.value }))
            }
            value={source.unit}
          />
        </div>

        <div className='flex border border-gray-200 rounded-lg my-1'>
          <label
            for='sourceZero'
            className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'
          >
            Zero
          </label>
          <input
            id='sourceZero'
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
          <label
            for='sourceSpan'
            className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'
          >
            Span
          </label>
          <input
            id='sourceSpan'
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
          <label
            for='sourceValue'
            className='rounded-l-lg bg-gray-100 py-1 px-2 basis-16 text-right shrink-0'
          >
            Value
          </label>
          <input
            id='sourceValue'
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
    </>
  )
}
