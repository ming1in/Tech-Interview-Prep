/*
https://www.hackerrank.com/challenges/weather-observation-station-6/problem?h_r=next-challenge&h_v=zen
*/


SELECT DISTINCT CITY
FROM STATION
-- used regex to check if first letter is vowel
WHERE CITY RLIKE '^[aeiouAEIOU].*'; --RLIKE is a operator that checks if a string expression matches against a pattern

