import React from "react";
import { useCopyToClipboard } from "usehooks-ts";

function CardRek() {
  const [value, copy] = useCopyToClipboard();
  return (
    <section id="wedding-events">
      <div className="bg-[url('/images/cardrek/bg.png')] min-h-screen flex justify-center items-center">
        <div className="space-y-12 ">
          <h1 className="text-4xl italic text-white text-center font-light font-sans mt-8">
            Wedding Gift
          </h1>
          <p className="text-center text-[0.75rem] leading-loose text-white mx-8 italic">
            Do'a Restu Anda Merupakan Karunia Yang Sangat Berarti Bagi Kami. Dan
            Jika Memberi Adalah Ungkapan Tanda Terima Kasih Anda. Anda dapat
            memberi Kado Secara Cashless
          </p>
          <div className="w-80 h-35 m-auto text-xs bg-red-100 rounded-xl relative text-slate-900 shadow-2xl transition-transform transform hover:scale-110">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="/images/cardrek/card.png"
            />

            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Name </p>
                  <p className="font-bold tracking-widest">
                    Aura Latifah Rahman
                  </p>
                </div>
                <img className="w-14 h-4" src="/images/cardrek/bca-logo.png" />
              </div>
              <br />
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-bold tracking-more-wider">1672176390</p>
                <button
                  className="bg-orange-400 ml-[190px] text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={() => copy("1672176390")}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z" />
                  </svg>
                  Copy
                </button>
              </div>
            </div>
          </div>

          
          {/* <p className="text-center text-[0.75rem] leading-loose text-white mx-8 italic ">
            Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih dari Hati
            Yang Tulus Apabila Bapak/ Ibu/ Saudara/i Berkenan Hadir Untuk
            Memberi Do'a Restu Kepada Kami.
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default CardRek;
