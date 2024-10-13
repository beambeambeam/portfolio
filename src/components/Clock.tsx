import { useState, useEffect } from 'react'

const Clock = () => {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <h1 className="font-bold text-[6rem]">
      {value.getHours()}:{value.getMinutes()}
    </h1>
  )
}

export default Clock
