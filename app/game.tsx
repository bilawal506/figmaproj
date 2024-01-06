import React from "react";

export default function Box() {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-1">
          {Array(30)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="relative w-[70px] h-[70px] m-1">
                {index === 0 && (
                  <div className="w-[72px] h-[70px]">
                    <div className="relative w-[70px] h-[70px] bg-white rounded-[20px] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] border-[#0000001a] shadow-[0px_7px_14px_#0000001a]">
                      <div className="absolute w-[46px] h-[49px] top-[14px] left-[10px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[35px] text-center tracking-[0] leading-[normal]">
                        A
                      </div>
                    </div>
                  </div>
                )}
                {index !== 0 && (
                  <div
                    className={`w-[70px] h-[70px] bg-white rounded-[20px] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] border-[#0000001a] shadow-[0px_7px_14px_#0000001a]`}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}