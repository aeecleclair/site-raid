import { Component } from 'react';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';

class EcheanceItem extends Component {
    state = {  }
    render() {
        var style = 'echeance-container';
        if (this.props.isInverted) {
            style += ' inverted';
        }
        return (
            <TimelineItem sx={{height: 250}}>
                <TimelineSeparator>
                  <TimelineDot color="grey" variant='outlined' sx={{height: 20, width: 20}}/>
                  {this.props.isFinal ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <div className={style}>
                    <h3>{this.props.title}</h3>
                    <div className='echeance-date'>
                      {this.props.date}
                    </div>
                    <div className='echeance-text'>
                      {this.props.description}
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
        );
    }
}

export default EcheanceItem;