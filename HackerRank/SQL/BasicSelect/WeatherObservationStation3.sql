/*
https://www.hackerrank.com/challenges/weather-observation-station-3/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/

SELECT DISTINCT CITY
FROM STATION
WHERE ID%2=0;