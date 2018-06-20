import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';

import { Welcome } from '@storybook/react/demo';

const storyWelcome = storiesOf('Welcome', module)
.add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


  export default storyWelcome;
