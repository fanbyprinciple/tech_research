from flask import Flask, render_template
import requests
from textblob import TextBlob

app = Flask(__name__)

NEWS_API_KEY = "YOUR_NEWS_API_KEY_HERE"
NEWS_API_ENDPOINT = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + NEWS_API_KEY

@app.route("/")
def home():
    response = requests.get(NEWS_API_ENDPOINT)
    data = response.json()
    articles = data["articles"]
    for article in articles:
        # Perform natural language processing to get the summary
        summary = TextBlob(article["content"]).summary
        article["summary"] = summary
    return render_template("index.html", articles=articles)

if __name__ == "__main__":
    app.run(debug=True)
# In this modified code, we import the TextBlob library and use it to extract a summary from the article's content. We then add the summary to the article dictionary as a new key-value pair.

# Finally, we pass the modified articles list to the Jinja2 template, and modify the template to display the summary for each article:

# html
# Copy code
# <!DOCTYPE html>
# <html>
#   <head>
#     <title>News Summary</title>
#   </head>
#   <body>
#     <h1>Top Headlines</h1>
#     <ul>
#       {% for article in articles %}
#         <li>
#           <h2>{{ article.title }}</h2>
#           <p>{{ article.summary }}</p>
#         </li>
#       {% endfor %}
#     </ul>
#   </body>
# </html>
# With these modifications, the program will now display a summary for each article along with its title. Note that the quality of the summaries produced by TextBlob may vary depending on



