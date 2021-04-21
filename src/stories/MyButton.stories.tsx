import React from 'react';
import Button from '../components/button';

/* istanbul ignore file */
export default {
    title: 'Components/Button',
    component: Button,
  } 

export const PrimaryButton = () => <Button>Click me!</Button>

PrimaryButton.storyName = "Default"