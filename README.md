# Numbers to Words (Ruby)

![](Numbers-To-Words-Screenshot.png?raw=true)

A personal Ruby challenge I wanted to take on. This script takes a numerical input and outputs the words in English.

This was made into an independent class as an extension to the String and Integer(Fixnum) classes. This makes it more compatible.

##Demo

http://numberstowords.heroku.com

##Notes

You can add more words to the **WORDS** constant to extend the size of numbers the script can handle.

I wrote this script in [JavaScript](https://github.com/muhanad40/Numbers-To-Words-JS) and [Python](https://github.com/muhanad40/Numbers-To-Words-Python)

##Usage

**NumbersToWords Class**

    require './Numbers-To-Words/lib/NumbersToWords.module.rb'
    require './Numbers-To-Words/lib/NumbersToWords.rb'
    puts NumberToWords.new.convert(123)

**String**

    require './Numbers-To-Words/lib/NumbersToWords.module.rb'
    require './Numbers-To-Words/lib/String.rb'
    puts "123".NumberToWords

**Integer**

    require './Numbers-To-Words/lib/NumbersToWords.module.rb'
    require './Numbers-To-Words/lib/Fixnum.rb'
    puts 123.NumberToWords

##Technologies

- RSpec
- Sinatra
- Heroku
- Shotgun
