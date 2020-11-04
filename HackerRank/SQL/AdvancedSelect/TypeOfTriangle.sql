/*
https://www.hackerrank.com/challenges/what-type-of-triangle/problem
*/

SELECT CASE
  WHEN A + B > C AND B + C > A AND A + C > B THEN --checks if its a valid triangle
    CASE 
      WHEN A = B AND B = C THEN 'Equilateral' --all sides are equal
      WHEN A = B OR B = C OR A = C THEN 'Isosceles' --two sides are equal
      ELSE 'Scalene' --no sides are equal
    END
  ELSE 'Not A Triangle'
END
FROM TRIANGLE;
