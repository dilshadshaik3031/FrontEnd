
const student = {
    id: "S00459336",
    name: "Dilshad Shaik",
    major: "Computer Science",
    description: function() {
    return "This is " + this.name + " " + "pursuing Masters in " + this.major +
    " "
    + "and my Student ID is " + this.id;
    }
    };
    function student_fun()
    {
    document.getElementById("div").innerHTML = student.description();
    }
    function insert()
    {
    let id = document.getElementById("id").value;
    student.id = id;
    let name = document.getElementById("name").value;
    student.name = name;
    let major = document.getElementById("major").value;
    student.major = major;
    }
    
    
function clear()
{
document.getElementById("id").value = "";
document.getElementById("name").value = "";
document.getElementById("major").value = "";
}
