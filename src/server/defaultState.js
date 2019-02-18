export const defaultState = {
    users: [{
        id: "U1",
        name: "Dev"
    },{
        id: "U2",
        name: "C. Eeyo"
    }],
    groups: [{
        id: "G1",
        name: "To Do",
        owner: "U1"
    },{
        id: "G2",
        name: "Doing",
        owner: "U1"
    },{
        id: "G3",
        name: "Done",
        owner: "U1"
    }],
    tasks: [{
        name: "Refactor tests",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false
    },{
        name: "Meet with CTO",
        id: "T2",
        group: "G1",
        owner: "U1",
        isComplete: true
    },{
        name: "Compile ES6",
        id: "T3",
        group: "G2",
        owner: "U2",
        isComplete: false
    }],
    comments: [{
        id: "C1",
        owner: "U1",
        task: "T1",
        content: "Great work!!!"
    }]
}