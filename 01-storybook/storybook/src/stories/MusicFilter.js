import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Select } from 'semantic-ui-react'

const options = [
        { key: 'any', value: 'Any',  text: '- Any -' },
        { key: 'urban', value: 'Urban',  text: 'Urban/pop' },
        { key: 'religious', value: 'Religious',  text: 'Religious' },
        { key: 'classical', value: 'Classical',  text: 'Classical' },
        { key: 'ethno', value: 'Ethno',  text: 'Ethno/traditional' },
        { key: 'jazz', value: 'Jazz',  text: 'Jazz' },
];
const storyWelcome = storiesOf('MusicFilter', module)
.add('MusicFilter', () => (
    <Select placeholder='Select your music' options={options} />
));


  export default storyWelcome;
