/*
https://www.hackerrank.com/challenges/weather-observation-station-12/problem
*/

SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT RLIKE '^[aeiouAEIOU].*'
AND CITY NOT RLIKE '.*[AEIOUaeiou]$';

