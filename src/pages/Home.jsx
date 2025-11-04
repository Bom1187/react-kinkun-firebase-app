import React, { useState } from "react";
import food from "../assets/food.png";
import Footer from "../components/Footer";
import { FaFacebookSquare, FaLine, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  const navigate = useNavigate();
  const [secureCode, setSecureCode] = useState("");

  const handleAccessAppClick = () => {
    if (secureCode.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอกรหัสเข้าใช้งาน",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    if (secureCode.toUpperCase() === "SAU") {
      navigate("/showallkinkun");
    } else {
      Swal.fire({
        icon: "error",
        title: "รหัสเข้าใช้งานไม่ถูกต้อง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <>
      <div>
        <div className="w-10/12 mx-auto border-gray-300 p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center text-blue-700">
            Kinkun App (Firebase)
          </h1>
          <h1 className="text-2xl font-bold text-center text-blue-700">
            บันทึกการกิน
          </h1>
          <img src={food} alt="อาหาร" className="block mx-auto w-30 mt-5" />

          <input
            type="text"
            placeholder="Enter Secure Code"
            value={secureCode}
            onChange={(e) => setSecureCode(e.target.value)}
            className="p-3 border border-gray-400 rounded-md mt-5 w-full"
          />
          <button
            className="w-full bg-blue-700 p-3 rounded-md mt-5 text-white hover:bg-blue-800 cursor-pointer"
            onClick={handleAccessAppClick}
          >
            เข้าใช้งาน
          </button>

          <div className="mt-5 flex justify-center text-4xl text-gray-500 gap-7">
            <FaFacebookSquare />
            <FaLine />
            <FaGithub />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
