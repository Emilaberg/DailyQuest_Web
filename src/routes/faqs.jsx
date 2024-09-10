function faqs() {
  function showDetails(event) {
    const accordion = event.currentTarget;
    const content = accordion.lastChild;
    if (content.className.includes("opacity-0")) {
      let classname = content.className;
      classname = classname.replace(
        "opacity-0 max-h-0",
        "opacity-100 max-h-20"
      );
      content.className = classname;
    } else if (content.className.includes("opacity-100")) {
      let classname = content.className;
      classname = classname.replace(
        "opacity-100 max-h-20",
        "opacity-0 max-h-0"
      );
      content.className = classname;
    }
  }
  return (
    <>
      <section className="flex flex-col w-[40%]">
        <h1 className="text-lightSlateGray text-center text-4xl font-semibold mb-10">
          Search after frequently asked questions
        </h1>
        {/* extra om vi vill ha söka genom problem */}
        {/* <div className="flex justify-center text-white w-full">
            <input
              type="search"
              className="w-full text-midnightBlue px-2 py-1 rounded-lg"
            />
          </div>
          <div></div> */}
      </section>

      {/* accordion container */}
      <div className="w-[40%] flex flex-col gap-3">
        {/* accordion item */}
        <div
          onClick={showDetails}
          className=" border-b border-solid border-gray-300 pb-3"
        >
          {/* visible items/title */}
          <div className="flex text-adminLightSlateGray font-bold text-2xl justify-between cursor-pointer items-center">
            {/* prompt */}
            <span>
              What types of quizzes and trivia are available on your website?
            </span>
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
              height={30}
            >
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </div>
          {/* hidden item/content */}
          <div className="opacity-0 max-h-0 overflow-hidden text-white transition-all ease-in-out duration-500">
            <div>
              <p className="py-2 pl-4 font-bold text-lightSlateGray">
                This question addresses the variety of content available. Users
                want to know if the quizzes cover different genres, such as
                general gaming knowledge, specific game franchises, or even
                niche topics like retro games or eSports.
              </p>
            </div>
          </div>
        </div>
        {/* accordion item */}
        <div
          onClick={showDetails}
          className=" border-b border-solid border-gray-300 pb-3"
        >
          {/* visible items/title */}
          <div className="flex text-adminLightSlateGray font-bold text-2xl justify-between cursor-pointer items-center">
            {/* prompt */}
            <span>How can I participate in the daily quizzes?</span>
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
              height={30}
            >
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </div>
          {/* hidden item/content */}
          <div className="opacity-0 max-h-0 overflow-hidden text-white transition-all ease-in-out duration-500">
            <div>
              <p className="py-2 pl-4 font-bold text-lightSlateGray">
                This question explains the process of joining the daily quizzes.
                It can include details on whether users need to create an
                account, how to access the quizzes, and any specific steps they
                need to follow to participate.
              </p>
            </div>
          </div>
        </div>
        {/* accordion item */}
        <div
          onClick={showDetails}
          className=" border-b border-solid border-gray-300 pb-3"
        >
          {/* visible items/title */}
          <div className="flex text-adminLightSlateGray font-bold text-2xl justify-between cursor-pointer items-center">
            {/* prompt */}
            <span>
              Are there any rewards or prizes for participating in the quizzes?
            </span>
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
              height={30}
            >
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </div>
          {/* hidden item/content */}
          <div className="opacity-0 max-h-0 overflow-hidden text-white transition-all ease-in-out duration-500">
            <div>
              <p className="py-2 pl-4 font-bold text-lightSlateGray">
                Users are often motivated by incentives. This question clarifies
                if there are any rewards, such as points, badges, or even
                tangible prizes for high scores or consistent participation.
              </p>
            </div>
          </div>
        </div>
        {/* accordion item */}
        <div
          onClick={showDetails}
          className=" border-b border-solid border-gray-300 pb-3"
        >
          {/* visible items/title */}
          <div className="flex text-adminLightSlateGray font-bold text-2xl justify-between cursor-pointer items-center">
            {/* prompt */}
            <span>Can I create and submit my own quizzes?</span>
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
              height={30}
            >
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </div>
          {/* hidden item/content */}
          <div className="opacity-0 max-h-0 overflow-hidden text-white transition-all ease-in-out duration-500">
            <div>
              <p className="py-2 pl-4 font-bold text-lightSlateGray">
                This question addresses user engagement and content creation.
                Allowing users to submit their own quizzes can increase
                interaction and provide a diverse range of content. The
                explanation can include guidelines for submission and any review
                process.
              </p>
            </div>
          </div>
        </div>
        {/* accordion item */}
        <div
          onClick={showDetails}
          className=" border-b border-solid border-gray-300 pb-3"
        >
          {/* visible items/title */}
          <div className="flex text-adminLightSlateGray font-bold text-2xl justify-between cursor-pointer items-center">
            {/* prompt */}
            <span>
              How do you ensure the accuracy of the quiz questions and answers?
            </span>
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
              height={30}
            >
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </div>
          {/* hidden item/content */}
          <div className="opacity-0 max-h-0 overflow-hidden text-white transition-all ease-in-out duration-500">
            <div>
              <p className="py-2 pl-4 font-bold text-lightSlateGray">
                This question is about the credibility and reliability of the
                content. Users want to know that the information provided is
                accurate and well-researched. The explanation can detail the
                sources used, the review process, and any expert involvement in
                creating the quizzes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default faqs;
