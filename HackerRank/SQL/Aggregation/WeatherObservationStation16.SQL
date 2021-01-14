/*
https://www.hackerrank.com/challenges/weather-observation-station-16/problem?h_r=next-challenge&h_v=zen
*/

SELECT ROUND(MIN(LAT_N),4)
FROM STATION
WHERE LAT_N > 38.7780;