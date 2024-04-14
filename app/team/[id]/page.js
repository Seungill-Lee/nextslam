'use client'
 
import { usePathname } from 'next/navigation';
 
export default function ExampleClientComponent() {
  const params = usePathname() 

  //console.log({params})
 
  return (
    <>{params.split("/").pop()}</>
  )
}