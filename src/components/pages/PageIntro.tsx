type PageIntroProps = {
  lead: string;
  subLead?: string;
  desc?: string;
};

export default function PageIntro({
  lead,
  subLead,
  desc,
}: PageIntroProps) {
  return (
    <div className="u-pageIntro max-w-[1020px] lg:w-[82.3%] lg:ml-[12%] lg:mr-[9%] px-[10.6%] lg:px-0 pt-14 lg:pt-20 lg:pb-32">
      <div className="u-pageIntro-lead u-fade-in">
        <h2
          className="shippori text-2xl lg:text-[28px] leading-[180%] lg:w-[40%] pb-2 lg:pb-4"
          dangerouslySetInnerHTML={{ __html: lead }}
        ></h2>
        {subLead && <p className="garamond text-lg lg:text-xl lg:w-[40%]" dangerouslySetInnerHTML={{ __html: subLead }}></p>}
      </div>

      {desc && (
        <div
          className="u-pageIntro-desc shippori lg:text-lg leading-[180%] lg:max-w-lg mt-6 lg:mt-14 lg:ml-auto lg:mr-0 u-fade-in"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  );
}
