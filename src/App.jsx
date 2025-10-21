import { useState } from "react";
import "./App.css";

function SocialLink({ imgUrl, name, place, title, github, frontend, linkdin }) {
  return (
    <>
      <div className="min-h-screen bg-Grey-900 flex items-center justify-center text-white">
        <div className="bg-Grey-800 rounded-lg p-10 text-center flex flex-col items-center">
          <img
            src={imgUrl}
            alt="user profile"
            className="rounded-full size-24"
          />
          <div className="text-3xl font-semibold">{name}</div>
          <div className="text-sm text-green-400 font-semibold">{place}</div>
          <div>{title}</div>

          <div className="w-full p-2 bg-Grey-700 rounded-md m-2 font-bold">
            {github}
          </div>
          <div className="w-full p-2 bg-Grey-700 rounded-md m-2 font-bold">
            {frontend}
          </div>
          <div className="w-full p-2 bg-Grey-700 rounded-md m-2 font-bold">
            {linkdin}
          </div>
          <div className="w-full p-2 bg-Grey-700 rounded-md m-2 font-bold">
            Twitter
          </div>
          <div className="w-full p-2 bg-Grey-700 rounded-md m-2 font-bold">
            Instagram
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div
    onMouseEnter={()=>setHover(!hover)}
    onMouseLeave={()=>setHover(!hover)}
    >
      {!hover ? (
        <SocialLink
          imgUrl={"assets/images/avatar-jessica.jpeg"}
          name={"Jessica Randall"}
          place={"London, United Kingdom"}
          title={"Front-end developer and avid reader"}
          github={"Github"}
          linkdin={"Linkdin"}
          frontend={"Frontend Mentor"}
        />
      ) : (
        <SocialLink
          imgUrl={"assets/images/personal.jpg"}
          name={"Devank Singh"}
          place={"Uttar Pradesh, India"}
          title={"Front-end developer and game dev"}
          github={<a href="https://github.com/AdreshSingh">Github</a>}
          linkdin={<a href="linkedin.com/in/devank-singh-101k">Linkdin</a>}
          frontend={<a href="https://www.frontendmentor.io/profile/Arpit-devank">Frontend Mentor</a>}
        />
      )}
    </div>
  );
}

export default App;
