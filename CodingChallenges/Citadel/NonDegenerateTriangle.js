/**
 * A triangle formed by the three points a(x1, y1), b(x2, y2), c(x3, y3) is a non-degenerate
 * triangle if the following rules are respected (|ab| is the length of the line between
 * points a and b)
 *  
 *  |ab| + |bc| > |ac|
 *  |bc| + |ac| > |ab|
 *  |ab| + |ac| > |bc|
 * 
 * A point belongs to a triangle if it lies somewhere on or inside the triangle. Given two points
 * p=(xp, yp) and q=(xq, yq), return the correct scenario number.
 */

 