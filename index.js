// Arrays to keep track of each task's state

function newTask(title,description){
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function (){
     return console.log(`${this.title} has${this.complete ? "" : "not"} been completed`);
    },
    complete: function (){
      return this.complete = true;
    }
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter','Take all the 💩 out of the litter box');
const task2 = newTask('Do Laundry','Oh No... 😰');
const tasks = [task1,task2];

task1.logState();
task1.complete();
task1.logState();
