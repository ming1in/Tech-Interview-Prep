/*
https://www.hackerrank.com/challenges/draw-the-triangle-1/problem
*/


set @i := 21
select repeat('* ', @i := @i - 1) from information_schema.tables /* <- this acts as a dummy table*/