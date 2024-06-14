<script>
    import { enhance } from "$app/forms";
    import { post } from "$lib/utils.js";

    /** @type {import('./$types').ActionData} */
    export let form;

    async function handleAddFriend() {
        const userId = form.user;
        const url = "/friend";
        const data = { userId };
        const response = await post(url, data);
        console.log(response);
    }
</script>

<section>
    <div>
        <form method="post" use:enhance>
            <label for="friendUserId">친구아이디</label>
            <input type="text" name="friendUserId" id="friendUserId" />
            <button>친구찾기</button>
        </form>
        {#if form?.user}
            <div>
                <span>
                    {form.user}
                </span>
                <button on:click={handleAddFriend}>친구신청</button>
            </div>
        {/if}
        {#if form?.message}
            {form.message}
        {/if}
    </div>
</section>
