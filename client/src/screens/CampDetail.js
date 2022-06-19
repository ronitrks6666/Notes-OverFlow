import React from 'react'
import { useSelector } from 'react-redux'











export default function CampDetail() {
    const oneCamp = useSelector((state) => state.getOneCampReducer)
    const {campitem} = oneCamp
    console.log(campitem)
  return (
    <div>CampDetail</div>
  )
}
