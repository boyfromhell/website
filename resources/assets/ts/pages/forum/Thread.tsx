import React, { useEffect, useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";

import Layout from "@/includes/Layout";
import Seo from "@/includes/Seo";
import Breadcrumb from "@/includes/Breadcrumb";

import { ReplyType, ThreadType } from "@/utils/types";
import { timeAgo } from "@/utils/helpers";
import Sidebar from "@/components/forum/Sidebar";
import Reply from "@/components/forum/Reply";
import ReplyModal from "@/pages/forum/ReplyModal";
import DeleteModal from "@/components/DeleteModal";
import NotifyAlert from "@/components/NotifyAlert";
import ThreadModal from "@/pages/forum/ThreadModal";

const Thread = () => {
  const { thread, auth, flash } = usePage();
  const { user } = auth;
  const [message, setMessage] = useState("");
  const [notify, setNotify] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {
    slug,
    title,
    body,
    creator,
    channel,
    visits,
    replies_count,
    local_created_at,
    replies,
    best_reply_id,
  }: ThreadType = thread;

  useEffect(() => {
    updateCodeSyntaxHighlighting();

    if (flash.success) {
      setNotify(true);
      setMessage(flash.success);
    }
  }, []);

  function updateCodeSyntaxHighlighting() {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  return (
    <>
      <Seo title={title} />
      <Breadcrumb
        homeLink="/forum"
        homeTitle="Forum"
        parentTitle={channel.name}
        parentLink={`/forum/channels/${channel.slug}`}
        title={title}
      />
      <div className="bg-white lg:hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:py-6 sm:px-6">
          <h1 className="text-lg md:text-xl text-gray-800">{title}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:py-6 sm:px-6 mt-12">
        <div className="grid lg:grid-cols-4 lg:gap-10">
          <Sidebar page="show" thread={thread} />
          <div className="col-span-3">
            <div className="bg-white shadow flex flex-col px-6 py-4 rounded-lg mb-4 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <InertiaLink
                    href={`/u/@${creator.username}`}
                    className="h-10 w-10 flex items-center mr-4"
                  >
                    <img
                      className="rounded-full bg-cover"
                      src={creator.picture}
                      alt={creator.full_name}
                    />
                  </InertiaLink>
                  <p>
                    <span className="text-gray-800 font-medium">@{creator.username}</span>
                    <span className="text-gray-500 text-sm ml-2 hidden md:inline-flex">{timeAgo(local_created_at)}</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center thread-metadata">
                    <div className="mr-4 text items-center hidden sm:flex">
                      <svg
                        className="h-5 w-5 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9.333H2.667A1.333 1.333 0 011.334 8V2.667c0-.734.6-1.334 1.333-1.334h8A1.333 1.333 0 0112 2.667V4h1.334a1.333 1.333 0 011.333 1.333V14a.666.666 0 01-1.133.467L11.053 12h-5.72A1.333 1.333 0 014 10.667V9.333zM4 8V5.333C4 4.6 4.6 4 5.333 4h5.334V2.667h-8V8H4zm9.334-2.667h-8v5.334h6a.667.667 0 01.466.2l1.534 1.526v-7.06z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>{replies_count}</span>
                    </div>
                    <div className="mr-4 items-center hidden sm:flex">
                      <svg
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.56 17.66a8 8 0 01-11.32 0L1.3 12.7a1 1 0 010-1.42l4.95-4.95a8 8 0 0111.32 0l4.95 4.95a1 1 0 010 1.42l-4.95 4.95-.01.01zm-9.9-1.42a6 6 0 008.48 0L20.38 12l-4.24-4.24a6 6 0 00-8.48 0L3.4 12l4.25 4.24h.01zM11.9 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>{visits}</span>
                    </div>
                    <InertiaLink
                      href={`/forum/channels/${channel.slug}`}
                      className={`text-xs text-center font-medium py-2 px-3 rounded-full bg-opacity-${channel.slug} text-brand-${channel.slug} md:text-sm`}
                    >
                      {channel.name}
                    </InertiaLink>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="markdown text-gray-800 text-sm md:text-base">
                  <ReactMarkdown
                    source={body}
                    escapeHtml={false}
                    renderers={{
                      Link: (props) => {
                        const { href, children } = props;
                        return <a href={href}>{children}</a>;
                      },
                    }}
                    skipHtml
                  />
                </div>
                {
                  (user !== null && user.id === creator.id) && (
                    <div className="flex space-x-10 mt-4">
                      {best_reply_id === null && (
                        <div className="flow-root">
                          <button
                            type="button"
                            onClick={() => setIsVisible(true)}
                            className="-m-2 px-2 py-1 space-x-2 flex items-center rounded-md text-xs font-medium leading-6 text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                          >
                            <svg
                              className="flex-shrink-0 h-4 w-4 text-gray-400"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <span>Modifier</span>
                          </button>
                        </div>
                      )}
                      <div className="flow-root">
                        <button
                          onClick={() => setShow(true)}
                          type="button"
                          className="-m-2 px-2 py-1 space-x-2 flex items-center rounded-md text-xs font-medium leading-6 text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-red-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          <span>Supprimer</span>
                        </button>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            {
              replies.map((reply: ReplyType) => (
                <Reply key={reply.id} reply={reply} />
              ))
            }
            {user !== null && <ThreadModal thread={thread} isOpen={isVisible} onClose={() => setIsVisible(false)} />}
            {
              user === null && (
                <p className="text-center text-gray-800 font-medium mt-10">
                  Veuillez vous <InertiaLink href="/login" className="link">connecter</InertiaLink>{" "}
                  ou{" "}
                  <InertiaLink href="/register" className="link">créer un compte</InertiaLink> pour participer à cette conversation.
                </p>
              )
            }
            {
              user !== null && (
                <div className="mt-10">
                  <div className="flex items-center px-6">
                    <img src={user.picture} alt={user.full_name} className="h-12 w-12 rounded-full mr-4" />
                    <button
                      className="w-full bg-white text-left shadow text-sm p-6 rounded-md hover:shadow-md"
                      type="button"
                      onClick={() => setOpen(true)}
                    >
                      Laisser un commentaire...
                    </button>
                  </div>
                  <ReplyModal isOpen={open} onClose={() => setOpen(false)} thread={thread} />
                </div>
              )
            }
          </div>
        </div>
      </div>
      <DeleteModal
        title="Supprimer le Sujet"
        description="Voulez-vous vraiment supprimer ce sujet? Toutes les réponses seront définitivement supprimées. Cette action ne peut pas être annulée."
        show={show}
        confirmURL={`/forum/${channel.slug}/${slug}`}
        cancelAction={() => setShow(false)}
      />
      <NotifyAlert show={notify} onClose={() => setNotify(false)} message={message} />
    </>
  );
};

Thread.layout = (page: React.ReactNode) => <Layout child={page} />;

export default Thread;
