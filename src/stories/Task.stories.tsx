import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import React, {useState} from "react";
import {Task} from "../Task";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/Task',
    component: Task,
    // This component will have an automatically generated Autodocs entry:
    // https://storybook.js.org/docs/react/writing-docs/autodocs
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // More on argTypes:
    // https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        changeTaskStatus: {
            description: 'anything',
            action: 'clicked'
        },
        changeTaskTitle: {
            description: 'anything',
            action: 'clicked'
        },
        removeTask: {
            description: 'anything',
            action: 'clicked'
        }
    },
    args: {
        task: {id: '1', isDone: true, title: 'HTML+CSS'},
        todolistId: '123',
    }
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const TaskIsDoneStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        // task: {id: '1', isDone: true, title: 'HTML+CSS'},
        // todolistId: '123',
        // changeTaskStatus: action('Button clicked to change task status'),
        // changeTaskTitle: action('Button clicked to change task status'),
        // removeTask: action('Button clicked to change task status'),
    }
}


export const TaskIsActiveStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        task: {id: '1234', isDone: false, title: 'JS+React'},
        // todolistId: '12'
    },
};

const TaskIsWorking=()=> {
    const [task, setTask] = useState({id: '1', isDone: false, title: 'StoryBook'})
    const changeTaskStatus = (id: string, isDone:boolean)=> setTask({...task, isDone})
    const changeTaskTitle = (id: string, title:string)=> setTask({...task, title})

    return <Task changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle} removeTask={action('remove task')} task={task} todolistId={'1'}/>
}

export const TaskIsWork: Story = {
    render:()=> <TaskIsWorking/>
}


// const handler = () => action('Clicked')

// With error status static
// export const AddItemFormWithErrorStory: Story = {
//     render:()=> <div>
//         <TextField variant="outlined"
//                    error={true}
//                    value={''}
//                    onChange={()=> action('Changed')}
//                    onKeyPress={()=>action('Pressed')}
//                    label="Title"
//                    helperText={'Title is required'}
//         />
//         <IconButton color="primary" onClick={handler}>
//             <AddBox />
//         </IconButton>
//     </div>
// }