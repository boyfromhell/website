import React from "react";
import Helmet from "react-helmet";
import { InertiaLink } from "@inertiajs/inertia-react";

import Layout from "@/includes/layout";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="pt-10 pb-12 h-87 bg-gradient-white">
        <div className="container">
          <h1 className="text-brand-primary text-3xl mb-6">Laravel Cameroun</h1>
          <p className="text-gray-600 text-sm mb-10">
            Bienvenue sur le site de la communauté des développeurs PHP et Laravel du Cameroun, le
            plus gros rassemblement de développeurs au Cameroun.
          </p>
          <InertiaLink href="/tutorials" className="p-2 bg-brand-100 items-center text-gray-700 rounded-lg lg:rounded-full flex lg:inline-flex" role="alert">
            <span className="flex rounded-full bg-brand-900 uppercase px-2 py-1 text-xs font-bold mr-4 text-white">New</span>
            <span className="font-normal mr-2 text-left flex-auto text-xs">
              Mise à jour du site Web, nous avons ajouté une section <span className="text-brand-primary">tutoriels</span>. Visitez maintenant!
            </span>
            <svg className="fill-current opacity-75 h-4 w-4 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </InertiaLink>
        </div>
      </div>
      <div className="container mt-8">
        <div className="w-full space-y-4">
          <InertiaLink href="/jobs" className="flex p-4 bg-white rounded-lg shadow-md w-full cursor-pointer items-center">
            <span className="bg-brand-primary p-3 rounded-full flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.41.938h13.18A3.408 3.408 0 0120 4.348v8.159a3.408 3.408 0 01-3.41 3.41H4.564L.96 18.919a.586.586 0 01-.961-.45V4.348A3.408 3.408 0 013.41.938zm13.18 13.807a2.237 2.237 0 002.238-2.238v-8.16A2.237 2.237 0 0016.59 2.11H3.41a2.237 2.237 0 00-2.238 2.239v12.87l2.804-2.337a.585.585 0 01.375-.136H16.59zM4.98 5.33h1.254c.324 0 .586.262.586.586v3.765a1.843 1.843 0 01-1.84 1.841 1.843 1.843 0 01-1.842-1.84.586.586 0 011.172 0 .67.67 0 001.339 0v-3.18h-.67a.586.586 0 010-1.172zm4.706 0a2.157 2.157 0 00-2.155 2.155v1.883c0 1.188.967 2.154 2.155 2.154a2.157 2.157 0 002.155-2.154V7.486A2.157 2.157 0 009.686 5.33zm.983 4.037a.984.984 0 01-1.966 0V7.486a.984.984 0 011.966 0v1.882zm2.469-4.037h1.883a1.84 1.84 0 011.346 3.096 1.84 1.84 0 01-1.346 3.096h-1.883a.586.586 0 01-.586-.585V5.917c0-.324.263-.586.586-.586zm.586 2.51h1.297c.886 0 .885-1.338 0-1.338h-1.297V7.84zm0 2.51h1.297c.886 0 .885-1.338 0-1.338h-1.297v1.339z" fill="currentColor" />
              </svg>
            </span>
            <span className="block">
              <h4 className="text-gray-700 font-bold mb-1">Offre d'emploi</h4>
              <p className="text-xs font-light text-gray-600">Consultez les offres d'emploi les plus récentes et postulez rapidement.</p>
            </span>
          </InertiaLink>
          <InertiaLink href="/forum" className="flex p-4 bg-white rounded-lg shadow-md w-full cursor-pointer items-center">
            <span className="bg-brand-primary p-3 rounded-full flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.071 2.931A9.938 9.938 0 0010 0a9.938 9.938 0 00-7.072 2.931C-.718 6.575-.982 12.395 2.265 16.34c-.448.917-.976 1.529-1.575 1.822a.936.936 0 00-.511.975c.063.407.373.72.779.783.222.034.46.055.708.055 1.228 0 2.518-.423 3.595-1.164C6.71 19.59 8.34 20 9.999 20a9.934 9.934 0 007.072-2.927A9.931 9.931 0 0020 10.004a9.94 9.94 0 00-2.929-7.073zm-.8 13.338A8.815 8.815 0 0110 18.865a8.87 8.87 0 01-4.491-1.218.586.586 0 00-.285-.08.59.59 0 00-.348.117c-1.282.993-2.572 1.14-3.138 1.152.675-.503 1.24-1.282 1.714-2.366a.569.569 0 00-.097-.603C.254 12.366.418 7.03 3.728 3.723A8.816 8.816 0 0110 1.126c2.367 0 4.596.922 6.272 2.597 3.46 3.463 3.46 9.091 0 12.546zM5.786 6.522h8.428c.311 0 .569.29.569.652 0 .362-.253.652-.57.652H5.787c-.316 0-.569-.29-.569-.652 0-.362.253-.652.57-.652zm8.428 2.608H5.786c-.316 0-.569.29-.569.653 0 .362.253.652.57.652h8.427c.316 0 .569-.29.569-.652 0-.363-.258-.653-.57-.653zm-8.428 3.044h8.428c.311 0 .569.29.569.652 0 .362-.253.652-.57.652H5.787c-.316 0-.569-.29-.569-.652 0-.362.253-.652.57-.652z" fill="currentColor" />
              </svg>
            </span>
            <span className="block">
              <h4 className="text-gray-700 font-bold mb-1">Forum</h4>
              <p className="text-xs font-light text-gray-600">Rendez vous sur le forum pour discuter de tout ce qui concerne le code/design.</p>
            </span>
          </InertiaLink>
          <InertiaLink href="/slack" className="flex p-4 bg-white rounded-lg shadow-md w-full cursor-pointer items-center">
            <span className="bg-brand-primary p-3 rounded-full flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.19 12.16a4.648 4.648 0 012.012 1.814.673.673 0 01-.256.933.714.714 0 01-.961-.249 3.304 3.304 0 00-2.718-1.587 2.451 2.451 0 01-.237 0c-1.12.04-2.154.64-2.718 1.587a.714.714 0 01-.961.25.672.672 0 01-.256-.934 4.638 4.638 0 012.012-1.814 2.561 2.561 0 01-.65-1.702c0-1.443 1.207-2.616 2.692-2.616 1.484 0 2.692 1.173 2.692 2.616 0 .65-.246 1.244-.65 1.702H6.19zm-1.949-.457c.666-.046 1.193-.587 1.193-1.246 0-.689-.577-1.25-1.286-1.25-.709 0-1.285.561-1.285 1.25 0 .659.527 1.2 1.192 1.246.105-.002.081-.002.186 0zm13.664 2.27a.673.673 0 01-.256.935.715.715 0 01-.96-.25 3.304 3.304 0 00-2.72-1.587 2.45 2.45 0 01-.236 0c-1.12.04-2.154.64-2.718 1.588a.714.714 0 01-.96.249.673.673 0 01-.257-.934 4.638 4.638 0 012.012-1.814 2.562 2.562 0 01-.65-1.702c0-1.443 1.208-2.616 2.692-2.616 1.484 0 2.692 1.173 2.692 2.616 0 .65-.245 1.244-.65 1.702a4.644 4.644 0 012.012 1.814zm-3.96-2.27c.665-.046 1.192-.587 1.192-1.246 0-.689-.576-1.25-1.285-1.25-.71 0-1.286.561-1.286 1.25 0 .659.527 1.2 1.193 1.246.105-.002.082-.002.186 0zm-2.109-4.886a3.304 3.304 0 00-2.76-1.59c-.094.002-.058.002-.152 0a3.304 3.304 0 00-2.76 1.59.714.714 0 01-.961.25.673.673 0 01-.257-.934 4.643 4.643 0 012.013-1.817 2.56 2.56 0 01-.651-1.702C6.308 1.173 7.515 0 9 0c1.484 0 2.692 1.173 2.692 2.614a2.56 2.56 0 01-.652 1.702 4.64 4.64 0 012.014 1.817.673.673 0 01-.257.933.714.714 0 01-.96-.25zM9.071 3.86c.676-.036 1.215-.58 1.215-1.246 0-.687-.577-1.247-1.286-1.247-.709 0-1.285.56-1.285 1.247 0 .665.539 1.21 1.215 1.246.112-.002.042-.002.141 0z" fill="currentColor" />
              </svg>
            </span>
            <span className="block">
              <h4 className="text-gray-700 font-bold mb-1">Rejoignez-nous</h4>
              <p className="text-xs font-light text-gray-600">Rejoignez une communauté de milliers de développeurs comme vous.</p>
            </span>
          </InertiaLink>
        </div>
      </div>
    </div>
  );
};

Home.layout = (page: React.ReactNode) => <Layout children={page} />;

export default Home;