def CalculateWindowMinimums(num, stockPriceDelta, windowSize):

  minimumValues = []
  i = 0
  while i < num-1:
    window = stockPriceDelta[i: i + windowSize]
    print(window)
    print(min(window))

    minimumValues.append(min(window))
    i += 1
    
  print(minimumValues)
  return(minimumValues)


CalculateWindowMinimums(5, [4,2,12,11,-5], 2) #output: [2,2,11,-5]