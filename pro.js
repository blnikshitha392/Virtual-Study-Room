let timerDisplay = document.getElementById("timer");
let timerInput = document.getElementById("timerInput");

let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

let timer;
let totalSeconds = 0;

let tasks = [];

function setTimerFromInput()
{
    let minutes = timerInput.value;

    if(minutes == "" || minutes <= 0)
    {
        alert("Enter minutes");
        return;
    }

    totalSeconds = minutes * 60;
    updateDisplay();
}

function startTimer()
{
    if(!timer && totalSeconds > 0)
    {
        timer = setInterval(countDown,1000);
    }
}

function pauseTimer()
{
    clearInterval(timer);
    timer = null;
}

function resetTimer()
{
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    timerInput.value=""
    updateDisplay();
}

function countDown()
{
    if(totalSeconds > 0)
    {
        totalSeconds--;
        updateDisplay();
    }
    else
    {
        clearInterval(timer);
        timer = null;
        alert("Time up");
    }
}

function updateDisplay()
{
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;

    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }

    timerDisplay.textContent = minutes + ":" + seconds;
}

function addTask()
{
    let task = taskInput.value;

    if(task == "")
    {
        return;
    }

    tasks.push(task);

    showTasks();

    taskInput.value = "";
}

function removeTask(index)
{
    tasks[index] = "";

    showTasks();
}

function showTasks()
{
    let html = "";

    for(let i=0;i<tasks.length;i++)
    {
        if(tasks[i] != "")
        {
            html += "<li onclick='removeTask("+i+")'>" + tasks[i] + "</li>";
        }
    }

    taskList.innerHTML = html;
}