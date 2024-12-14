import { Link } from 'react-router-dom'
import servicesImg from '../../../assets/Home/Services-Section/b8akServices.png'
import bgcServicesImg from '../../../assets/Home/Services-Section/bgcServices.png'
import pulmbingImg from '../../../assets/Home/Services-Section/plumbing-work.svg'
import plumb from '../../../assets/services/plumb.png'
import womenCleaning from '../../../assets/services/women-cleaning.png'

export default function() {
  return (
    <section className="flex flex-col lg:flex-row items-center text-center py-12 px-4 sm:px-12 md:px-24 bg-slate-100 gap-8">
  {/* Right section - image container */}
  <div className="flex flex-col items-center text-center py-4 gap-4 lg:w-1/2 w-full">
    <h2 className="text-2xl sm:text-3xl font-normal text-yellow-500">خدماتنا</h2>
    <p className="text-xl sm:text-2xl font-medium text-black-400 pb-4">الخدمات المنزلية الشائعة</p>
    <img src={servicesImg} alt="Services-Section-Image" className="w-full max-w-sm" />
    <Link
      to=""
      className="py-2 px-6 text-lg border-2 rounded-full border-gray-400 hover:bg-gray-400 hover:text-white"
    >
      جميع الخدمات
    </Link>
  </div>

  {/* Left section - اقسام الخدمات */}
  <div className="flex flex-wrap justify-center items-center lg:w-1/2 w-full gap-2">
    {/* Part-1 */}
    <div className="flex flex-col justify-center items-center bg-white p-5 border w-full sm:w-[48%] ">
      <div className="flex justify-center items-center w-32 h-32 rounded-full bg-gray-100 mb-5">
        <img src={plumb} className="w-12 h-12" alt="pulmbingImg" />
      </div>
      <h3 className="text-lg font-bold mb-4 text-gray-800">تسليك الصرف الصحي</h3>
      <Link to="" className="text-lg text-gray-600 font-medium hover:text-gray-800">
        عرض الخدمة ←
      </Link>
    </div>

    {/* Part-2 */}
    <div className="flex flex-col justify-center items-center bg-white p-5 border w-full sm:w-[48%]">
      <div className="flex justify-center items-center w-32 h-32 rounded-full bg-gray-100 mb-5">
        <img src={womenCleaning} className="w-12 h-12" alt="pulmbingImg" />
      </div>
      <h3 className="text-lg font-bold mb-4 text-gray-800">عاملة منزلية بالشهر</h3>
      <Link to="" className="text-lg text-gray-600 font-medium hover:text-gray-800">
        عرض الخدمة ←
      </Link>
    </div>

    {/* Part-3 */}
    <div className="flex flex-col justify-center items-center bg-white p-5 border w-full sm:w-[48%]">
      <div className="flex justify-center items-center w-32 h-32 rounded-full bg-gray-100 mb-5">
        <img src={pulmbingImg} className="w-12 h-12" alt="pulmbingImg" />
      </div>
      <h3 className="text-lg font-bold mb-4 text-gray-800">  السباكة </h3>
      <Link to="" className="text-lg text-gray-600 font-medium hover:text-gray-800">
        عرض الخدمة ←
      </Link>
    </div>

    {/* Part-4 */}
    <div className="flex flex-col justify-center items-center bg-white p-5 border w-full sm:w-[48%]">
      <div className="flex justify-center items-center w-32 h-32 rounded-full bg-gray-100 mb-5">
        <img src={womenCleaning} className="w-12 h-12" alt="pulmbingImg" />
      </div>
      <h3 className="text-lg font-bold mb-4 text-gray-800"> عاملة منزلية بالساعة </h3>
      <Link to="" className="text-lg text-gray-600 font-medium hover:text-gray-800">
        عرض الخدمة ←
      </Link>
    </div>
  </div>
</section>

  )
}
