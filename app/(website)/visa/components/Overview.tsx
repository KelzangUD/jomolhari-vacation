export default function Overview() {
  return (
    <div className="p-4 md:p-6 xl:p-8 bg-white rounded-2xl shadow">
      <h6 className="font-semibold">Overview</h6>
      <p className="text-xs md:text-base mt-4 text-secondary leading-6">
        All visitors <span className="font-semibold">require a visa</span>{" "}
        before traveling to Bhutan, expect citizens of{" "}
        <span className="font-semibold">
          India, Bangladesh,and the Maldives
        </span>
        . The visa must be pre-arranged through a licensed Bhutanese tour
        operator or one of their international partners.
      </p>
    </div>
  );
}
