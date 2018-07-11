/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import LinusChat from './LinusChat';

const buildMessages = (amount = 1) => {
  const ret = [];
  for (let i = 0; i < amount; i += 1) {
    ret.push({ type: 'text', direction: 'out', payload: `message [${i}]: Some message` });
  };
  return ret;
};

storiesOf('LinusChat', module)
  .add('Closed', () => <LinusChat isOpen={false} onMaximize={action('onMaximize-action')} />)
  .add('Open - No message', () => <LinusChat isOpen={true} onMinimize={action('onMinimize-action')} />)
  .add('Open - 5 Messages', () => (
    <LinusChat isOpen={true} onMinimize={action('onMinimize-action')} messages={buildMessages(5)} />
  ))
  .add('Open - 20 Messages', () => (
    <LinusChat isOpen={true} onMinimize={action('onMinimize-action')} messages={buildMessages(20)} />
  ))
  .add('Open - 100 Messages', () => (
    <LinusChat isOpen={true} onMinimize={action('onMinimize-action')} messages={buildMessages(100)} />
  ))
  .add('Open - 1000 Messages', () => (
    <LinusChat isOpen={true} onMinimize={action('onMinimize-action')} messages={buildMessages(1000)} />
  ));
