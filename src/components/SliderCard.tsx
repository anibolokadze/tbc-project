import Spline from "@splinetool/react-spline";
import React from "react";
import Link from "next/link";

const Card = ({ title, src, link, color, i }: any) => {
  return (
    <>
      <div className="cardContainer">
        <div
          className="card"
          style={{ backgroundColor: color, top: `calc(-3vh + ${i * 25}px)` }}
        >
          <Link href={link}>
            <h2 className="text-white hover:underline">{title}</h2>
          </Link>

          <div className="body">
            {/* <p className="text-white italic text-end">{description}</p> */}
            {/* <div className="description">
      <p>{description}</p>
      <span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          See more
          <svg
            width="22"
            height="12"
            viewBox="0 0 22 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
              fill="black"
            />
          </svg>
        </a>
      </span>
    </div> */}

            <div className="imageContainers">
              <div className="inner">
                <Spline scene={src} />
              </div>
            </div>

            {/* <div className="imageContainers">
      <div className="inner">
        <Image src={src} alt="image" width={500} height={300} />
      </div>
    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
