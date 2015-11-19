Few reminders on bitwise operations with javascript as a lot of back end developers tend to choose NodeJS now.

I just report some tips found and used and will add more when I got it :)

Coerces oObject to boolean

https://en.wikipedia.org/wiki/Signed_number_representations

## Some recaps.

To illustrate, imagine integer stored as only one byte, 8 bits.

Regarding these two decimals numbers 2 and -1.

```bash
integer value 2 binary representation is 0000 0010
```

```bash
integer value -1 binary representation is ???? ????
```

### One complement method

The ones' complement form of a negative binary number is the bitwise NOT applied to it.

So decimal 1 number becomes -1 this way

```javascript
~00000001 → 11111110
```

Ok so let's add 2 + (-1)

```javascript
   0000 0010
  +1111 1110
   ---------
 1 0000 0000
```

Result is

```javascript
  0000 0000
```

And not one as expected

```javascript
  0000 0001
```

### Two's complement method

Negating a number (whether negative or positive) is done by inverting all the bits and then adding one to that result.

Play with 2 and try to compute -2.

```javascript
   0000 0010
```

- Invert all the bits through the number

```javascript
   1111 1101
```

- Add one

```javascript
   1111 1101
  +0000 0001
   ---------
   1111 1110
```

Verify 2 + (-2)

```javascript
   1111 1110
   0000 0010
   ---------
 1 000000000
```

## >> (Sign-propagating right shift)



## >>> (Zero-fill right shift)

Consider number -2 with this 111...110 binary form

fills the left-most bits with 0's

(-3 >>> 0).toString(2);

## ~ (Bitwise NOT)

"Yields the inverted value (a.k.a. one's complement)"



0000 0000

```javascript
var a = 3;    // 0000 0011
var notA = ~3 // 1111 1100
```


## References

https://en.wikipedia.org/wiki/Two%27s_complement
https://en.wikipedia.org/wiki/Signed_number_representations
http://web.math.princeton.edu/math_alive/1/Lab1/BinAddEx3.html
