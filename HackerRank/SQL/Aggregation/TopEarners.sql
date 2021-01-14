/*
https:
//www.hackerrank.com/challenges/earnings-of-employees/problem
*/


SELECT MONTHS * SALARY AS earnings, Count(*)
FROM Employee
GROUP BY earnings
ORDER BY earnings DESC
Limit 1