'use client'

import { SyntheticEvent, useState } from 'react'

export function Form () {
  const [values, setValues] = useState({
    plot: ''
  })

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLButtonElement

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <form className='flex flex-col gap-4'>
      <h4>Deja tu reseña</h4>
      <textarea className='bg-transparent w-full' name='plot' value={values.plot} onChange={handleChange} />
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  )
}
