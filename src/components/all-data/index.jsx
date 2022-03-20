import React from 'react'
import BirthDayData from '../bday-data'
import ContactInfoData from '../contact-info-data'
import NameData from '../name-data'
import { GeneralBoxMessage } from '../../styles/general-box-message'

const AllData = () => {
  return (
    <GeneralBoxMessage>
      <NameData />
      <BirthDayData />
      <ContactInfoData />
    </GeneralBoxMessage>
  )
}

export default AllData