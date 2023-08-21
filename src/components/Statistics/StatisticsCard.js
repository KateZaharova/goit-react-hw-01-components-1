import { List, ListItem, SpanPercentage } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const StatisticsCard = ({ cards: {label, percentage} }) => {
  return (
    
      <List className="stat-list">
        <ListItem className="item">
          <span className="label">{label}</span>
          <SpanPercentage className="percentage">{percentage}%</SpanPercentage>
        </ListItem>
       
      </List>
  )  
}

StatisticsCard.propTypes = {
  cards: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}; 