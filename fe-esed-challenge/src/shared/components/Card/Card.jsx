import PropTypes from 'prop-types';
import './Card.css'

const Card = ({ data }) => {
    return (
        <div className="card">
            <h3>{data?.name}</h3>
            <p>Path: {data?.path}</p>
            <p>Mass: {data?.mass}</p>
            <p>Mass Unit: {data?.mass_unit}</p>
            <p>Family: {data?.family}</p>
            <p>User: {data?.user}</p>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string,
        mass: PropTypes.number,
        mass_unit: PropTypes.string,
        family: PropTypes.string,
        user: PropTypes.string,
    }).isRequired,
};

export default Card