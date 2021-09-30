import React from 'react';
import Component from './Component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
        handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
        handleAdddTodo: (data) => dispatch({ type: 'ADD_TODO', payload: data })

    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export default Container;