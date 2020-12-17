import React from 'react'
import {ProductItem} from "./ProductItem";

export class Products extends React.Component{
    constructor() {
        super();
        this.state = {
            products:[]
        }
    }
    componentDidMount() {
        fetch("http://1510.vozhzhaev.ru/php/getProducts.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result)
                let products = result.map((item, index)=>{
                    return <ProductItem key={index} title={item.name} description={item.description} img={item.img}/>
                });
                this.setState({
                    products: products
                })
            })
    }

    render() {
        console.log("Вызван метод render()");
        return <div className="content-lg container">
            <div className="row margin-b-40">
                <div className="col-sm-6">
                    <h2>Latest Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna
                        aliqua enim minim veniam exercitation</p>
                </div>
            </div>
            <div className="row">
                {this.state.products}
            </div>
        </div>
    }


}