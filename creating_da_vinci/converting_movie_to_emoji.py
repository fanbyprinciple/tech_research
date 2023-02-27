import os
import openai

key = open("secret.txt", "r").readlines()
# openai.api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = key[0]

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \nStar Wars:",
  temperature=0.8,
  max_tokens=60,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0,
  stop=["\n"]
)