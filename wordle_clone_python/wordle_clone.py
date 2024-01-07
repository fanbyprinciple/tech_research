import pathlib
import random


def get_random_word(all_poke):

    """Get a random five-letter word from a list of strings.

    ## Example:

    >>> get_random_word(["snake", "worm", "it'll"])
    'SNAKE'
    """
    
    WORDLIST = [
        word.upper() for word in all_poke.read_text(encoding="utf-8").strip().split("\n") if len(word) == 7
    ]

    # print(all_words)

    word = random.choice(WORDLIST)
    return word

def show_guess(guess, word):

    """Show the user's guess on the terminal and classify all letters.

    ## Example:

    >>> show_guess("CRANE", "SNAKE")
    Correct letters: A, E
    Misplaced letters: N
    Wrong letters: C, R
    """

    correct_letters = {
            letter for letter, correct in zip(guess, word) if letter == correct
        }
    misplaced_letters = set(guess) & set(word) - correct_letters
    wrong_letters = set(guess) - set(word)

    print("Correct letters:", ", ".join(sorted(correct_letters)))
    print("Misplaced letters:", ", ".join(sorted(misplaced_letters)))
    print("Wrong letters:", ", ".join(sorted(wrong_letters)))

def game_over(word):
    print(f"The word was {word}")


def main():
    
    pathlib.Path('wordlist.txt').read_text(encoding="utf-8")

    all_poke = pathlib.Path("wordlist.txt")
    word = get_random_word()    

    for guess in range(1,7):
        guess = input(f"Guess {guess}: ").upper()
        show_guess(guess, word)
        if guess == word:
            print("correct")
            break    

    else:
        game_over(word)

if __name__ == "__main__":
    main()