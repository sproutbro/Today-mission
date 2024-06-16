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
                            action="?/acceptFriendRequest"
                            use:enhance
                        >
                            <button>수락</button>
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
            {#each data.friends as { userId }}
                <li>
                    <p>{userId} 님이 친구신청</p>
                </li>
            {/each}
        </ul>
    {/if}
</section>
