import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

import dotenv from "dotenv"
dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    //create a ratelimit that allows 10 requests per 20 seconds
    limiter: Ratelimit.slidingWindow(10,"20 s") 
});

export default ratelimit;