export default function Card() {
  return (
    <section
      id="card"
      className="flex flex-col gap-5 bg-base-200 p-2 shadow-xl rounded-xl w-full mb-8 border border-secondary"
    >
      <div id="card-header" className="flex gap-5">
        <button className="flex flex-row items-start btn h-fit p-1 pr-3">
          <img
            src="https://loremflickr.com/300/300"
            alt=""
            className="w-20 rounded"
          />
          <div className="flex flex-col items-start">
            <p className="text-lg font-bold">
              John Doe{" "}
              <small className="text-[12px] font-normal text-neutral-500">
                ∙ 20min
              </small>
            </p>
            <small className="block text-accent">@johndoe</small>
          </div>
        </button>
      </div>
      <div id="card-body" className="flex flex-col gap-5 p-1 w-full">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          mollitia aperiam nostrum architecto fugiat laudantium tempora saepe et
          illo numquam sed excepturi iusto omnis possimus vel deserunt,
          sapiente, cumque debitis?
        </div>
        <div className="flex gap-5 rounded-md bg-base-100 h-[20rem] w-full">
          <figure className="max-w-[40%] w-[40%] rounded-tl-md rounded-bl-md bg-[url(https://loremflickr.com/300/300)] bg-center bg-no-repeat bg-cover"></figure>
          <div className="card-body justify-between max-w-[60%] w-[60%] pt-4">
            <div>
              <h2 className="card-title text-accent mb-2">Chocolate cake</h2>
              <ul>
                <li className="flex items-center gap-1 my-1">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L12.058 2.05806C12.3021 1.81398 12.6978 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13361 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.49998 8.49998V4.09998C5.06992 4.09998 3.09998 6.06992 3.09998 8.49998C3.09998 10.93 5.06992 12.9 7.49998 12.9C8.715 12.9 9.815 12.4075 10.6112 11.6112L7.49998 8.49998Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <small className="text-[12px] font-normal text-neutral-500">
                    ∙ 30 min
                  </small>
                </li>
                <li className="flex items-center gap-1 my-1">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <small className="text-[12px] font-normal text-neutral-500">
                    ∙ 2 persons
                  </small>
                </li>
                <p className="mt-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  delectus, et, nisi aperiam excepturi quibusdam exercitationem
                  perferendis necessitatibus quam dignissimos eum magnam vitae
                  minus explicabo soluta quas accusamus odit voluptate.
                </p>
              </ul>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
