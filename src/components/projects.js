import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";


class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }
  
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (

        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #2</CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>Codepen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #3</CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>Codepen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>
        </div>

      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Wordpress</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is JS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Laravel</h1>
        </div>
      );
    }
  }
 

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Wordpress</Tab>
          <Tab>JS</Tab>
          <Tab>Laravel</Tab>
        </Tabs>
        <section className="section-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">
              {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
