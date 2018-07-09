import React, {Component} from 'react';


export default class Input extends Component {
    render() {
        const {name, classNameInput, type = 'text', value, onChange, label,lockStatus} = this.props;
        return (
            <div>
                <label htmlFor={name}>{label}</label>
                <textarea
                    rows='5'
                    disabled={lockStatus}
                    readOnly={lockStatus}
                    className={classNameInput}
                    onChange={onChange}
                    name={name}
                    id={name}
                    type={type}
                    value={value}>
                 </textarea>
            </div>
        );
    }
}