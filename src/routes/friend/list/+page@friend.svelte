<script>
    import { enhance } from "$app/forms";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<section>
    <h3>친구목록</h3>
    {#if data.sendReqeusts.length}
        <p>보낸 친구신청</p>
        <ul>
            {#each data.sendReqeusts as { friendId }}
                <li>{friendId} 대기중</li>
            {/each}
        </ul>
    {/if}
    {#if data.receivedRequests.length}
        <p>받은 친구신청</p>
        <ul>
            {#each data.receivedRequests as { userId }}
                <li>
                    <p>{userId}님 친구신청</p>
                    <div>
                        <form
                            method="post"
                            action="?/responseFriendRequest"
                            use:enhance
                        >
                            <input type="hidden" name="accept" value="true" />
                            <input type="hidden" name="userId" value={userId} />
                            <button>수락</button>
                        </form>
                        <form
                            method="post"
                            action="?/responseFriendRequest"
                            use:enhance
                        >
                            <input type="hidden" name="accept" value="false" />
                            <input type="hidden" name="userId" value={userId} />
                            <button>거절</button>
                        </form>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
    {#if data.friends.length}
        <p>내친구</p>
        <ul>
            {#each data.friends as value}
                <li>{value}</li>
            {/each}
        </ul>
    {/if}
</section>
