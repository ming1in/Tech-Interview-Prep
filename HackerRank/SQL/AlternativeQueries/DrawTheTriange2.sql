/*
https://www.hackerrank.com/challenges/draw-the-triangle-2/problem
*/


set @i := 0;

select repeat('* ', @i := @i + 1 ) from information_schema.tables where @i < 20;