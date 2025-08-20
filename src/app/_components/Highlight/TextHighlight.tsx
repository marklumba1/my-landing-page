export default function TextHighlight({text}: {text: string}) {
  return (
    <span className=" bg-lime-300 whitespace-nowrap [mask-image:url('/brushstroke.png')]    [mask-size:100%_90%] [mask-repeat:no-repeat] [mask-position:center]">
      {text}
    </span>
  );
}
