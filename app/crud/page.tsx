'use client'

import axios from "axios";
import { useEffect, useState } from "react"
import Swal from "sweetalert2";

// import Create from "./action";

interface ProductInterface {
    id: number
    name: string
    price: number
}

export default function Crud () {
    const [name, setName]= useState('');
    const [price, setPrice]= useState(0);
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [id , setId] = useState(0);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const url = '/api/product/list';
        const response = await axios.get(url);

        if (response.status === 200 ) {
            setProducts (response.data);
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            name: name,
            price: price
        }
        if (id === 0 ){
            const url = '/api/product/create';
            await axios.post(url,payload)
        } else {
            const url = '/api/product/update/' + id;
            await axios.put(url,payload);
            setId(0);
        }

        setName('');
        setId(0);

            Swal.fire({
                title: 'save',
                text: 'success',
                icon: 'success',
                timer: 2000
            })
        fetchData();

    }

    const handleDelete = async (id: number) => {
        const result = await Swal.fire({
            title: 'ลบรายการ',
            text: 'ยืนยันการลบสินค้านี้?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'ลบ',
            cancelButtonText: 'ยกเลิก',
        });
    
        if (result.isConfirmed) {
            try {
                const response = await axios.delete(`/api/product/delete/${id}`);
                if (response.status === 200) {
                    Swal.fire({
                        title: 'สำเร็จ',
                        text: 'ลบสินค้าเรียบร้อยแล้ว',
                        icon: 'success',
                        timer: 1500,
                    });
                    fetchData(); // โหลดข้อมูลใหม่หลังลบ
                }
            } catch (error) {
                Swal.fire({
                    title: 'เกิดข้อผิดพลาด',
                    text: 'ไม่สามารถลบสินค้าได้',
                    icon: 'error',
                });
                console.error(error);
            }
        }
        fetchData();
    };

    const handleEdit = (products: ProductInterface) => {
        setName(products.name);
        setPrice(products.price);
        setId(products.id);
    }


    return (
        <div className="p-4">
            <form onSubmit={handleSave} className="flex flex-col gap-2 mb-6 max-w-md">
                <label>ชื่อสินค้า</label>
                <input
                    className="border p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                />

                <label>ราคา</label>
                <input
                    className="border p-2"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    name="price"
                />

                <button type="submit" className="btn bg-blue-500 text-white py-2 px-4 rounded">
                    <i className="fa fa-check mr-2"></i>
                    Save
                </button>
            </form>

            <div className="text-xl font-semibold mb-2">PRODUCT</div>

            <table className="w-full border border-gray-300 text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Price</th>
                        <th className="p-2 border w-[150px]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="p-2 border">{product.id}</td>
                            <td className="p-2 border">{product.name}</td>
                            <td className="p-2 border">{product.price}</td>
                            <td className="p-2 border">
                                <div className="flex gap-2">
                                    <button type="button" className="btn text-yellow-600" onClick={() => handleEdit(product)}>
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn text-red-600"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
