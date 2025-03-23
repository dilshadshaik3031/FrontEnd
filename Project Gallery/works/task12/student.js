

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
    