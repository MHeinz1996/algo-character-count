def char_count(param):
  dictionary = {}

  # Loops through each letter in string if it isn't a space
  # if that character doesn't exist in the dictionary, add it and set its value to 1
  # if that character does already exist in the dictionary, increment its value
  for char in param.lower():
    if char != ' ':
      if char in dictionary:
        dictionary[char]+=1
      else:
        dictionary[char] = 1

  # Creates a list of key-value pair lists
  # In this list comp, the dictionary is first sorted alphabetically by its keys, then is sorted descendingly by value
  final_count = [[k, v] for k,v in sorted(sorted(dictionary.items()), key=lambda item: item[1], reverse=True)]

  return final_count