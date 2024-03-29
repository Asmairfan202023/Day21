// Making a Student Template: Create a blue print for student information, including their name, age and the classes they are taking, and then fill in this blueprint with an exapmle student.
// creating a blueprint (interface) for student information
interface student {
    name1 : string;
    age: number;
    courses: string[];
}
// filling the blueprint with an exapmle of student
let student : student = {
    name1 : "Asma",
    age: 22,
    courses: ["Math","science", "History"]
};
// showing the student information
console.log(student);