import Banner from "../Banner/Banner";
import { services as storedServices } from "../../assets/data/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const param = useParams()
  const services = storedServices
  const [service, setService] = useState({})

  useEffect(() => {
    setService(services.filter(service => service.id == param.id)[0])
  }, [])

  return (
    <>
      <Banner title={service.title} subtitle="تفاصيل الخدمة" />
      <div className="bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-4 py-8">
          <p className="mb-4">
            Effective Date: 2024-7-15
          </p>
          <div className='w-full flex'>
            <h1 className="text-3xl font-bold mb-4 text-orange-800">Terms of Service for Your Business </h1>
          </div>
          <br />
          <p className="mb-4 text-base">{service.description}</p>
          <br />
          {/* <!-- repeat this section for each section of terms --> */}
          <div className='pb-5'>
            <h2 className='font-bold text-orange-700 dark:text-orange-300'>General</h2>

            <br />
            <ul>
              <li className='list-disc'>
                <p className="text-base">
                  By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                </p>
              </li>
              <br />
              <li className='list-disc'>
                <p className="text-base">
                  We reserve the right to change these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service. Any updates you will be notified via email.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
