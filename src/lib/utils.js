import bcrypt from "bcryptjs";

// Fetch post
async function post(url, data) {
    try {
        const response = await fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

// Hash password
async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

// Password verification
async function checkPassword(password, hashedPassword) {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        throw new Error('Error checking password');
    }
}

export { post, hashPassword, checkPassword }