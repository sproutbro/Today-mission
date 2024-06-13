import bcrypt from "bcryptjs";

// POST fetch
async function post(url, data) {
    try {
        const response = await fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("POST fetch 에러 : ", error);
    }
}

// 비밀번호 해시
async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('비밀번호 해시 에러');
    }
}

// 비밀번호 체크
async function checkPassword(password, hashedPassword) {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        throw new Error('비밀번호 체크 에러');
    }
}

export { post, hashPassword, checkPassword }