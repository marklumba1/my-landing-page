import CardProps from "../Card/Card.types";


const Timeline = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-y-10 text-3xl relative overflow-hidden py-20">
      {cards.map((card, index) => {
        const switchCard = index % 2 === 0;
        const leftClass = "rounded-s-xl p-2 bg-white h-full w-fit pr-10 -mr-5"
        const rightClass = "rounded-e-xl p-2 bg-white h-full w-fit pl-10 -ml-5"

        const pill = <p className={`${switchCard ? leftClass + " rotate-3" : rightClass + " -rotate-3"} w-fit text-6xl flex items-center -mt-[8px] -mr-1`}>{card.pills?.join("")}</p>
        const position = <p className={`${!switchCard ? leftClass + " text-end rotate-2" : rightClass + " -rotate-2"} text-4xl`} >{card.heading}<br/>{card.description}</p> 

        const leftContent = switchCard ? pill : position
        const rightContent = switchCard ? position : pill

        return (
          <div key={index} className="contents">
            <div className="place-items-end">{leftContent}</div>
            <div className="w-20">

                <div className="w-20 h-full bg-green-500 z-10 absolute rounded-t-3xl top-2"/>
            </div>
            <div>{rightContent}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline