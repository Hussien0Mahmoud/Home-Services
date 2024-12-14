
import ServicesSections from "../../Components/Services/ServicesSections/ServicesSections"
import ServicesGroup from "../../Components/Services/ServicesGroup/ServicesGroup"
import ServiceTest from "../../Components/Services/ServiceTest/ServiceTest"
import ServiceTest2 from "../../Components/Services/ServiceTest2/ServiceTest2"
import ServicesIntrodus from "../../Components/Services/ServicesIntrodus/ServicesIntrodus"
import ServicesHeader from "../../Components/Services/ServicesHeader/ServicesHeader"
// import HomeBanner from "../../Components/HomeBanner/HomeBanner"


export default function Services() {
  return (
    <>
     {/* <HomeBanner/> */}
     <ServicesHeader/>
    <ServicesSections/>
    {/* <ServicesGroup/> */}
    {/* <ServiceTest/> */}
    {/* <ServiceTest2/> */}
    <ServicesIntrodus/>

    </>
  )
}
