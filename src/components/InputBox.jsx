import React, { useId } from "react";

function InputBox({
   label,
   amount,
   onAmountChange,
   onCurrencyChange,
   currencyOptions = [],
   selectCurrency = "usd",
   amountDisable = false,
   currencyDisable = false,
   className = "",
}) {
   const amountInputId = useId();

   return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
         <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block ">{label}</label>
            <input
               id={amountInputId}
               className="outline-none w-full bg-transparent py-1.5"
               type="number"
               placeholder={amount}
               disabled={amountDisable}
               value={amount}
               onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}
            />
         </div>

         <div className="w-1/2 ">
            <label className="h-1/2 pl-25 mb-1 text-black/40 inline-block ">currency type</label>
            <select className="outline-none pl-30  bg-transparent py-1"
               value={selectCurrency}
               onChange={(e) =>{ onCurrencyChange && onCurrencyChange(e.target.value)}}
               disabled={currencyDisable}  >

               {currencyOptions.map((index) => (
                  <option key={index} value={index}>
                     {index}
                  </option>
               ))}

            </select>
         </div>
      </div>
   )
}

export default InputBox;