
import { FaWrench, FaBroom } from "react-icons/fa";
const services = [
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      title: "عاملة منزلية بالشهر",
      description:
        "التعريف بخدمة تسليك الصرف الصحي وهي عبارة عن الخدمة الخاصة بفتح انسداد مواسير الصرف الصحي في…",
      icon: <FaWrench className="text-blue-500 text-3xl" />,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100",
      title: "تسليك الصرف الصحي",
      description:
        "عاملة منزلية بالشهر تم تدريبها بكفاءة عالية لتساعدكِ على القيام بأعمال البيت كما يجب، قد تعتبر…",
      icon: <FaWrench className="text-blue-500 text-3xl" />,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/100",
      title: "تركيب و صيانة الاجهزة المنزلية",
      description:
        "التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…",
      icon: <FaWrench className="text-yellow-400 text-3xl" />,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/100",
      title: "تركيب و صيانة الاجهزة المنزلية",
      description:
        "التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…",
      icon: <FaWrench className="text-yellow-400 text-3xl" />,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/100",
      title: "تركيب و صيانة الاجهزة المنزلية",
      description:
        "التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…",
      icon: <FaWrench className="text-yellow-400 text-3xl" />,
    },
  ];
  

export default function ServiceTest() {
  return (
    <section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Section Title */}
    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

    {/* Services Flexbox */}
    <div className="flex flex-wrap justify-center gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition w-full sm:w-[48%] md:w-[22%]"
        >
          {/* Image */}
          <div className="flex justify-center mb-4">
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="flex text-xl font-semibold mb-2 text-gray-800 items-center gap-2">
            {/* Icon */}
            <div>{service.icon}</div>
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
