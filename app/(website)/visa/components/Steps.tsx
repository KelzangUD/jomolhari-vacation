export default function Steps() {
  return (
    <div className="p-4 md:p-6 xl:p-8 bg-white rounded-2xl shadow">
      <h6 className="font-semibold">Steps to Apply for a Visa</h6>
      <p className="text-xs md:text-base">
        Follow these simple steps to complete your application:
      </p>
      <ul className="flex flex-col gap-4 mt-3 ml-2 md:ml-4 text-xs md:text-sm">
        <li className="flex flex-col">
          <span className="font-semibold">
            1. Sign our Pledge of Friendship
          </span>
          <span className="text-secondary">
            {" "}
            A commitment to protect, preserve, and positively contribute to
            Bhutan.
          </span>
        </li>
        <li className="flex flex-col">
          <span className="font-semibold">2. Create an account</span>
          <span className="text-secondary">
            Create an account on the visa portal.
          </span>
        </li>
        <li className="flex flex-col">
          <span className="font-semibold">3. Add your travel information.</span>
          <span className="text-secondary">
            Enter your planned travel dates and details
          </span>
        </li>
        <li className="flex flex-col">
          <span className="font-semibold">4. Pay the visa fee and SDF</span>
          <span className="text-secondary">
            Complete the payment for your planned stay.
          </span>
        </li>
        <li className="flex flex-col">
          <span className="font-semibold">5. Submit your application.</span>
          <span className="text-secondary">
            You can save your application anytime and return later to complete
            it.
          </span>
        </li>
      </ul>
      <p className="text-xs md:text-base my-4 bg-gray-100 p-2 rounded-md">
        Once submitted, your visa will be reviewed within
        <span className="font-semibold"> five working days</span>.
      </p>
    </div>
  );
}
