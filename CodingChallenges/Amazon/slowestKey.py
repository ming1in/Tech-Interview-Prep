# Amazon engineers have redesigned a keypad used by deliver drivers in urban areas, in order to determine which key takes the longest time to press,
# the keypad is tested by a driver.

# given the results of that test which contain key pressed and the time at which it was pressed write an algo to determine which key takes the longest to press

ascii = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k',
    11: 'l',
    12: 'm',
    13: 'n',
    14: 'o',
    15: 'p',
    16: 'q',
    17: 'r',
    18: 's',
    19: 't',
    20: 'u',
    21: 'v',
    22: 'w',
    24: 'x',
    25: 'y',
    26: 'z',
}

# keyTimes, a list of pairs of integers where the first element representing the encoded key pressed and the second element representing the time at which is was pressed
# num, integer representing the number of keys


def SlowestKey(num, keyTimes):
    i = 0

    greatestTime = 0
    key = 0

    while i < num:

        if i == 0:
            time = keyTimes[0][1] - 0
        else:
            time = keyTimes[i][1] - keyTimes[i-1][1]

        if time > greatestTime:
            greatestTime = time
            key = keyTimes[i][0]
        i += 1

    char = ascii[key]
    print(char)
    return char


SlowestKey(4, [(0, 2), (1, 5), (0, 9), (2, 15)])  # output: c
