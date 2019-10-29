import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Marouane Tais</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
            alt="avatar"
            style={{height: '250px'}}/>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
          <List>
            <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                (212) 629 946 054
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                <i class="fab fa-instagram" aria-hidden="true"/>
                @soymarouane
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                marouane.tais@gmail.com
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fab fa-facebook" aria-hidden="true"/>
                facebook.com/marouane.tais
                </ListItemContent>
            </ListItem>
          </List>
          </div>
        </Cell>
      </Grid>
      </div>
    );
  }
}

export default Contact;
