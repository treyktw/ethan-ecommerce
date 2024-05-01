import React from 'react'

type Props = {}

const FooterComponent = (props: Props) => {
  return (
    <div>
      <div className="w-[1920px] h-[492px] px-[88px] py-[104px] bg-white flex-col justify-start items-start gap-20 inline-flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="w-[398px] flex-col justify-center items-start gap-8 inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-2 flex">
              <div className="w-[110.38px] h-[35.75px] justify-start items-center gap-2.5 inline-flex">
                <div className="w-[35.75px] h-[35.75px] justify-center items-center flex">
                  <div className="w-[35.75px] h-[35.75px] relative">
                  </div>
                </div>
                <div className="text-black text-2xl font-semibold ">tilebit</div>
              </div>
            </div>
            <div className="self-stretch text-black text-base font-normal  leading-relaxed">In aliquet malesuada consectetur in enim eu maecenas suspendisse. Elementum at enim consequat elit nunc dictum. Mauris amet gravida.</div>
          </div>
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[337px] text-gray-900 text-2xl font-normal  leading-loose">Newsletter</div>
              <div className="w-[337px] text-gray-900 text-base font-normal  leading-relaxed">Want to hear from us on an hourly basis?</div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-4 h-4 relative bg-white rounded border border-gray-300" />
                <div className="text-gray-900 text-xs font-normal  leading-[18px] tracking-tight">I agree to everything</div>
              </div>
              <div className="w-[337px] justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch grow shrink basis-0 p-3 bg-white rounded-lg border border-gray-300 justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-gray-400 text-base font-normal  leading-normal">Placeholer</div>
                    <div className="w-4 h-4 p-px justify-center items-center flex" />
                  </div>
                </div>
                <div className="px-5 py-2 bg-gray-900 rounded-lg justify-start items-center gap-3 flex">
                  <div className="text-white text-base font-normal  leading-normal">Send</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="justify-start items-start gap-8 flex">
            <div className="text-black text-base font-normal  leading-normal">©2023</div>
            <div className="text-black text-base font-normal  leading-normal">Tilebit.io</div>
          </div>
          <div className="justify-start items-start gap-8 flex">
            <div className="text-black text-base font-normal  leading-normal">Privacy Policy</div>
            <div className="text-black text-base font-normal  leading-normal">Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent