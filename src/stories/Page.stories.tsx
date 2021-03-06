import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Page, PageProps } from './Page';
import * as HeaderStories from './Header.stories';

/* istanbul ignore file */
export default {
  title: 'Example/Page',
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
