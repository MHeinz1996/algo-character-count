def char_count(param):
  dictionary = {}

  print(param)

  for char in param.lower():
    if char != ' ':
      if char in dictionary:
        dictionary[char]+=1
      else:
        dictionary[char] = 1

  final_count = [[k, v] for k,v in dictionary.items()]

  return final_count


print(char_count('an apple a day will keep the doctor away'))