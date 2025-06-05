import React from 'react'
import Hometrust from '../../components/Home/hometrust/Hometrust'
import PricingBanner from '../../components/Pricing/PricingBanner'
import Pricingcomparision from '../../components/Pricing/Pricingcomparision'
import ServicesTextiMonial from '../../components/Services/ServicesTextiMonial'
import SettingFaq from '../../components/Services/SettingFaq'

export default function Pricing() {
  return (
    <div>
        <PricingBanner/>
        <Pricingcomparision/>
        <Hometrust/>
        <ServicesTextiMonial/>
        <SettingFaq/>
    </div>
  )
}
