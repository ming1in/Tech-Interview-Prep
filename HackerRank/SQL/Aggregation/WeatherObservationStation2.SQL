/*
https://www.hackerrank.com/challenges/weather-observation-station-2/problem
*/

select ROUND(SUM(LAT_N), 2), ROUND(SUM(LONG_W), 2)
from STATION;