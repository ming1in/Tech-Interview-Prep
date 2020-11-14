/*
https://www.hackerrank.com/challenges/average-population-of-each-continent/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/

SELECT COUNTRY.CONTINENT, FLOOR(AVG(CITY.POPULATION))
FROM CITY
  JOIN COUNTRY ON COUNTRY.CODE = CITY.COUNTRYCODE --could also use inner join
GROUP BY COUNTRY.CONTINENT; 