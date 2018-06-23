import React from 'react';

import { storiesOf } from '@storybook/react';

import {Grid, Card, Image} from 'semantic-ui-react';
import imageFile1 from './assets/imagefile1.jpg';
import imageFile2 from './assets/imagefile2.jpg';
import imageFile3 from './assets/imagefile3.jpg';
import imageFile4 from './assets/imagefile4.jpg';
import imageFile5 from './assets/imagefile5.jpg';
import imageFile6 from './assets/imagefile6.jpg';
import imageFile7 from './assets/imagefile7.jpg';
import imageFile8 from './assets/imagefile8.jpg';
import imageFile9 from './assets/imagefile9.jpg';
import imageFile10 from './assets/imagefile10.jpg';


const storyAlbum = storiesOf('Album', module)
.add('Album list', () => (

<Grid>
    <Grid.Row>
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile1} alt="album image" />
                <Card.Content>
                    <Card.Header>Ganther</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile2} alt="album image"  />
                <Card.Content>
                    <Card.Header>OPZ</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile3} />
                <Card.Content>
                    <Card.Header>TohR</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile4} />
                <Card.Content>
                    <Card.Header>Jean Rutabana</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile5} />
                <Card.Content>
                    <Card.Header>WeN_Music </Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
    </Grid.Row>
    <Grid.Row>
    <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile6} />
                <Card.Content>
                    <Card.Header>Album Title</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile7} />
                <Card.Content>
                    <Card.Header>Album Title</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile8} />
                <Card.Content>
                    <Card.Header>Album Title</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile9} />
                <Card.Content>
                    <Card.Header>Album Title</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        <Grid.Column computer={3} tablet={5} mobile={16}>
            <Card>
                <Image src={imageFile10} />
                <Card.Content>
                    <Card.Header>Album Title</Card.Header>
                    <Card.Meta>
                        <span className='date'>2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column> 
        
    </Grid.Row>
</Grid>

));


  export default storyAlbum;
