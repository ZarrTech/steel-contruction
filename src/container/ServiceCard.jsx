import { services, servicesIcons } from "../data";

const ServiceCard = () => {
    return (
        <div className=" mt-7 grid  grid-cols-1 sm:grid-cols-3 p-7 gap-7">
        {services.map((service, index) => {
          const { url, header, text} = service
          return (
            <div
              key={index}
              className="card h-[300px] w-full  rounded-lg relative overflow-hidden mt-7 flex"
            >
              <div className=" bg-black/40 absolute w-full h-full"></div>
              <div className=" bg-cover  bg-center h-full w-full">
                <img className=" h-full w-full" src={url} alt={url} />
              </div>

              <div className="sm:cardContent flex sm:pt-[10rem] pt-[7rem] absolute z-50 h-full items-end">
                <div className=" bg-gradient-to-b from-transparent/55 to-black p-[1.5rem]">
                  <h1 className="relative cardTitle text-[2rem] sm:text-[2rem] capitalize font-bold">
                    {header}
                  </h1>
                  <p className="mt-6 text-[1.5rem] font-medium">{text}</p>

                  <button className=" py-3 px-4 bg-icon-color mt-7 rounded-md font-semibold text-xl capitalize">learn more</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  );

  
}
export default ServiceCard