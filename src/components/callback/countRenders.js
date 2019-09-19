import { useRef } from 'react'

export const countRenders = () => {
  const renders = useRef(0);
  console.log('renders: ', renders.current++);
}