import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { RevealWrapper } from "next-reveal";

function WeddingEvents() {
  return (
    <section id="wedding-events">
      <div className="bg-[url('/images/weddingEvents/AURA-MAULANA-14.webp')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-4xl italic text-white text-center font-light font-sans">
            Wedding Events
          </h1>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-10">
              <img
                src="/images/weddingEvents/AURA-MAULANA-9.webp"
                alt="akad"
                className="w-full h-72 object-cover rounded-t-[1.25rem]"
              />
              <div className="flex">
                <div className="w-[20%] bg-[#424242] rounded-bl-[1.25rem] flex items-center">
                  <p className="rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-5 lg:-translate-x-3.5 tracking-[5px]">
                    AKAD
                  </p>
                </div>
                <div className="w-[80%] bg-white px-4 py-6 rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="italic text-xl font-light">
                    Sabtu, 16 November 2024
                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <p className="flex items-center text-[#5a5a5a] font-light text-sm gap-1.5">
                    <AiFillClockCircle />
                    <span>09.00 WIB s.d Selesai</span>
                  </p>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
                      Kediaman Mempelai Wanita
                    </strong>
                    <br />
                    Telah Dilaksanakan
                  </p>
                  {/* <a
                    href="https://www.google.com/maps/place/6%C2%B025'52.0%22S+106%C2%B049'28.1%22E/@-6.4311111,106.8218973,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.4311111!4d106.8244722?entry=ttu"
                    className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                    target="_blank"
                  >
                    GOOGLE MAPS
                  </a> */}
                </div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-6">
              <img
                src="/images/weddingEvents/2.jpg"
                alt="akad"
                className="w-full h-72 object-cover rounded-t-[1.25rem] object-left"
              />
              <div className="flex">
                <div className="w-[80%] bg-white px-4 py-6 rounded-bl-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="italic text-xl font-light">
                  Minggu, 2 Februari 2025
                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <div>
                    <p className="flex items-center text-[#5a5a5a] font-light text-[0.8rem] gap-1.5">
                      <AiFillClockCircle />
                      <span>11.00 WIB - Selesai</span>
                    </p>
                  </div>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
                      Kediaman Mempelai Pria
                    </strong>
                    <br />
                    Jl. Kemang Kp. Kekupu RT.03/06 No. 65 Kelurahan Pasir Putih
                    Kecamatan Sawangan Kota Depok
                  </p>
                  <a
                    href="https://www.google.com/maps/@-6.431131,106.7827222,3a,75y,279.36h,76.06t/data=!3m7!1e1!3m5!1shRFRsauspnQ_uW54rRNlxA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.935212573791716%26panoid%3DhRFRsauspnQ_uW54rRNlxA%26yaw%3D279.3595982486725!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                    className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                    target="_blank"
                  >
                    GOOGLE MAPS
                  </a>
                </div>
                <div className="w-[20%] bg-[#424242] rounded-br-[1.25rem] flex items-center">
                  <p className="-rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-[3rem] lg:-translate-x-[2.35rem] tracking-[5px]">
                    RESEPSI
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default WeddingEvents;
