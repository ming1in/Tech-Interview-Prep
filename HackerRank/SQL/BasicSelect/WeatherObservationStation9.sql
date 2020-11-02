/*
https://www.hackerrank.com/challenges/weather-observation-station-9/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/


SELECT DISTINCT CITY
FROM STATION
WHERE CITY
NOT RLIKE '^[aeiouAEIOU].*';

