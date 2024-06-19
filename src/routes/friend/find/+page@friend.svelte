<script>
    import { enhance } from "$app/forms";

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<section>
    <div>
        <form method="post" action="?/findFriend" use:enhance>
            <label for="friendUserId">친구아이디</label>
            <input type="text" name="friendUserId" id="friendUserId" />
            <button>친구찾기</button>
        </form>
        {#if form?.user}
            <div>
                <form method="post" action="?/addFriend" use:enhance>
                    <label>
                        {form.user}
                        <input
                            type="hidden"
                            name="findUser"
                            value={form.user}
                        />
                    </label>
                    <button>친구신청</button>
                </form>
            </div>
        {/if}
        {#if form?.message}
            {form.message}
        {/if}
    </div>
</section>
