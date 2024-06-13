<script>
    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data.mission);
</script>

<div>
    <h2>내가만든미션</h2>
    {#each data.mission as mission}
        <div class="mission__example__box">
            <div class="mission__example__title">
                <p>{mission.missionName}</p>
            </div>
            <div class="mission__example__content">
                {#each mission.missionCheck as missionCheck}
                    <label for="">
                        {missionCheck.successMessage}
                        <input type={missionCheck.checkType} />
                    </label>
                    <br />
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .mission__example__box {
        border: 1px solid black;
        display: flex;
    }
    .mission__example__title {
        width: 50%;
    }
    .mission__example__content {
        width: 50%;
    }
</style>
