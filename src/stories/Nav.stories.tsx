import React from 'react';
import Nav from '../components/nav';
import StoryRouter from 'storybook-react-router'

/* istanbul ignore file */
export default {
    title: 'Components/Nav',
    component: Nav,
    decorators: [StoryRouter()],
  } 

export const Default = () => <Nav></Nav>

Default.storyName = "Navbar"