/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '@/components/Post';
import { IPost } from 'interfaces';

type Props = {
  posts: IPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Blog = ({ posts }: Props) => {
  const isPreview = true;
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Blog
            </h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl leading-7 text-gray-500">
                Full length articles on engineering management, technology and leadership.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post: any, index: number) => {
              return (
                <div key={index}>
                  <Post isPreview={isPreview} key={index} {...post} />;
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
