import Moment from 'react-moment';

const PostMeta = ({ date }) => {
  return (
    <>
      <div className="w-max-content mx-auto">
        <p className="align-items inline-block px-2 py-0 text-base leading-6 ml-2 uppercase font-medium text-gray-300">
          By Simon Young
        </p>
        <p className="align-items inline-block px-2 text-gray-300">
          <svg
            className="h-6 w-6 my-2 relative inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <Moment
            date={date}
            format="DD MMM YYYY"
            className="text-base leading-6 ml-2 uppercase font-medium inline-block"
          />
        </p>
      </div>
    </>
  );
};
export default PostMeta;