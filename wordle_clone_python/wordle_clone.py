import pathlib
import random

pathlib.Path('wordlist.txt').read_text(encoding="utf-8")

all_poke = pathlib.Path("wordlist.txt")

WORDLIST = [
    word.upper() for word in all_poke.read_text(encoding="utf-8").strip().split("\n") if len(word) == 7
]

# print(all_words)

word = random.choice(WORDLIST)

for guess in range(1,7):
    guess = input(f"Guess {guess}: ").upper()
    if guess == word:
        print("correct")
        break
    correct_letters = {
        letter for letter, correct in zip(guess, word) if letter == correct
    }

    misplaced_letters = set(guess) & set(word) - correct_letters
    wrong_letters = set(guess) - set(word)

    print("Correct letters:", ", ".join(sorted(correct_letters)))
    print("Misplaced letters:", ", ".join(sorted(misplaced_letters)))
    print("Wrong letters:", ", ".join(sorted(wrong_letters)))

else:
    print(f"The word was {word}")