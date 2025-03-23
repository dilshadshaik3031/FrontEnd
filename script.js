const works = {
    "task1" : {"title" : "Expectation Document", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Basic HTML Styling", "url" : "works/task2/index.html"},
    "task3" : {"title" : "CSS Hover", "url" : "works/task3/google.html"},
    "task4" : {"title" : "Welcome to JS", "url" : "works/task4/welcome.html"},
    "task5" : {"title" : "Calculator with JS", "url" : "works/task5/calculator_js.html"},
    "task6" : {"title" : "GitHub Integration", "url" : "works/task6/calgit.html"},
    "task7" : {"title" : "Console Output", "url" : "works/task7/arithemetic.html"},
    "task8" : {"title" : "String Operation", "url" : "works/task8/string operations.html"},
    "task9" : {"title" : "Conditions", "url" : "works/task9/grade.html"},
    "task10" : {"title" : "Call-Stack with Array", "url" : "works/task10/stackkk.html"},
    "task11" : {"title" : "Loops", "url" : "works/task11/star.html", "url" : "works/task11/consecutive sum.html"},
    "task12" : {"title" : "Arrays", "url" : "works/task12/student_array.html","url" : "works/task12/student_user.html","url" : "works/task12/student.html"},
    "task13" : {"title" : "Objects", "url" : "works/task13/student_tablees.html"},
    "task14" : {"title" : "Functions", "url" : "works/task14/colors.html", "url" : "works/task14/get(1-10).html", "url" : "works/task14/get(50-100).html", "url" : "works/task14/random.html", "url" : "works/task14/randomadvanced.html", "url" : "works/task14/setTimeout.html"},
    "task15" : {"title" : "Class & Bootstrap", "url" : "works/task15/ageee.html", "url" : "works/task15/bootstrapex.html", "url" : "works/task15/bulb_q.html"},
    "task16" : {"title" : "JSON", "url" : "works/task16/index.html"}

};

function displayWork(project) {
    const iframe = document.getElementById('projectFrame');

    if (project === 'task1') {
        iframe.src = 'works/task1/index.html';
    } else if (project === 'task2') {
        iframe.src = 'works/task2/index.html'; 
    } else if (project === 'task3') {
        iframe.src = 'works/task3/google.html'; 
    } else if (project === 'task4') {
        iframe.src = 'works/task4/welcome.html'; 
    } else if (project === 'task5') {
        iframe.src = 'works/task5/calculator_js.html'; 
    } else if (project === 'task6') {
        iframe.src = 'works/task6/calgit.html'; 
    }else if (project === 'task7') {
        iframe.src = 'works/task7/arithemetic.html'; 
    } else if (project === 'task8') {
        iframe.src = 'works/task8/string operations.html'; 
    }else if (project === 'task9') {
        iframe.src = 'works/task9/grade.html'; 
    } else if (project === 'task10') {
        iframe.src = 'works/task10/stackkk.html'; 
    }else if (project === 'task11') {
        iframe.src = 'works/task11/star.html'; 
      //  iframe.src = 'works/task11/consecutive sum.html';
    } else if (project === 'task12') {
        iframe.src = 'works/task12/student_array.html'; 
       // iframe.src = 'works/task12/student_user.html'; 
       // iframe.src = 'works/task12/student.html'; 
        
    }else if (project === 'task13') {
        iframe.src = 'works/task13/student_tablees.html'; 
    } else if (project === 'task14') {
       // iframe.src = 'works/task14/colors.html'; 
       // iframe.src = 'works/task14/get(1-100).html'; 
       // iframe.src = 'works/task14/get(50-100).html'; 
       // iframe.src = 'works/task14/random.html'; 
       // iframe.src = 'works/task14/randomadvanced.html'; 
        iframe.src = 'works/task14/setTimeout.html'; 
    } else if (project === 'task15') {
       // iframe.src = 'works/task15/ageee.html'; 
        iframe.src = 'works/task15/bootstrapex.html'; 
       // iframe.src = 'works/task15/bulb_q.html'; 
    } else if (project === 'task16') {
        iframe.src = 'works/task16/index.html'; 
    }
}




