<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div>
    <h2>내가만든미션</h2>
    {#if data.mission}
        {#each data.mission as mission}
            <div class="mission__example__box">
                <div class="mission__example__title">
                    <p>{mission.missionName}</p>
                </div>
                <div class="mission__example__content">
                    {#each mission.MissionCheck as missionCheck}
                        <label for="">
                            {missionCheck.message}
                            <input type={missionCheck.type} />
                        </label>
                        <br />
                    {/each}
                </div>
            </div>
        {/each}
    {/if}
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
