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
