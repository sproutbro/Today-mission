<script>
    import { enhance } from "$app/forms";

    /** @type {import ('./$types').ActiosData }*/
    export let form;
</script>

{#if form?.status}
    {form.status}
    {form.message}
{/if}

<form method="post" action="?/signin" use:enhance>
    <h3>로그인</h3>
    <div>
        <label for="userId">
            아이디
            <input
                type="text"
                name="id"
                id="userId"
                minlength="3"
                maxlength="15"
                required
            />
        </label>
    </div>
    <div>
        <label for="password">
            비밀번호
            <input
                type="password"
                name="password"
                id="password"
                minlength="3"
                maxlength="15"
                required
            />
        </label>
    </div>
    <button formaction="?/signin">로그인</button>
</form>

<form method="post" action="?/signup" use:enhance>
    <h3>회원가입</h3>
    <div>
        <label for="signup__id">
            아이디
            <input
                type="text"
                name="id"
                id="signup__id"
                minlength="3"
                maxlength="15"
                required
            />
        </label>
    </div>
    <div>
        <label for="signup__password">
            비밀번호
            <input
                type="password"
                name="password"
                id="signup__password"
                minlength="3"
                maxlength="15"
                required
            />
        </label>
    </div>
    <button formaction="?/signup">회원가입</button>
</form>
