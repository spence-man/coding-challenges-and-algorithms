def dirReduc(arr)
  prev = ""
  curr = ""
  north_south = ["SOUTH","NORTH"]
  west_east = ["WEST", "EAST"]
  simplified_dir = Array.new
  arr.each do |dir|
    if prev.length == 0
      prev = dir
      next
    end

    is_north_south = (north_south.include? dir) && (north_south.include? prev)
    is_east_west = (west_east.include? dir) && (west_east.include? prev)

    puts is_north_south

    is_not_equal = prev != curr

    next if  is_not_equal && is_north_south
    next if  is_not_equal && is_east_west

    simplified_dir.push(dir)

    prev = dir

  end
  p simplified_dir
end


a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
dirReduc(a)
