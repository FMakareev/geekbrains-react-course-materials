import React, {Component} from "react";

const getInitialState = () => ({
    values: {},
})

export const SimpleFormHOC = (WrapperComponent) => {

    return class extends Component {

        state = getInitialState()

        setFieldValue = (name, value) => {
            this.setState((state) => ({
                values: {
                    ...state.values,
                    [name]: value,
                }
            }))
        }

        getFieldValue = (name) => this.state.values[name] || ''

        resetForm = () => {
            this.setState(getInitialState())
        }

        render() {

            return <WrapperComponent
                values={this.state.values}
                setFieldValue={this.setFieldValue}
                getFieldValue={this.getFieldValue}
                resetForm={this.resetForm}
            />
        }
    }
}