https://platform.openai.com/docs/introduction/next-steps?submissionGuid=4f176514-efb1-44fe-b563-c2b2dfc6eea8

open ai uses a credit based system and does not allow free usage

```
raise self.handle_error_response(
openai.error.RateLimitError: You exceeded your current quota, please check your plan and billing details.
```

So I tried imitating the api calls directly
but even intercepting the call through a proxy is not allowed like burpsuite.

Aim is to create a haiku engine

https://github.com/GrimOutlaw/ChatGPT-Bypass/blob/main/chatgpt_bypass.sh - this is just using chatgpt api call

