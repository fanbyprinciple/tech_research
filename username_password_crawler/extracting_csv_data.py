import pandas as pd

df = pd.read_csv('pass.csv')
for i in df['url']:
    print(i)