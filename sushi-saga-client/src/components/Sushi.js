import React, {Fragment, Component} from 'react'

export default class Sushi extends Component {

    handleEat = (event) => {
        this.props.eatSushi(this.props.sushi)
    }
    render() {
        return (<div className="sushi">
            <div className="plate" onClick={this.handleEat}>
                {
                    /* Tell me if this sushi has been eaten! */
                    this.props.ate
                        ? null
                        : <img src={this.props.sushi.img_url} width="100%"/>
                }
            </div>
            <h4 className="sushi-details">
                {this.props.sushi.name}
                - ${this.props.sushi.price}
            </h4>
        </div>)
    }
}
