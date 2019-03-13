import { addNewTask, updateTask } from './server';


(async function myFunc() {
    await addNewTask({
        name: "My task",
        id:"12345"
    });

    await updateTask({
        id: "12345",
        name:"My task - UPDATED"
    });
}) ();


