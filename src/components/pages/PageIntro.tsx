type PageIntroProps = {
  lead: string;
  subLead?: string;
  desc?: string;
};

export default function PageIntro({ lead, subLead, desc }: PageIntroProps) {
  return (
    <div className="u-pageIntro md:w-[82.3%] md:ml-[8.6%] md:mr-[9%] md:pt-20 md:pb-32">
      <div className="u-pageIntro-lead">
        <h2 className="shippori text-[28px] pb-4">{lead}</h2>
        <p className="garamond text-xl">{subLead}</p>
      </div>
      {desc && (
        <div
          className="u-pageIntro-desc shippori text-lg leading-[180%] md:max-w-lg md:mt-14 md:ml-auto md:mr-0"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  );
}