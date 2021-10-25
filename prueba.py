import requests
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
# page = requests.get(url)
req = Request('https://stackoverflow.com/questions/16627227/problem-http-error-403-in-python-3-web-scraping', headers={'User-Agent': 'Mozilla/5.0'})
webpage = urlopen(req).read()
soup = BeautifulSoup(html, 'lxml')
type(soup)
bs4.BeautifulSoup
title = soup.title
print(title)
soup.find_all('a')

all_links = soup.find_all("a")
for link in all_links:
    print(link.get("href"))
# soup = BeautifulSoup(page.content, 'html.parser')
# print(page.text)
## ecabezados 
# ec = soup.find_all('a')
#
# print(ec)
#
# encabezados = list()
# for i in ec:
#     encabezados.append(i.text)
#
# print(encabezados)