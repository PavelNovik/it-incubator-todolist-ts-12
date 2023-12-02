import type {Meta, StoryObj} from '@storybook/react';
import {AddItemForm} from '../AddItemForm/AddItemForm';
import {action} from '@storybook/addon-actions'
import TextField from "@mui/material/TextField/TextField";
import {IconButton} from "@mui/material";
import {AddBox} from "@mui/icons-material";
import React from "react";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AddItemForm> = {
    title: 'TODOLISTS/AddItemForm',
    component: AddItemForm,
    // This component will have an automatically generated Autodocs entry:
    // https://storybook.js.org/docs/react/writing-docs/autodocs
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // More on argTypes:
    // https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        addItem: {
            description: 'Button clicked inside form. If we have error in text field, we can\'t clicked button',
            action: 'clicked'
        }
    },
};

export default meta;
type Story = StoryObj<typeof AddItemForm>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const AddItemFormStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        addItem: action('Button clicked inside form')
    },
};

// const handler = () => action('Clicked')

// With error status static
export const AddItemFormWithErrorStory: Story = {
    render: () => <div>
        <TextField variant="outlined"
                   error={true}
                   value={''}
                   onChange={action('Changed')}
                   onKeyPress={action('Pressed')}
                   label="Title"
                   helperText={'Title is required'}
        />
        <IconButton color="primary" onClick={action('Clicked')}>
            <AddBox/>
        </IconButton>
    </div>
}