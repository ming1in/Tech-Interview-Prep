/*
https://www.hackerrank.com/challenges/weather-observation-station-5/problem
*/


-- Order all the city by the length of their name 
SELECT CITY, LENGTH(CITY)
FROM STATION
ORDER BY LENGTH(CITY),CITY ASC
LIMIT 1;

SELECT CITY, LENGTH(CITY) FROM STATION
ORDER BY LENGTH(CITY) DESC
LIMIT 1;