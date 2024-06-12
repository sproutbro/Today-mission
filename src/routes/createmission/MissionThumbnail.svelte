<script>
    // Store
    import { checkTypeArray } from "$lib/store.js";

    // Utils
    import { post } from "$lib/utils.js";

    // Props
    export let mission_name;

    async function createMission() {
        const url = "/createmission";
        const data = { $checkTypeArray, mission_name };
        const response = await post(url, data);
        console.log(response);
    }
</script>

<div>
    <h3>미션 미리보기</h3>
    <div class="mission__thumbnail__box">
        <div class="mission__thumbnail__title">
            {mission_name || "미션 이름을 적어주세요"}
        </div>

        <div class="mission__thumbnail__content">
            {#each $checkTypeArray as item, i}
                <label for="check_type_{i}">
                    {item.success_text || "완료!"}
                    <input
                        type={item.check_type}
                        name="check_type_{i}"
                        id="check_type_{i}"
                    />
                </label>
            {/each}
        </div>
    </div>
    <button on:click={createMission}>미션만들기</button>
</div>

<style>
    .mission__thumbnail__box {
        border: 1px solid black;
        display: flex;
    }
    .mission__thumbnail__title {
        width: 50%;
    }
    .mission__thumbnail__content {
        width: 50%;
    }
</style>
