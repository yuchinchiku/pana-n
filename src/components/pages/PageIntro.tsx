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
    <div className="u-pageIntro max-w-[1020px] md:w-[82.3%] md:ml-[12%] md:mr-[9%] px-[10.6%] md:px-0 pt-14 md:pt-20 md:pb-32">
      <div className="u-pageIntro-lead u-fade-in">
        <h2
          className="shippori text-2xl md:text-[28px] leading-[180%] pb-2 md:pb-4"
          dangerouslySetInnerHTML={{ __html: lead }}
        ></h2>
        {subLead && <p className="garamond text-lg md:text-xl">{subLead}</p>}
      </div>

      {desc && (
        <div
          className="u-pageIntro-desc shippori md:text-lg leading-[180%] md:max-w-lg mt-6 md:mt-14 md:ml-auto md:mr-0 u-fade-in"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  );
}
