import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { FlatButton } from 'material-ui';

const Question = () => (
  <div>
    <Card>
      <CardHeader
        title="aaaa"
        subtitle="sub"
      />
      <CardMedia>
        <img
          alt=""
          src="http://www.mofa.go.jp/mofaj/area/latinamerica/image/map29.gif"
        />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
);
export default Question;
