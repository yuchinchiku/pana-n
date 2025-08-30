type NotifyProps = {
  title?: string;
  desc?: string;
};


export default function Notify({ desc, title }: NotifyProps) {
  return (
    <div className="px-5 md:px-0">
      <div className="u-notify shippori text-center max-w-[1020px] md:w-[82.3%] border border-pana-salmonPink mt-10 md:mt-0 mb-20 md:ml-[12%] md:mr-[9%] px-5 py-4">
        {title && <p>{title}</p>}
        {desc && <p dangerouslySetInnerHTML={{ __html: desc }} />}
      </div>
    </div>
  );
}
