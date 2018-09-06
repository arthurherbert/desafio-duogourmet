import React, { Component } from 'react';
import { Card, Col, CardTitle, Row, Icon } from 'react-materialize';
import { withStyles } from '@material-ui/core/styles'; 
import style from '../style/style';
import ReactStars from 'react-stars';
import Comments from './Comments';

class Restaurant extends Component {
  ratingChanged = (newRating) => {
    console.log(newRating)
  }

  render() {
    const { classes, restaurant } = this.props; 
    return (
      <Col m={4} s={12}>
        <Card textClassName={classes.cardTitleText} header={
            <CardTitle reveal image={restaurant.coverUrl} waves='light' />
          }
          title={restaurant.name}
          reveal={
            <div>
              <hr />
              <Comments />
            </div>
          }
          actions={
            [
              <ReactStars 
                className={classes.stars}
                count={5}
                value={4.5}
                onChange={this.ratingChanged}
                size={30}
                color2={'#ffd700'} 
              />,
              <p className={classes.starsRating}>4.5</p>,
              <div className={classes.distance}>
                <Icon className={classes.distanceIcon}>flag</Icon>
                <p className={classes.distanceText}>145m</p>
              </div>
            ]
          }
        >
        <p>{restaurant.culinary}</p>
        </Card>
      </Col>
    );
  }
}

export default (withStyles(style)(Restaurant));
