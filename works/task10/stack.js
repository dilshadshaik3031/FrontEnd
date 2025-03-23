

function grade()
{
let score = parseFloat(document.getElementById("score").value);
let grade = ""
if (score > 80)
{
grade = "A"
}
else if (score > 60 && score <= 79)
{
grade = "B"
}
else if (score > 40 && score <= 60)
{
grade = "C"
}
else
{
grade = "F"
}
document.getElementById("grade_span").innerHTML = grade;
}
let stack = [];
function addTask() {
let item = prompt("Enter a value to push onto the stack:");
//let item = stack.join(grade());
//taskListTextArea.value = taskStack.join('\n');
stack.push(item);
updateStackDisplay();
}
function undoTask() {
if (stack.length > 0) {
let item = stack.pop();
alert("Popped: " + item);
updateStackDisplay();
} else {
alert("Stack is empty!");
}
}
function updateStackDisplay() {
document.getElementById("stackDisplay").innerText =
JSON.stringify(stack);
}
