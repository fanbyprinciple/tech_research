import requests
import pyautogui
import webbrowser
import keyboard
import pandas as pd
import time

urls_that_work = []
df = pd.read_csv('pass.csv')
counter = 0
for i in df['url']:
    web_name = i
    print(web_name)
    if (web_name.split(":")[0] in ['http','https']):
        try:
            r = requests.head(web_name)
            print(r.status_code)

            if (r.status_code == 200):
                urls_that_work.append(web_name)
                webbrowser.open(web_name, new=2)
                time.sleep(5)
                myScreenshot = pyautogui.screenshot()
                myScreenshot.save("./screenshots/" + web_name.strip().split("://")[1]+ ".png")
                counter += 1
            # prints the int of the status code. Find more at httpstatusrappers.com :)
        except requests.ConnectionError:
            print("failed to connect")


# closing all the websites
while(counter>0):
    keyboard.press_and_release('ctrl+w')
    counter = counter -1

print("following urls can be checked:")
print(urls_that_work)
