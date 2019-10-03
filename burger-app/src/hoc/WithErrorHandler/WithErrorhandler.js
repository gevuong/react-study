import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

// global error handler using a modal
const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        // distribute any props this component might receive
        return (
            <Aux>
                <Modal show>
                    Something went wrong!
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}

export default withErrorHandler;