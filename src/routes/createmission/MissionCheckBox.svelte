<script>
    // Store
    import { checkTypeArray } from "$lib/store.js";

    // Tag
    let mission_check_item = "";
    let mission_check_box = "checkbox";

    // function
    function addCheckType(e) {
        e.preventDefault();
        checkTypeArray.set([...$checkTypeArray, {}]);
    }

    function deleteCheckType(e, i) {
        e.preventDefault();
        $checkTypeArray.splice(i, 1);
        checkTypeArray.set($checkTypeArray);
    }
</script>

<div class="mission__check__box" bind:this={mission_check_box}>
    <div>
        <span>미션체크</span>
        <button on:click={addCheckType}>추가하기</button>
    </div>
    {#each $checkTypeArray as { }, i}
        <div class="mission__check__item" bind:this={mission_check_item}>
            <label for="mission_check_type_{i}">
                체크타입
                <select
                    name="mission_check_type_{i}"
                    id="mission_check_type_{i}"
                    bind:value={$checkTypeArray[i].check_type}
                >
                    <option value="checkbox">체크박스</option>
                    <option value="writing">글쓰기</option>
                    <option value="time">시간체크</option>
                </select>
            </label>
            <label for="success_text_{i}">
                완료메세지
                <input
                    type="text"
                    name="success_text_{i}"
                    id="success_text_{i}"
                    placeholder="완료!"
                    bind:value={$checkTypeArray[i].success_text}
                />
            </label>
            {#if 1 < $checkTypeArray.length}
                <button on:click={(e) => deleteCheckType(e, i)}>삭제</button>
            {/if}
        </div>
    {/each}
</div>
