import React from 'react';
import PropTypes from 'prop-types';

export const AppStateHandler = (props) => {
    const { isLoading, error } = props;

    return (
        <React.Fragment>
            { isLoading ? <h1>Cargando...</h1> : 
                error ? <h1> { error.message }</h1> :
                    props.children
            }
        </React.Fragment>
    )
}

Error.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}
