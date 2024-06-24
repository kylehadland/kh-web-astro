import { useEffect, useState } from "react"
import SourceForm from "./SourceForm"
import DestForm from "./DestForm"

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  )

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value, storageKey])

  return [value, setValue]
}

export default function ScaleComp() {
  const sourceDefault = {
    zero: 4.0,
    span: 20.0,
    unit: "mA",
    value: 4.0,
  }

  const destinationDefault = {
    zero: 0,
    span: 100,
    unit: "%",
  }

  const [source, setSource] = useLocalStorage("sourceData", sourceDefault)

  const [destination, setDestination] = useLocalStorage("destinationData", [
    destinationDefault,
  ])

  const addDestination = () => {
    setDestination([...destination, destinationDefault])
  }

  const removeDestination = (item) => {
    const newDestination = destination.filter((dest) => {
      return dest !== item
    })
    setDestination(newDestination)
  }

  const swapSourceDest = () => {
    const oldDestination = { ...destination[0], value: 0 }
    const { value, ...oldSource } = source

    const newDestination = destination.map((dest, index) => {
      return index == 0 ? oldSource : dest
    })

    setDestination(newDestination)
    setSource(oldDestination)
  }

  const editDestination = (item, change) => {
    const newDestination = destination.map((dest) => {
      if (dest == item) {
        return { ...dest, ...change }
      }
      return { ...dest }
    })
    setDestination(newDestination)
  }

  return (
    <>
      <section className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        <SourceForm source={source} setSource={setSource} />

        {destination.map((destination, index) => {
          return (
            <div key={index} className='p-2 border rounded-md bg-white'>
              <DestForm
                source={source}
                destination={destination}
                remove={removeDestination}
                edit={editDestination}
                index={index}
              />
            </div>
          )
        })}

        <div className='flex flex-col min-h-60'>
          <button
            className='p-2 grow rounded-md w-full my-2 bg-gray-500 hover:bg-gray-600 text-white'
            onClick={addDestination}
          >
            Add another
          </button>
          <button
            className='p-2 grow rounded-md w-full my-2 bg-gray-400 hover:bg-gray-500 text-white'
            onClick={swapSourceDest}
          >
            Swap
          </button>
        </div>
      </section>
    </>
  )
}
