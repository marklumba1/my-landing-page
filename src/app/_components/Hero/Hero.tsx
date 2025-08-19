import Announcement from "../Announcement/Announcement";
import Button from "../Button/Button";
import data from "./data.json";
export default function Hero() {
  const { headline, subheadline, announcement, cta, badge } = data;
  return (
    <div className="flex flex-col py-20 gap-5 items-center">
      <Announcement link="/" text={announcement} label={badge} />
      <h1 className="font-bold text-5xl text-center max-w-96">{headline}</h1>
      <p>{subheadline}</p>
      <div className="flex gap-2 w-full justify-center">
        {cta.map((cta) => (
          <Button label={cta.label} type={cta.type} />
        ))}
      </div>
    </div>
  );
}
