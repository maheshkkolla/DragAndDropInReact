import React from 'react';
import Sku from './sku'

export default class Lane extends React.Component {

    onDragOver(event) {
        event.preventDefault();
    }

    drop(event) {
        event.preventDefault();
        var skuId = event.dataTransfer.getData("sku_id");
        this.props.addSku(skuId, this.props.title);
    }

    render() {
        return (
            <div className="todoLane" onDrop={ this.drop.bind(this) } onDragOver={ this.onDragOver.bind(this) }>
                <div className="laneTitle"> { this.props.title } </div>
                <div className="skus">
                    {
                        this.props.skus.map((sku) => <Sku {...sku} key={sku.id}/>)
                    }
                </div>
            </div>
        );
    }
}