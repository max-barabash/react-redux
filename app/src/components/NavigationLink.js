import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const LinkButton = ({to, label}) => {
    return (
        <Link to={to}>
            <div className = 'section-link'>{label}</div>
        </Link>
    )
};

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default LinkButton