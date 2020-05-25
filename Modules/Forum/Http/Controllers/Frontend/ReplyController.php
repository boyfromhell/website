<?php

namespace Modules\Forum\Http\Controllers\Frontend;

use Modules\Core\Http\Controllers\Frontend\FrontendBaseController;
use Modules\Forum\Entities\Reply;
use Modules\Forum\Entities\Thread;
use Modules\Forum\Http\Requests\ReplyRequest;

class ReplyController extends FrontendBaseController
{
    /**
     * * Store a newly created resource in storage.
     *
     * @param  Thread $thread
     * @param  ReplyRequest $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Thread $thread, ReplyRequest $request)
    {
        $this->authorize('create', Reply::class);

        if ($thread->locked) {
            return response()->json(['status' => 'error', 'message' => 'Ce sujet est bloqué impossible de le commenter'], 422);
        }

        $thread->addReply([
            'body' => $request->get('body'),
            'user_id' => auth()->id()
        ])->load('owner');

        $thread->update(['last_posted_at' => now()]);

        return response()->json(['status' => 'success', 'message' => "Votre commentaire a été envoyé"]);
    }

    /**
     * Update a reply on the storage.
     *
     * @param  ReplyRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(ReplyRequest $request, $id)
    {
        $reply = Reply::find($id);

        $this->authorize('update', $reply);

        $reply->update(['body' => $request->get('body')]);

        return response()->json(['status' => 'success', 'message' => "Votre commentaire a été modifié"]);
    }

    /**
     * Delete the given reply.
     *
     * @param  Reply $reply
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Reply $reply)
    {
        $this->authorize('update', $reply);

        $reply->delete();

        return back()->with('success', 'Votre réponse a été supprimée.');
    }

    /**
     * Mark the best reply for a thread.
     *
     * @param  Reply $reply
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function best(Reply $reply)
    {
        $this->authorize('update', $reply->thread);

        $reply->thread->markBestReply($reply);

        return back()->with('success', 'Vous avez marqué cette réponse comme étant la meilleure.');
    }
}
