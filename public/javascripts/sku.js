import React from 'react'

export default class Sku extends React.Component {

    setDataForDrag(event) {
        event.dataTransfer.setData("sku_id", this.props.id);
    }

    render() {
        return (
            <div className="sku" draggable="true" onDragStart={ this.setDataForDrag.bind(this) }>
                <div className=""> { this.props.id } </div>
                <div className="skuTitle"> { this.props.name } </div>
            </div>
        );
    }
}