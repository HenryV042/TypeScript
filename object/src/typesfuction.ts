type MathFunction = (n1: number, n2: number) => number;

const sum: MathFunction = (n1, n2) => {
    return n1 + n2;
}
const sub: MathFunction = (n1, n2) => {
    return n1 - n2;
}
const mul: MathFunction = (n1, n2) => {
    return n1 * n2;
}
const div: MathFunction = (n1, n2) => {
    return n1 / n2;
}