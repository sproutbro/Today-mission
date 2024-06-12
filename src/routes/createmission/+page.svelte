<script>
    // Components
    import MissionCheckBox from "./MissionCheckBox.svelte";
    import MissionExample from "./MissionExample.svelte";
    import MissionThumbnail from "./MissionThumbnail.svelte";

    // Input value
    let mission_name = "";
</script>

<section>
    <h2>미션 만들기</h2>
    <div class="mission__create_box">
        <label for="mission_name">
            미션이름
            <input
                type="text"
                name="mission_name"
                id="mission_name"
                placeholder="미션이름"
                bind:value={mission_name}
            />
        </label>
        <MissionCheckBox />
    </div>
    <MissionExample />
    <MissionThumbnail {mission_name} />
</section>

<style>
    .mission__create_box {
        border: 1px solid black;
    }
</style>
