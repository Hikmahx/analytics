import React from "react";

const Insights = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mt-8">
      <h2 className="font-bold text-3xl md:text-4xl flex flex-col mb-6">
        <span className="flex items-center mb-1">ZooTools Insights</span>
        <span className="font-normal text-base md:text-[1.4rem]">
          Making anayltics simple and actionable
        </span>
      </h2>
      <div className="flex items-start flex-col lg:flex-row gap-x-32">
        <div className="">
          <h3 className="font-bold mb-4 lg:text-xl">Summary</h3>
          <div className="">
            <div className="mb-4 flex items-center gap-x-4">
              <div className="bg-[#fd6353] w-9 h-9 p-3 rounded-md">
                <span className="">
                  <svg
                    fill="#fff"
                    // width="800px"
                    // height="800px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" />
                  </svg>
                </span>
              </div>
              <p className="">
                <span className="font-bold">Signups are slowing down. </span>-5%
                new than last week
              </p>
            </div>
            <div className="mb-4 flex items-center gap-x-4">
              <div className="bg-[#57fd5f] w-9 h-9 p-3 rounded-md">
                <span className="">
                  <svg
                    fill="#fff"
                    // width="800px"
                    // height="800px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z" />
                  </svg>
                </span>
              </div>
              <p className="">
                <span className="font-bold">80%</span> of your signup were
                invites by a friend
              </p>
            </div>
            <div className="mb-4 flex items-center gap-x-4">
              <div className="bg-[#fee15b] w-9 h-9 p-2 rounded-md">
                <span className="">
                  <svg
                    // width="800px"
                    // height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7C9.23858 7 7 9.23858 7 12C7 13.3613 7.54402 14.5955 8.42651 15.4972C8.77025 15.8484 9.05281 16.2663 9.14923 16.7482L9.67833 19.3924C9.86537 20.3272 10.6862 21 11.6395 21H12.3605C13.3138 21 14.1346 20.3272 14.3217 19.3924L14.8508 16.7482C14.9472 16.2663 15.2297 15.8484 15.5735 15.4972C16.456 14.5955 17 13.3613 17 12C17 9.23858 14.7614 7 12 7Z"
                      stroke="#000000"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 4V3"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 6L19 5"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 12H21"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H3"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 5L6 6"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 17H14"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="">
                <span className="font-bold">80%</span> of your signup were
                invites by other members.
              </p>
            </div>
            <div className="mb-4 flex items-center gap-x-4">
              <div className="bg-[#fee15b] w-9 h-9 p-2 rounded-md">
                <span className="">
                  <svg
                    // width="800px"
                    // height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7C9.23858 7 7 9.23858 7 12C7 13.3613 7.54402 14.5955 8.42651 15.4972C8.77025 15.8484 9.05281 16.2663 9.14923 16.7482L9.67833 19.3924C9.86537 20.3272 10.6862 21 11.6395 21H12.3605C13.3138 21 14.1346 20.3272 14.3217 19.3924L14.8508 16.7482C14.9472 16.2663 15.2297 15.8484 15.5735 15.4972C16.456 14.5955 17 13.3613 17 12C17 9.23858 14.7614 7 12 7Z"
                      stroke="#000000"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 4V3"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 6L19 5"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 12H21"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H3"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 5L6 6"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 17H14"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="">
                <span className="font-bold">80%</span> of your signup were
                invites by a friend
              </p>
            </div>
          </div>
        </div>
        <div className="font-bold mt-6 lg:mt-0">
          <h3 className="lg:text-xl mb-4">Recommendation</h3>
          <p className="">
            Make sure to promote and{" "}
            <a href="/" className="underline hover:underline-offset-4">
              share your form
            </a>
          </p>
          <p className="mt-8">
            Congrats! This is huge. Keep giving rewards to your users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
