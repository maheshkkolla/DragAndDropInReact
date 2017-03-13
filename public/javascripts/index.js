import React from 'react';
import ReactDom from 'react-dom';
import JQuery from 'jquery';
import Lane from './lane'

class Todo extends React.Component {
    componentWillMount() {
        this.state = {
            skus: [
                {id: 11, name:"Bru 100g", lane: "todo"},
                {id: 12, name:"Kitkat 25g", lane: "todo"},
                {id: 13, name:"Wine 1000ml", lane: "todo"},
                {id: 14, name:"Maggie 2Kg", lane: "todo"},
                {id: 15, name:"Oats 50g", lane: "todo"},
                {id: 21, name:"Nutella 300g", lane: "doing"},
                {id: 22, name:"Bread 1Pc", lane: "doing"},
                {id: 23, name:"Coke 450ml", lane: "doing"},
                {id: 24, name:"Bru 500g", lane: "doing"},
                {id: 31, name:"TajMahal 250g", lane: "done"},
                {id: 32, name:"Sandal Soap 1pc", lane: "done"},
                {id: 33, name:"Knor Soup 5pc", lane: "done"},
                {id: 34, name:"Mac Book Pro 4GB", lane: "done"},
                {id: 35, name:"Skybags Medium", lane: "done"}
            ]
        }
    }

    getSkusForLane(lane) {
        return this.state.skus.filter((sku) => (sku.lane == lane));
    }

    changeSkuLane(skuId, toLane) {
        let skus = this.state.skus;
        let changedSkus = skus.map((sku) => {
            (sku.id == skuId) && (sku.lane = toLane);
            return sku;
        });
        this.setState({
            skus: changedSkus
        });
    }

    render() {
        return (
            <div>
                <Lane title="todo" skus={this.getSkusForLane("todo")} addSku={this.changeSkuLane.bind(this)}/>
                <Lane title="doing" skus={this.getSkusForLane("doing")} addSku={this.changeSkuLane.bind(this)}/>
                <Lane title="done" skus={this.getSkusForLane("done")} addSku={this.changeSkuLane.bind(this)}/>
            </div>
        );
    }
}


JQuery(document).ready(() => {
    ReactDom.render(
        <Todo />,
        document.getElementById('main')
    );
});
