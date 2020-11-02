/*
https://www.hackerrank.com/challenges/weather-observation-station-7/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/


SELECT DISTINCT CITY
FROM STATION
-- used regex to check if last letter is vowel
WHERE CITY RLIKE '.*[AEIOUaeiou]$'; --RLIKE is a operator that checks if a string expression matches against a pattern

