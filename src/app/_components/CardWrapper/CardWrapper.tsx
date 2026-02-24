import Link from "next/link";
import { CardWrapperProps } from "./CardWrapper.types";

const CardWrapper: React.FC<CardWrapperProps> = ({
  link,
  children,
  className,
}) => {
  return link ? (
    <Link className={className} href={link}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
};

export default CardWrapper;
