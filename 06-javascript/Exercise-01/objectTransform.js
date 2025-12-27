
const students = [
    { id: 1, name: 'Alice', scores: [85, 90, 78] },
    { id: 2, name: 'Bob', scores: [70, 75, 80] },
    { id: 3, name: 'Charlie', scores: [90, 95, 88] }
];

function transformStudents(students) {
    const result = {};
    students.forEach(({ name, scores }) => {
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        result[name] = parseFloat(avg.toFixed(2));
    });
    return result;
}

console.log(transformStudents(students));

