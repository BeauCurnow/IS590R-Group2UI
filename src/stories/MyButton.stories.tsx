import React from 'react';
import Button from '../components/button';

export default {
    title: 'Components/Button',
    component: Button,
  } 

export const PrimaryButton = () => <Button>Click me!</Button>

PrimaryButton.storyName = "Default"