/*
https://www.hackerrank.com/challenges/more-than-75-marks/problem?h_r=next-challenge&h_v=zen
*/

SELECT NAME
FROM STUDENTS
WHERE MARKS > 75
ORDER BY RIGHT(NAME, 3), ID ASC;