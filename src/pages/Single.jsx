import React from "react";
import { Link } from "react-router-dom";
import OtherPost from "../components/OtherPost";

const Single = () => {
  return (
    <div className="flex md:flex-row flex-col gap-20 justify-between mt-10">
      <div className="md:w-[70%] flex flex-col mx-4 md:mx-0 gap-8">
        <div className="relative my-4">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="s1"
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <div className=" w-full  h-full absolute md:top-4 top-2 md:left-6 left-2 bg-lightGreen shadow -z-10 rounded-xl"></div>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="ava"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <div className="flex flex-col leading-4">
            <h1 className="font-semibold">Wandy</h1>
            <span>Posted 2 days ago</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to={`/write?edit=2`}
              className="flex gap-2 hover:after:content-['Edit'] hover:after:text-lightGreen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </Link>
            <div className="flex gap-2 hover:after:content-['Delete'] hover:after:text-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className="text-base leading-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat possimus optio inventore repellendus incidunt laboriosam
            nobis. Unde cumque beatae voluptas doloribus error quibusdam nulla,
            magni ex sint, iste nam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Debitis eius velit possimus repellat. Voluptas,
            animi rerum quae ipsa velit a explicabo, cum aperiam cumque, debitis
            officiis. Maxime ea necessitatibus soluta. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Assumenda numquam at quibusdam
            aspernatur praesentium minima perferendis ducimus! Quo autem porro
            similique. Incidunt deserunt nihil molestiae laboriosam possimus
            libero nostrum blanditiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione beatae adipisci laboriosam vel modi. Rem
            impedit dolore nulla repudiandae suscipit temporibus laudantium
            voluptas exercitationem corrupti. Enim repellendus neque sint ipsam.
            <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ullam, nesciunt tempora modi ut accusamus quam voluptas harum
            neque autem aut eligendi aperiam ratione recusandae, optio
            aspernatur! Voluptate libero excepturi nemo. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Asperiores amet odit sint ipsum
            ipsam consequatur accusamus delectus quibusdam exercitationem omnis.
            Maiores obcaecati sequi magnam, eos nostrum iure non nesciunt amet!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            maxime eaque laudantium, itaque libero sapiente unde. Ad consectetur
            rem expedita optio aliquam, omnis tenetur vero. Quae tenetur vero
            blanditiis aspernatur!
          </p>
        </div>
      </div>
      <div className="md:w-[30%] mx-4 md:mx-0 my-4">
        <OtherPost/>
      </div>
    </div>
  );
};

export default Single;
