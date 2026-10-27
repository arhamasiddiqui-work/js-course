//  regular expression (regex for short) allow developers to match strings against a pattern, extract submatch information, or simply test if the string conforms to that pattern, validate text patterns, Example: checking if a string contains only digits, regex->a special way to describe what text you're looking for

//  regular expression is typically created as a literal by enclosing a pattern in forward slashes (/)
const regex1 = /ab+c/g;
//  can also be created with the RegExp() constructor:
const regex2 = RegExp("ab+c", "g");
console.log(regex1, regex2)


/* Flag	   Purpose
    d	Provides match indices.  -> hasIndices
    g	Finds all matches.     -> global
    i	Ignores letter case.    -> ignoreCase
    m	^ and $ match each line's start/end.   -> multiline
    s	. matches newline characters.     -> dotAll
    u	Enables Unicode-aware matching.    -> unicode
    v	Enables advanced Unicode features.   -> unicodeSets
    y	Matches only at the current position.   -> sticky */

/*  Pattern	   Meaning	       Example
    /abc/	  Matches "abc"	"abc".match(/abc/)
    \d	    Any digit    	/\d/.test("5") → true
    +	      One or more	  /\d+/ matches "123"
    ^and$	 Start&end of text	/^\d+$/ matches only digits
    i	    Ignore letter case	/hello/i.test("HELLO") → true */

//  example, you want to check whether a string contains digits
const pattern = /\d/;
pattern.test("Ali");  // false
pattern.test("Ali5"); // true
/*
/\d/ = look for a digit.
.test() = check whether the text matches.
true = a digit was found. 
 */