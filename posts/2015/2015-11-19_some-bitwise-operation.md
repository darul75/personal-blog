Few reminders on bitwise operations with javascript as a lot of back end developers tend to choose NodeJS now.

I just report some tips found and used and will add more when I got it :)

## Some recaps.

To illustrate, imagine integer are stored with one byte, 8 bits.

Regarding these two decimals numbers 2 and -1.

```bash
integer value 1 binary representation is 0000 0001
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

And not 1 as expected

```javascript
  0000 0001
```

### Two's complement method

Negating a number (whether negative or positive) is done by inverting all the bits and then adding one to that result.

Play with 1 and try to compute -1.

```javascript
   0000 0001
```

- Invert all the bits through the number

```javascript
   1111 1110
```

- Add one

```javascript
   1111 1110
  +0000 0001
   ---------
   1111 1111
```

Verify (-1) + 1 == 0

```javascript
   1111 1111
   0000 0001
   ---------
 1 000000000
```

Verify (-1) + 2 == 1

```javascript
   1111 1111
   0000 0010
   ---------
 1 000000001
```

Good.

Another approach consist in :

- Starting from the right, find the first '1'
- Invert all of the bits to the left of that one

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

Some ECMAScript operators deal only with integers in the range −231 through 231−1, inclusive, or in the range 0 through 232−1, inclusive. These operators accept any value of the Number type but first convert each such value to one of 232 integer values. See the descriptions of the ToInt32 and ToUint32 operators in 9.5 and 9.6, respectively.

## Floating numbers

Are juste a scientific notation to express decimal numbers. Limitations with precision.

Decimal to IEEE Floating point

- convert to binary
- move decimal point to first number => exponent value
- get biased exponent value 

## References

https://en.wikipedia.org/wiki/Two%27s_complement
https://en.wikipedia.org/wiki/Signed_number_representations

Binary addition
http://web.math.princeton.edu/math_alive/1/Lab1/BinAddEx3.html

Some operations
https://www.eskimo.com/~scs/cclass/int/sx4ab.html

Shifting operation recap
http://stackoverflow.com/questions/141525/what-are-bitwise-shift-bit-shift-operators-and-how-do-they-work

Example IEEE 754
http://www.madirish.net/240
http://kipirvine.com/asm/workbook/floating_tut.htm
http://ecariou.perso.univ-pau.fr/cours/archi/td-1-codage.pdf

Floating number computer reprensentation reason video
https://www.youtube.com/watch?v=PZRI1IfStY0


Article
http://www.2ality.com/2012/07/large-integers.html#[1]

http://jsfiddle.net/darul75/3ohL03x6/



Normalisation, we can only store O and 1
