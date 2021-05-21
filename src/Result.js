import React from 'react';

export default class Result extends React.Component {

    render() {
        const {result} = this.props;
        return (
            <div className='result'>
                <p><b>{result}</b></p>
            </div>
        )
    }
}