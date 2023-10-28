import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  // ik tareqa ye hai
  const data = useLoaderData()
  // 2nd way ye hai
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // fetch("https://api.github.com/users/aryan8784")
  //   fetch("https://api.github.com/users/faraz186")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-yellow-100 text-black font-bold text-4xl p-5 m-10  rounded ">
      Github followers : {data.followers}
      <div className=" flex items-center justify-center mt-9 ">
        <img
          className="rounded-xl"
          src={data.avatar_url}
          alt="Git Picture"
          width={300}
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aryan8784");
  return response.json();
};
