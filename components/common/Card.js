import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useRouter } from "next/router";

export const Card = ({ data, caption, show, path }) => {
  const navigator = useRouter()
  return (
    <>
      <div onClick={() => {data.target && navigator.push(data.target)}} className="card" style={{cursor: "pointer"}}>
        <div className="card-img">
          <img
            src={data.cover}
            alt={data.title}
            style={{ backgroundPosition: "center", backgroundSize: "contain" }}
          />
        </div>
        <div className="card-details">
            <TitleSm title={data.title} />
          {caption && (
            <p>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </p>
          )}
          <div className="flex">
            <span> {data.catgeory} </span>{" "}
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
