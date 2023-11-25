import Banner from "./components/Banner";
import Recipes from "./components/Recipes";

export default function Profile() {
  return (
    <section className="flex flex-col items-center min-h-screen w-full bg-base-200">
      <section className="flex flex-col items-center justify-center w-full p-1">
        <Banner />
        <div className="flex items-end gap-5 -mt-28 px-6 py- w-full">
          <img
            src="https://loremflickr.com/300/300"
            alt=""
            className="rounded w-52 h-52 border-2 border-secondary"
          />
          <div className="flex items-center justify-between w-full h-24 py-1">
            <div className="flex flex-col justify-between h-full">
              <p className="text-[24px] font-bold">John Doe</p>
              <small className="text-[14px] block text-accent">@johndoe</small>
              <small className="text-[14px] ">Joined since 2023</small>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <p className="text-[24px] font-bold">120</p>
                  <small className="text-accent">Followers</small>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[24px] font-bold">120</p>
                  <small className="text-accent">Following</small>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[24px] font-bold">120</p>
                  <small className="text-accent">Recipes</small>
                </div>
              </div>
              <button className="btn btn-primary !min-h-[2rem] !h-2">
                Message
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Recipes />
      </section>
    </section>
  );
}
