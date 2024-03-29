// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// creating a custom type (type alias) for shape that could be circles or revtangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?:number;
    // only for circle
    width?: number ;
    // only for rectangles
    height?: number;
    // only for rectangles

};
// Describe a circle using our shape type
let circle : Shape = {
kind:"circle",
radius:5

};
// describe a rectangle using shape type
let rectangle: Shape = { 
    kind: "rectangle",
    width: 10,
    height: 20
};
// showing that we describe
console.log(circle);