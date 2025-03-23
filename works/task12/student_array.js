let student_info = [];

function student_fun() {
    let display = "<h2>Student Information..</h2>";
    
    // Loop through student_info array and display each student's details
    student_info.forEach(student => {
        display += `
        <div>
            <p><strong>Student ID:</strong> ${student.id}</p>
            <p><strong>Student Name:</strong> ${student.name}</p>
            <p><strong>Major:</strong> ${student.major}</p>
            <p><strong>Description:</strong> ${student.description()}</p>
        </div>
        `;
    });
    
    document.getElementById("div").innerHTML = display;
}

function insert() {
    // Get values from input fields
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let major = document.getElementById("major").value;

    // Validate if inputs are not empty
    if (id && name && major) {
        // Create a new student object
        const new_student = {
            id: id,
            name: name,
            major: major,
            description: function() {
                return `This is ${this.name}, pursuing Masters in ${this.major}, and my Student ID is ${this.id}.`;
            }
        };

        // Add the new student to the student_info array
        student_info.push(new_student);

        // Clear input fields after insertion
        clear();
        
        alert('Student added successfully!');
    } else {
        alert('Please fill in all fields.');
    }
}

function clear() {
    // Clear the input fields
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("major").value = "";
}
