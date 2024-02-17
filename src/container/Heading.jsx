function Heading({text}) {
    return (
      <div>
        <div className="text-center w-[80px] h-1 m-auto bg-bgpColor rounded-sm"></div>
        <div className=" text-[4rem] font-bold text-icon-color text-center uppercase">
          {text}
        </div>
      </div>
    );
}
export default Heading