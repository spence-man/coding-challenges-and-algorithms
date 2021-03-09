def solution(number)
  # put your solution here
  # start at number - 1
  # see if it's divisible by 3 or 5
  # if it is add num to result array
  # once we reach zero stop loop
  # sum all numbers in result array
  result = []
  number.times do |n|
    puts n
    if n % 5 == 0 && n % 3 == 0
      result.push(n)
    elsif n % 5 == 0
      result.push(n)
    elsif n % 3 == 0
      result.push(n)
    end
  end
  puts result
  return result.reduce(:+)
end

#puts solution(10)


def sum_multiples(multiple, to)
    n = (to-1) / multiple
    n * (n+1) / 2 * multiple
end

#puts sum_multiples(3, 10)


def disemvowel(str)
  chars = str.split("")
  vowels = "aeiou".split("")
  edited_arr = chars.map { |c| vowels.include?(c) ? "" : c }

  return edited_arr.join("")
end

puts disemvowel("This website is for losers LOL!")
