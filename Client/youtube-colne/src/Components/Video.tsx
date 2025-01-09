const Video = () => {
  return (
    <>
      <div className="grid grid-cols-5 max-sm:grid-cols-1 gap-3 m-10 max-sm:m-0 max-sm:my-3 max-sm:gap-5">
        <div className="bg-[#ddd] rounded-xl hover:rounded-none transition-all duration-200 cursor-pointer shadow-xl  w-fit h-fit">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWktmc7O5MU2ZzKa8oTqugCLU7dzVc78ANA&s"
              alt=""
              className="w-full rounded-xl transition-all duration-200 hover:rounded-none"
            />
          </div>
          <div className="flex items-center gap-3 m-3">
            <div>
              <div className="w-10 h-10 bg-white rounded-full"></div>
            </div>
            <div>
              <h1 className="font-bold">Spring Boot & Spring Data JPA</h1>
              <p>userName</p>
              <div className="flex justify-between text-[#727171]">
                <p>47k views</p>
                <p>10 months ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
