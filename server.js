import express from "express";
import http from "http";
import { handler } from "./build/handler.js";

// Express 애플리케이션 생성
const app = express();

// 모든 요청을 SvelteKit 핸들러로 라우팅
app.use(handler);

// HTTP 서버 생성 (모든 요청을 HTTPS로 리다이렉트)
const httpServer = http.createServer(app);

// HTTP 서버 실행 (리다이렉트 전용)
httpServer.listen(3001, () => {
    console.log('HTTP Server running on port 3001');
});