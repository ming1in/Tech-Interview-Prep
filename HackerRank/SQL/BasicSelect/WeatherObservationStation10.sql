/*
https://www.hackerrank.com/challenges/weather-observation-station-10/problem
*/

SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT RLIKE '.*[AEIOUaeiou]$';

