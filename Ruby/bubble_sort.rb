def bubble_sort(arr)
  arr_length = arr.size
  return arr if arr_length  <= 1

  loop do
    swapped = false

    (arr_length-1).times do |i|
      if arr[i] > arr[i+1]
        arr[i], arr[i+1] = arr[i+1], arr[i]
        swapped = true
      end
    end

    break if not swapped
  end

  arr
end

p bubble_sort([3,5,2,4,1])
# => [1,2,3,4,5]

# src: https://www.honeybadger.io/blog/ruby-bubble-sort/
