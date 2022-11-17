// Rectangle Area
// Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

// The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

// The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

 

// Example 1:
// Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// Output: 45

// Example 2:
// Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// Output: 16

var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let area1 = (ax2 - ax1) * (ay2 - ay1)
    let area2 = (bx2 - bx1) * (by2 - by1)
    
    // calculating Overlapped area
    // to get the left max index and right min index
    let left = Math.max(bx1, ax1)
    let right = Math.min(ax2, bx2)
    
    // to get the top min index and bottom max index
    let top = Math.min(ay2, by2)
    let bottom = Math.max(ay1, by1)
    
    let overlap = 0
    if(right > left && top > bottom){
        overlap = (right - left) * (top - bottom)
    }
    return area1 + area2 - overlap
};