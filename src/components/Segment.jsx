import { useNavigate } from "react-router-dom"

function Other() {

  const navigate = useNavigate()
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl googlehandfont">New Collection of Cars</h2>

      <p className="mx-auto mt-10 text-gray-500 under">
      Explore our latest selection of premium vehicles. Whether you`re seeking luxury, efficiency, or adventure, we have the perfect car for you. Discover models that blend innovative technology with exceptional design, ensuring a driving experience like no other. Don’t miss out on your dream car—check out our collection today!
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 scale-95 ">
      <li className="border-2 border-black">
        <a href="#" className="group relative block">
          <img
            src="https://parkers-images.bauersecure.com/wp-images/18465/930x620/01-family-van.jpg"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Casual Cars</h3>

            <span
              onClick={()=>navigate(`/search?segment=Casual`)}
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Check Out
            </span>
          </div>
        </a>
      </li>

      <li className="border-2 border-black">
        <a href="#" className="group relative block">
          <img
            src="https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Premium collections</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              onClick={()=>navigate(`/search?segment=Premium`)}

            >
              Check Out
            </span>
          </div>
        </a>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 border-2 border-black">
        <a href="#" className="group relative block">
          <img
            src="https://i.pinimg.com/736x/ec/45/6d/ec456da229dd3b036e4bbab8b01e9dc5.jpg"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Luxury collections</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              onClick={()=>navigate('/search?segment=Luxury')}
            >
              Check Out
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
  )
}

export default Other