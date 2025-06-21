'use client'

import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [message, setmessage] = useState('helloomg');

  const handleChange = () => {
    setmessage('HiHIHIHIHI');
  }

  const showAlert = async () => {
    const button = await Swal.fire({
      title: 'บันทึกข้อมูล',
      text: 'ยืนยันการบันทึก',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    })
    if(button.isConfirmed) {
      await Swal.fire({
        title: 'Complete',
        text: 'Success',
        icon:"success",
    })
    }
  }

  return (
      <div className="text-6xl font-bold flex flex-col gap-3 justify-center items-center">
        <div> Hello world {message}
      </div>
      <div>
        <input className="bg-white m-2 p-2"
        onChange={(e) => setmessage(e.target.value)}></input>
      </div>
      <button className="bg-green-400 px-4 py-2 rounded-md"
      onClick={handleChange}>
        click here
      </button>
      <button className="btn"onClick={showAlert}>
        Alert
      </button>
      </div>
  );
}
