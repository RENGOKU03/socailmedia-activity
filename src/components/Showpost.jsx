function Showpost({ posts }) {
  return (
    <>
      <div className="flex space-y-4 justify-center flex-col">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post, index) => (
            <div className="flex bg-white shadow-lg rounded-lg mx-[25%] max-w-md md:max-w-2xl ">
              <div className="flex items-start px-4 py-6">
                <div className="">
                  <div className="flex items-center justify-between">
                    <h2
                      className="text-lg font-semibold text-gray-900 -mt-1"
                      key={post.username}
                    >
                      {post.username}
                    </h2>
                    <small className="text-sm text-gray-700" key={post.time}>
                      {post.time}
                    </small>
                  </div>
                  <p className="text-gray-700" key={post.userid}>
                    {post.userid}
                  </p>
                  <p className="mt-3 text-gray-700 text-sm" key={post.desc}>
                    {post.desc}
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex text-gray-700 text-sm mr-3">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span key={post.likes}>{post.likes}</span>
                    </div>
                    <div className="flex text-gray-700 text-sm mr-8">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                      <span key={post.comments}>post.comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>no posts available</p>
        )}
      </div>
    </>
  );
}
export default Showpost;
