import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="home">
      <div className="posts flex flex-col md:gap-36 gap-12 mt-14">
        {posts.map((post) => (
          <div className="post md:flex md:flex-row md:gap-24 px-3 md:px-8 odd:flex-row-reverse" key={post.id}>
            <div className="img relative md:w-3/5 flex mx-2 md:mx-0">
              <img src={post.img} alt="post" className=" w-full object-cover max-h-[400px] rounded-xl shadow-xl" />
              <div className=" w-full  h-full absolute md:top-4 top-2 md:left-6 left-2  bg-lightGreen shadow -z-10 rounded-xl"></div>
            </div>
            <div className="content mx-2 mt-4 md:mt-0 md-mx-0 flex flex-col justify-between">
              <Link className="link" to={`/post/${post.id}`}>
                <h1 className=" text-2xl md:text-5xl">{post.title}</h1>
              </Link>
              <p className="md:text-lg text-sm">{post.desc}</p>
              <button className=" max-w-fit text-xs mt-1 md:text-base md:mt-0  bg-white px-2 py-1 border border-lightGreen text-lightGreen hover:bg-lightGreen hover:text-white md:rounded-xl rounded">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
