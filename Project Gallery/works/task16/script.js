const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"},
};

function displayWork(project) {
    const iframe = document.getElementById('projectFrame');

    if (project === 'task1') {
        iframe.src = 'works/task1/index.html';
    } else if (project === 'task2') {
        iframe.src = 'works/task2/index.html'; 
    } else if (project === 'task3') {
        iframe.src = 'works/task3/index.html'; 
    }
}



