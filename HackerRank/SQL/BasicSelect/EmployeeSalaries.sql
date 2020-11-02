/*
https://www.hackerrank.com/challenges/salary-of-employees/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/

SELECT name
FROM Employee
WHERE months < 10
  AND salary > 2000
ORDER BY employee_id ASC;