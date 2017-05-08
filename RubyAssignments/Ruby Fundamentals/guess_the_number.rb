def guess_number guess
    number = 25
    # your code here
    return "You guessed right!" if guess == number
    return "Too high!" unless number > guess
    return "Too low!"
end
