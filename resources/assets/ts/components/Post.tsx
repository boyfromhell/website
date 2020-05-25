import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import moment from "moment";
import 'moment/locale/fr';

import { PostType } from "@/utils/types";

moment.locale('fr');

interface Props {
  post: PostType;
}

export default ({ post }: Props) => {
  const [author, setAuthor] = useState(post.creator);

  useEffect(() => {
    if (post.propose) {
      setAuthor(post.propose);
    }
  }, []);

  return (
    <div className="w-full">
      <InertiaLink
        className="block rounded-lg bg-white h-75 shadow-md hover:shadow-lg overflow-hidden"
        href={`/blog/${post.slug}`}
      >
        <img
          src={post.image}
          className="object-cover w-full h-45 lg:h-40"
          alt={post.title}
        />
        <div className="p-4 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">
              {post.category.name}
            </span>
            <span className="h-10 flex text-truncate">
              <h4 className="text-sm text-gray-700 font-medium text-wrap">{post.title}</h4>
            </span>
          </div>
          <span className="flex mt-6 items-center">
            <img
              src={author.picture}
              className="h-12 w-12 rounded-full mr-4"
              alt={author.full_name}
            />
            <span className="flex flex-col">
              <span className="text-sm text-gray-600">{author.full_name}</span>
              <small className="text-xs text-gray-400 capitalize">Le {moment(post.published_at).format('LL')}</small>
            </span>
          </span>
        </div>
      </InertiaLink>
    </div>
  );
};
