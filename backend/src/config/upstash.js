// src/config/upstash.js
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// create a ratelimiter that allows 10 requests per 20 seconds
const ratelimiter = new Ratelimit({
    redis: new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }),
    limiter: Ratelimit.slidingWindow(10, "20 s"),
});

export default ratelimiter;
