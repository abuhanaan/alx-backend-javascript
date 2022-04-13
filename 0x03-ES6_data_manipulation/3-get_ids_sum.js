export default function getStudentIdsSum(students) {
    const initialVal = 0;
    const sum = students.reduce(
        (prevStudent, currStudent) => prevStudent + currStudent.id, initialVal);
    return sum;
}
