import { StatisticsCard } from "./StatisticsCard";
import { List, Header } from "./Statistics.styled";


export const Statistics = ({ stats }) => {
    return (
        <section className="statistics">
        <Header className="title">Upload stats</Header>
        <List>
            {stats.map(statItem => (
                <li key={statItem.id}>
                   <StatisticsCard cards={statItem} />
                </li>
            ))}
        </List>
        </section>);
};
