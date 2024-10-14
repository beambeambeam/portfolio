import { useEffect, useState } from 'react'

const Clock = () => {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <h1 className="text-[6rem] font-bold">
      {value.getHours().toString().padStart(2, '0')}:
      {value.getMinutes().toString().padStart(2, '0')}
    </h1>
  )
}

export default Clock
