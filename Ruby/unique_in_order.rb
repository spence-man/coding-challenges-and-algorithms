def unique_in_order(iterable)
  arr = iterable.chars
  i = 0
  j = 1
  result = []

  loop do
    result.push(arr[i]) if arr[i] != arr[j]
    i += 1
    j += 1
    puts "i #{i}"
    puts "j #{j}"

    break if j > arr.size
  end
  result
end

p unique_in_order('AAAABBBCCDAABBB')
