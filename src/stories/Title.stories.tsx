import React from 'react';
import Title from '../components/title';

export default {
    title: 'Components/Title',
    component: Title,
  } 

export const PrimaryTitle = () => <Title>Hello there...</Title>

PrimaryTitle.storyName = "Default"