import { Component } from 'react';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';

export function getCurrentDate(separator='/'){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

export function reverseDate(dateString, separator='/'){
  let date = dateString.split(separator)
  return `${date[2]}${separator}${date[1]}${separator}${date[0]}`
}
class EcheanceItem extends Component {
    state = {  }
    render() {
        var style = 'echeance-container';
        if (this.props.isInverted) {
            style += ' inverted';
        }
        var now = getCurrentDate();
        var color = reverseDate(this.props.dateDebut) < now ? (reverseDate(this.props.dateFin) < now ? "success" : "success") : "grey";
        var variant = reverseDate(this.props.dateDebut) < now ? (reverseDate(this.props.dateFin) < now ? "filled" : "outlined") : "outlined";
        return (
            <TimelineItem className='echeance-item'>
                <TimelineSeparator>
                  <TimelineDot color={color} variant={variant} sx={{height: 20, width: 20}}/>
                  {this.props.isFinal ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <div className={style}>
                    <h3>{this.props.title}</h3>
                    <div className='echeance-date'>
                      {this.props.dateDebut} - {this.props.dateFin}
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