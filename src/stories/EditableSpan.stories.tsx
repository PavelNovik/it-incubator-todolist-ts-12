import type {Meta, StoryObj} from '@storybook/react';
// import {AddItemForm} from '../AddItemForm';
import {action} from '@storybook/addon-actions'
// import TextField from "@mui/material/TextField/TextField";
// import {IconButton} from "@mui/material";
// import {AddBox} from "@mui/icons-material";
// import React from "react";
import {Task} from "../Task";
import {useState} from "react";
import {EditableSpan} from "../EditableSpan";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditableSpan> = {
    title: 'TODOLISTS/EditableSpan',
    component: EditableSpan,
    // This component will have an automatically generated Autodocs entry:
    // https://storybook.js.org/docs/react/writing-docs/autodocs
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // More on argTypes:
    // https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        onChange: {
            description: 'Change span',
            action: ('Change span')
        }
    },
    args: {
        value: 'Editable Span'
    },

};

export default meta;
type Story = StoryObj<typeof EditableSpan>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const EditableSpanStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        // task: {id: '1', isDone: true, title: 'HTML+CSS'},
        // todolistId: '123',
        // changeTaskStatus: action('Button clicked to change task status'),
        // changeTaskTitle: action('Button clicked to change task status'),
        // removeTask: action('Button clicked to change task status'),
    }
}


