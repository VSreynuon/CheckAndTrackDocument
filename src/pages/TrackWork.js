import React from 'react'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'

export default function TrackWork() {
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        {/* Stepper */}
        <Stepper/>
        {/* Navigation controls */}
        <StepperControl/>
    </div>
  )
}
