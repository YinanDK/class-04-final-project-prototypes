import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Select, Grid, Card, Image, List, Icon, Button} from 'semantic-ui-react';
import imageFile1 from './assets/imagefile1.jpg';

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
	<div>
		<Select placeholder='Select your music' options={options} size="big" />
		<Grid style={{marginTop: "50px"}}>
			<Grid.Row>
				<Grid.Column computer={8} >
				<List size="big" >
					<List.Item style={{ backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
				</List>
				</Grid.Column>
				<Grid.Column computer={8}>
				<List size="big" >
					<List.Item style={{ backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{backgroundColor: "#f3f3f3", borderRadius: 5, margin: "5px"}}>
						<List.Content floated="right" style={{margin: "5px auto"}}>
							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>

							<Icon 
									circular color='teal'
									name="play circle"
									style ={{padding:"5px"}}
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='teal'
									name="cloud download" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
							<Icon 
									circular color='red'
									name="heart" 
									size="small" 
									//color="#636363"
									as = 'i'
							/>
						</List.Content>
						<Image avatar src={imageFile1} />
						<List.Content>
							<b>Singer name</b>
							<List.Description style={{fontSize:"12px"}}> Album name </List.Description>
						</List.Content>
					</List.Item>
				</List>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</div>
));


  export default storyWelcome;
