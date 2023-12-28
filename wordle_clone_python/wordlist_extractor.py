import pathlib

pathlib.Path('wordlist.txt').read_text(encoding="utf-8")

WORDLIST = pathlib.Path("wordlist.txt")

all_words = [
    word.upper() for word in WORDLIST.read_text(encoding="utf-8").strip().split("\n") if len(word) == 7
]

print(all_words)

print(len(all_words))