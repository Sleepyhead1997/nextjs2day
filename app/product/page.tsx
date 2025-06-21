'use client'

import { useEffect, useState } from "react"

interface ProductInterface {
    id: number,
    name: string,
    price: number
}

export default function Product () {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [sum, setSum] = useState(0);

    useEffect(() =>{
        fetchdata();
    },[]);
    useEffect(() => {
        let sumData = 0;

        for(let i = 0; i < products.length; i++) {
            sumData += products[i].price;
        }
        setSum(sumData);
    },[products])

    const fetchdata = () => {
        setProducts([
            {id:1, name: 'AAA', price: 500},
            {id:2, name: 'BBB', price: 600},
            {id:3, name: 'CCC', price: 700},
            {id:4, name: 'DDD', price: 800},
            {id:5, name: 'EEE', price: 1000}

        ])
    }

    return (
        <div>
            <div>PRODUCTS</div>
            <div>Rows= {products.length}, SUM = {sum}</div>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th>id</th>
                        <th>name</th>
                        <th className="text-right">price</th>
                    </tr>
                </thead>
                <tbody>{products.map((product)=> (
                <tr key={product.id}>
                    <td className="text-center">{product.id}</td>
                    <td className="text-center">{product.name}</td>
                    <td className="text-right">{product.price.toLocaleString("th-TH",{
                        style: "currency",
                        currency: "thb",
                    })}
                        </td>               
                </tr>
            ))}
                </tbody>
                <tfoot>
                    <tr className="bg-gray-200 text-black">
                        <td colSpan={3} className="text-right">
                            {sum.toLocaleString("th-TH",{
                                style:"currency",
                                currency:"thb",
                            })}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}