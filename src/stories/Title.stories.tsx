import React from 'react';
import Title from '../components/title';

/* istanbul ignore file */
export default {
    title: 'Components/Title',
    component: Title,
  } 

export const PrimaryTitle = () => <Title>Hello there...</Title>

PrimaryTitle.storyName = "Default"