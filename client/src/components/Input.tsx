import { SyntheticEvent } from 'react'

type Types = 'text' | 'password'

interface Props {
  type: Types
  name: string
  value: string
  myOnChange: (e: SyntheticEvent) => void
}

export function Input ({ type, name, value, myOnChange }: Props) {
  return <input type={type} name={name} value={value} onChange={myOnChange} />
}
