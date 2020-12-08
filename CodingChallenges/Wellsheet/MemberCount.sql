/*
https://coderbyte.com/editor/sqlsandbox:SQL%20Member%20Count
*/

select data.ReportsTo, count(data.ReportsTo) as Members, round(AVG(data.age),0) as 'Average Age'
from maintable_6QAR9 as data
group by data.ReportsTo
having count(data.ReportsTo) > 0
order by data.ReportsTo;