import { cardDetails } from "../utils/data";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-8">
      {cardDetails.map(({ title, value, icon }) => (
        <div className="flex flex-col flex-wrap items-start my-3 md:my-10 bg-pure py-5 px-5 space-y-2 shadow-lg w-[300px] md:w-[212px] cursor-pointer hover:scale-110 transition ease-in duration-500">
          <img src={icon} alt="" />
          <p>{title}</p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
