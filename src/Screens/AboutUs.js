import React from "react";
import Layout from "./../Layout/Layout";
import Head from "../Components/Head";

function AboutUs() {
  return (
    <Layout>
      <div className=" min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our CineStream
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium necessitatibus nisi inventore aut qui dolor
                  nostrum cumque voluptate voluptas suscipit quis, rerum quo,
                  aliquid et culpa quam dolorum eveniet, obcaecati optio! Sunt
                  praesentium nihil eum minus iste voluptas error at. Modi sed
                  fugit amet neque inventore molestias reprehenderit ipsum odit
                  maiores itaque maxime, magnam, ab nisi. Temporibus animi
                  aspernatur, rem possimus beatae illum! Officiis qui possimus
                  recusandae, consequatur consequuntur accusantium!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium necessitatibus nisi inventore aut qui dolor
                  nostrum cumque voluptate voluptas suscipit quis, rerum quo,
                  aliquid et culpa quam dolorum eveniet, obcaecati optio! Sunt
                  praesentium nihil eum minus iste voluptas error at.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-blue-950 rounded-lg">
                  <span className="text-3xl block font-extrabold mt-4">
                    10K
                  </span>
                  <h4 className="text-lg font-semibold my-2"> Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat, eligendi!
                  </p>
                </div>
                <div className="p-8 bg-blue-950 rounded-lg">
                  <span className="text-3xl block font-extrabold mt-4">8K</span>
                  <h4 className="text-lg font-semibold my-2"> Lovely Userss</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Completely free, without registration!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="https://creativereview.imgix.net/content/uploads/2021/12/I-Care-a-Lot.jpg?auto=compress,format&q=60&w=1013&h="
                alt="aboutus"
                className="w-full xl:block hidden h-header rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
