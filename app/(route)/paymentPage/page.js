"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PaymentPage() {
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(37);
  const [transactionId, setTransactionId] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // console.log("Transaction ID:", transactionId);
    // console.log("Selected File:", selectedFile);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 grid place-items-center">
      <div className="max-w-2xl w-full mx-auto">
        {/* Header with Binance Pay logo */}
        <div className="bg-white rounded-lg inline-block p-2 mb-6">
          <Image
            src="/binance-logo.png"
            alt="Binance Pay"
            width={150}
            height={30}
            className="h-7"
          />
        </div>

        <div className="flex justify-between items-start gap-6">
          <div className="flex-1">
            {/* Transaction Details */}
            <div className="space-y-1 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Date:</span>
                <span>2 December, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">ID DE PEDIDO:</span>
                <span>#25535120241202022637</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Payment Method:</span>
                <span>Binance Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Total:</span>
                <span>$ 1.00</span>
              </div>
            </div>

            {/* Transaction Information Form */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium">
                Your transaction information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block mb-1 text-sm">
                    ID DE USUARIO y ID DE TRANSACCIÓN
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full h-24 bg-gray-900 rounded p-2 border border-gray-700 text-sm"
                    required
                  />
                </div>

                <div>
                  <p className="mb-1 text-sm">
                    Attach proof of payment (JPG / PNG / PDF)
                  </p>
                  <div className="flex gap-2">
                    <label className="bg-[#00ff37] text-black px-4 py-1 rounded text-sm font-medium cursor-pointer hover:bg-[#00dd30] transition-colors">
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileChange}
                      />
                    </label>
                    <button
                      type="submit"
                      className="bg-[#00ff37] text-black px-6 py-1 rounded text-sm font-medium hover:bg-[#00dd30] transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - QR Code and Timer */}
          <div className="text-center space-y-2">
            <div className="bg-gray-800 p-2 rounded inline-block">
              <Image
                src="/qrcode.png"
                alt="QR Code"
                width={120}
                height={120}
                className="w-[120px] h-[120px]"
              />
            </div>
            <p className="text-sm">Inefablestore</p>
            <div>
              <p className="text-xs text-gray-400">
                Time remaining to complete payment
              </p>
              <div className="flex flex-col items-center mt-1">
                <div className="flex justify-center items-center gap-1 text-3xl font-bold">
                  <span>{String(minutes).padStart(2, "0")}</span>
                  <span>:</span>
                  <span>{String(seconds).padStart(2, "0")}</span>
                </div>
                <div className="flex justify-center items-center gap-4 text-xs text-gray-400 mt-1">
                  <span>Minutes</span>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
