<script>
</script>

<section>
    <div class="flex flex-col space-y-4">
        <div class="title-box">
            <h1>정균이가 오늘할일</h1>
        </div>
        <div class="content-box flex flex-col space-y-2">
            <div class="content-item">
                <div class="mission-title w-1/2">
                    <p>공부</p>
                    <p>시간</p>
                </div>
                <div class="mission-content w-1/2">
                    <p>할수있는만큼</p>
                    <div>
                        <form action="/">
                            <label for="studyTime">1시간</label>
                            <input
                                type="checkbox"
                                name="studyTime"
                                id="studyTime"
                            />
                            <label for="studyTime">1시간</label>
                            <input
                                type="checkbox"
                                name="studyTime"
                                id="studyTime"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>운동</p>
                </div>
                <div class="mission-content w-1/2"></div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>강아지산책</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <input type="checkbox" name="dogWalk" id="dogWalk" />
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>스쿼트 20회</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <input type="checkbox" name="squat" id="squat" />
                        <input type="checkbox" name="squat" id="squat" />
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>팔굽혀펴기 10회</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <input type="checkbox" name="pushUp" id="pushUp" />
                        <input type="checkbox" name="pushUp" id="pushUp" />
                        <input type="checkbox" name="pushUp" id="pushUp" />
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>철봉 10회</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <input type="checkbox" name="pullUp" id="pullUp" />
                        <input type="checkbox" name="pullUp" id="pullUp" />
                        <input type="checkbox" name="pullUp" id="pullUp" />
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>영어명언 스누피공책에 추가하기</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <input
                            type="checkbox"
                            name="wiseSaying"
                            id="wiseSaying"
                        />
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>기상시간은?</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <label for="wakeUpTime">AM</label>
                        <input type="time" name="wakeUpTime" id="wakeUpTime" />
                        <label for="wakeUpTime">PM</label>
                        <input type="time" name="wakeUpTime" id="wakeUpTime" />
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>취침시간은?</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <label for="wakeUpTime">AM</label>
                        <input type="time" name="bedtime" id="bedtime" />
                        <label for="wakeUpTime">PM</label>
                        <input type="time" name="bedtime" id="bedtime" />
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>휴식시간에 한것</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <textarea name="restTime" id="restTime"></textarea>
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="mission-title w-1/2">
                    <p>집안일 한것</p>
                </div>
                <div class="mission-content w-1/2">
                    <form action="/">
                        <textarea name="housework" id="housework"></textarea>
                    </form>
                </div>
            </div>
            <div class="content-item flex">
                <div class="w-1/3">
                    <p>아침</p>
                    <form action="/">
                        <input
                            type="time"
                            name="breakfastTime"
                            id="breakfastTime"
                        />
                        <input type="text" name="breakfast" id="breakfast" />
                    </form>
                </div>
                <div class="w-1/3">
                    <p>점심</p>
                    <form action="/">
                        <input type="time" name="lunchTime" id="lunchTime" />
                        <input type="text" name="lunch" id="lunch" />
                    </form>
                </div>
                <div class="w-1/3">
                    <p>저녘</p>
                    <form action="/">
                        <input type="time" name="dinnerTime" id="dinnerTime" />
                        <input type="text" name="dinner" id="dinner" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    <button>저장하기</button>
</section>

<style>
    .title-box {
        font-size: 20px;
    }
    .content-item {
        display: flex;
        border: 1px solid black;
    }
    .mission-title {
        width: 50%;
    }
    .mission-content {
        width: 50%;
    }
</style>
