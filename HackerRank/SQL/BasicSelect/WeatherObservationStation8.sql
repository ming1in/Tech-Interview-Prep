/*
https://www.hackerrank.com/challenges/weather-observation-station-8/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/


SELECT DISTINCT CITY
FROM STATION
WHERE CITY RLIKE '^[aeiouAEIOU].*[AEIOUaeiou]$'; --RLIKE is a operator that checks if a string expression matches against a pattern

