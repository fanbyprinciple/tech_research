import webbrowser
import pyautogui


web_name = "https://login.abl.com"
webbrowser.open(web_name, new=2)
myScreenshot = pyautogui.screenshot()
myScreenshot.save(web_name.strip().split("http://")[1]+ ".png")


