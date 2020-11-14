/*
https://www.hackerrank.com/challenges/african-cities/problem?h_r=next-challenge&h_v=zen
*/

--Solution #1
SELECT CITY.NAME
FROM CITY
JOIN COUNTRY ON COUNTRY.CODE = CITY.COUNTRYCODE
WHERE COUNTRY.CONTINENT = 'Africa';

--Solution #2
SELECT CITY.NAME
FROM CITY, COUNTRY
WHERE COUNTRY.CODE = CITY.COUNTRYCODE 
  AND COUNTRY.CONTINENT = 'Africa';