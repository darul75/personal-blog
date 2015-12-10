Like other languages Javascript deals pretty well with bytes and a lot of developers tend to choose NodeJS as their favourite backend framework.

Here I propose to review "binary" concepts and how numbers are stored, integer, decimal, float, double, binary, floating representations... It helps to understand how some operations are performed.

I wanted to make my own representation of famous IEEE 754 representation, so before to do that, I needed to review some basics, yes school is quite far for me too now.

Result is here : http://darul75.github.io/d3-binary-converter/

## Fact

Before digging into the ground, always fun to see something like

```javascript
0.1 + 0.2 // 0.30000000000000004
```

Ok, but why ? I would resume it by welcome to binary world.

## Some recaps sign vs unsigned.

To illustrate, we could consider integer are stored with only one byte (8 bits) and two decimals numbers 1 and -1.

```javascript
integer value 1 binary representation is 0000 0001
```

```javascript
integer value -1 binary representation is ???? ????
```

### One complement method

"The ones' complement form of a negative binary number is the bitwise NOT applied to it."

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

```javascript
1111 1111
// could be resumed like 
-2^7 + 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^0 == -128 + 64 + 32 + 16 + 8 + 4 + 2 + 1
```
## Shifting

### << (Left shift)

"This operator shifts the first operand the specified number of bits to the left."

```javascript
var n = 5;  // 0000 0101

n = n << 1; // 0000 1010

var shift = 1;

// note, left shifting is equivalent to operation : n * 2^shift

n << shift == n * Math.pow(2, shift);
```

### >> (Sign-propagating right shift)

"This operator shifts the first operand the specified number of bits to the right".

```javascript
var n = 5;  // 0000 0101

n = n >> 1; // 0000 0010
```

### >>> (Zero-fill right shift)

"This operator shifts the first operand the specified number of bits to the right."

Consider number -1 could be seen as 11111111111111111111111111111111 in binary representation.

What happened when you shift this number by 0 ?

```javascript
var n = -1;  // 1111.....

n = n >>> 0; // 4294967296
```

Surprising but not so much at the end as it will simply coerces number to unsigned one.

Sometimes it is nice to get binary representation of a number in javascript. By looking at Mozilla API for number, you will see a nice [toString([base])](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/toString) method.

Let's try using it:

```javascript
var n = -10;  // ....1010

n.toString(2); // "-1010"

// will display "-1010" which is not the real representation of your number, let's see another method

(n >>> 0).toString(2);

// 11111111111111111111111111110110 => GOOD

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
```

### ~ (Bitwise NOT)

"Yields the inverted value (a.k.a. one's complement)"

```javascript
var a = 3;    // 0000 0011
var notA = ~3 // 1111 1100
```

Some of you may have seen this bunch of code somewhere.

```javascript
var string = 'hello world, I am testing !';

if (~string.indexOf('test')) {
  // do something
}

// ok weird... normaly would be something like

if (string.indexOf('test') >= 0) {
  // do something
}
```

[indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method return -1 in case of non matching result.

Do you remember -1 in binary representation, a nice list of bits 11111111....

Cool so if I use a NOT on -1 I get ?? 00000000.... binary representation => 0 in decimal => meaning boolen false by coercion..

Rewrite our example a little.

```javascript
var string = 'hello world, I am testing !';

var s1 = 'am';
var s2 = 'nothing else matters';

var containsAm = string.indexOf(s1); // === 15
var containsNothinElseMatters = string.indexOf(s2); // === -1

containsAm = ~containsAm; // -16
containsNothinElseMatters = ~containsNothinElseMatters; // 0

// so what happened when in a condition
if (containsAm) {
  // ok
  console.log('containsAm');
}

if (containsNothinElseMatters) {
  // ok
  console.log('containsNothinElseMatters');
}

// will output
// > containsAm
```

### Boolean conversion

In previous example, what you need to remember is that in javascript.

- 0 is the same than false
- anything else is true.

You may check by using **!!** operator.

```javascript
!!0; // false
!!1; // true
!!18;// true
// but also
!!-18;// true
```

So when you see something like this in code.

```javascript
var s = 'wtf';
// same as:  s.indexOf('tf') >= 0
if (~s.indexOf('tf')) {
	console.log('now you understand what\'s going on');
}
```

## Floating numbers IEEE 754

Our computer is just a serie of 0 and 1 isn't it ?

And we have seen how some integer numbers (ex: 15) are normalized into a serie of bits.

But how does it work for decimal numbers ? (ex: 15.25)

A decimal number is a number that can be expressed with a fraction where denominator is a power of ten.

```javascript
55.25 === 5525 / 100 === 5525 / (10^2)
```
.
Ok nice but how my computer does not care about power decimal but want a binary representation instead. 

Here comes IEEE 754 Binary Floating Point is representation.

I won't give all details but you can check how it works [here](https://en.wikipedia.org/wiki/IEEE_floating_point) 

Javascript uses **64 bits** representation precision:

- 1 bit is sign
- 11 bits exponent
- 52 bits for the fraction.

### Sign

This is the easy part, 1 bit indicates a negative number, and a 0 bit indicates a positive number.

### Mantissa

*Decimal*
Best way to understand how it works consist in considering decimal floating representation approach.

Replay with 55.25 number, such a number decimal floating representation would be:

	5,525 x 10 ^2

	sign : positive
	mantissa : 5.525
	exponent: 2

The fractional portion of the mantissa is the sum of each digit multiplied by a power of 10:

    .525 =  5/10 + 2/100 + 5/1000

*Binary*
A binary floating-point number is similar. 

For example, in the normalized number +1,1011101 x 2^5

 - the sign is positive, 
 - the mantissa is 1,1011101, (we won't store first bit..)
 - and the exponent is 5.

To come back to a binary representation, we shift the decimal point of mantissa by 5:

	1.1011101 => 110111.01

Take integer/decimal parts:

	110111 => 2^0 + 2^1 + 2^2 + 2^4 + 2^5 => 55
	.01 => 2^-2 => 0.25

Ok I won't give 

### Exponent

IEEE Short Real exponents are stored as 11-bit unsigned integers with a bias of 1023.

In previous example, exponent of 5 "biased" will become:

	5 + 1023 = 1028

And its binary 

	10000000100 

### Full representation (double precision)

	0 10000000100 1011101000000000000000000000000000000000000000000000

## References

http://darul75.github.io/d3-binary-converter/

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
http://class.ece.iastate.edu/arun/Cpre305/ieee754/ie4.html

Floating number computer reprensentation reason video
https://www.youtube.com/watch?v=PZRI1IfStY0


Article
http://www.2ality.com/2012/07/large-integers.html#[1]

http://jsfiddle.net/darul75/3ohL03x6/

http://stackoverflow.com/questions/1822350/what-is-the-javascript-operator-and-how-do-you-use-it
http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
