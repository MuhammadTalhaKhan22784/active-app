import React from 'react'
import Select from 'react-select'

import {
  mcq1PageData,
  mcq2PageData,
  mcq31PageData,
  mcq32PageData,
  mcq33PageData,
  mcq4PageData,
  weeklyProgram1,
} from '../componentsData/selectDataForMultipleChoices'

import '../css/MultipleChoicesPages.css'

const handleChange = (newValue) => {
  console.log(newValue)
}
const SelectForMCQ1 = () => {
  const isSearchable = false

  return (
    <Select
      options={mcq1PageData}
      defaultValue={mcq1PageData[0]}
      className='select-mcq-container'
      classNamePrefix='select-mcq'
      onChange={handleChange}
      isSearchable={isSearchable}
    />
  )
}
const SelectForMCQ2 = () => {
  const isSearchable = false

  return (
    <Select
      options={mcq2PageData}
      defaultValue={mcq2PageData[0]}
      className='select-mcq-container'
      classNamePrefix='select-mcq'
      onChange={handleChange}
      isSearchable={isSearchable}
    />
  )
}

const SelectForMCQ3_1 = () => {
  const isSearchable = false
  return (
    <Select
      options={mcq31PageData}
      defaultValue={mcq31PageData[0]}
      className='select-mcq-container'
      classNamePrefix='select-mcq'
      onChange={handleChange}
      isSearchable={isSearchable}
    />
  )
}

const SelectForMCQ3_2 = () => {
  const isSearchable = false

  return (
    <Select
      options={mcq32PageData}
      defaultValue={mcq32PageData[0]}
      className='select-mcq-container'
      classNamePrefix='select-mcq'
      onChange={handleChange}
      isSearchable={isSearchable}
    />
  )
}

const SelectForMCQ3_3 = () => {
  const isSearchable = false

  return (
    <Select
      options={mcq33PageData}
      defaultValue={mcq33PageData[0]}
      className='select-mcq-container'
      classNamePrefix='select-mcq'
      onChange={handleChange}
      isSearchable={isSearchable}
    />
  )
}
const SelectForMCQ4 = () => {
  const isSearchable = false

  return (
    <Select
      options={mcq4PageData}
      defaultValue={mcq4PageData[0]}
      className='select-mcq-container'
      classNamePrefix='select-mcq'
      onChange={handleChange}
      isSearchable={isSearchable}
    />
  )
}

const SelectForMCQ5 = () => {
  const isSearchable = false

  return (
    <Select
      options={weeklyProgram1}
      defaultValue={weeklyProgram1[0]}
      className='select-mcq-container'
      classNamePrefix='select-mcq'
      onChange={handleChange}
      isSearchable={isSearchable}
    />
  )
}

export {
  SelectForMCQ1,
  SelectForMCQ2,
  SelectForMCQ3_1,
  SelectForMCQ3_2,
  SelectForMCQ3_3,
  SelectForMCQ4,
  SelectForMCQ5,
}
