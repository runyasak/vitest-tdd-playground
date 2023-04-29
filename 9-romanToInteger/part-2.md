# Roman to Integer (Part 2)

Add `C`, `D` and `M` symbols. All Roman numerals are represented here:

| Symbol |  Value   |
| ------ | :------: |
| I      |    1     |
| V      |    5     |
| X      |    10    |
| L      |    50    |
| **C**  | **100**  |
| **D**  | **500**  |
| **M**  | **1000** |

- `C` can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

## Test Cases

```js
romanToInt('DCXCIX')
// Result: 699
```

```js
romanToInt('MCMXCIV')
// Result: 1994
```

## Constraints

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is guaranteed that `s` is a valid roman numeral in the range `[1, 3999]`.