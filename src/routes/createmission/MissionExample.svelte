<div>
    <h3>미션 예제</h3>
    <div class="mission__example__box">
        <div class="mission__example__title">
            <p>밥먹기</p>
        </div>

        <div class="mission__example__content">
            <label for="">
                아침밥
                <input type="checkbox" />
            </label>
            <br />
            <label for="">
                점심에 먹은걸 적어주세요
                <input type="text" />
            </label>
            <br />
            <label for="">
                저녘밥먹은시간을 기록해주세요
                <input type="time" />
            </label>
        </div>
    </div>
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
