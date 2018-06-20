import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';

import { Welcome } from '@storybook/react/demo';

//storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const storyButton = storiesOf('Button', module)
  .add('with text', () => <Button color='teal' onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  export default storyButton;
