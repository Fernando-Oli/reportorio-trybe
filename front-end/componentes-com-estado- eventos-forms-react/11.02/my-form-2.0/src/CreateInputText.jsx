import React from "react";

class CreateInputText extends React.Component {
    render() {
        const obj = [{name:'Email: ', length: 50}, {name:'CPF: ', length: 11},]
        return obj.map((e) => <label htmlFor={e.name}>
            {e.name}
        <input required type="text" name={e.name} id={e.name} maxLength={e.length} />
    </label>)
    }
}

export default CreateInputText;