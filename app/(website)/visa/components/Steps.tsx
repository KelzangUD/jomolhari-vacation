const ListItem = ({
  index,
  title,
  subtitle,
}: {
  index: number;
  title: string;
  subtitle: string;
}) => {
  return (
    <li className="flex gap-6">
      <div className="flex items-center justify-center">
        <p className="flex items-center justify-center w-5 h-5 md:w-8 md:h-8 rounded-full bg-blue-100 text-primary text-xs md:text-sm font-semibold">
          {index}
        </p>
      </div>
      <div>
        <span className="font-semibold gap-2 block">{title}</span>
        <span className="text-secondary">{subtitle}</span>
      </div>
    </li>
  );
};

export default function Steps() {
  return (
    <div className="p-4 md:p-6 xl:p-8 bg-white rounded-2xl shadow">
      <h6 className="font-semibold">Steps to Apply for a Visa</h6>
      <p className="text-xs md:text-base">
        Follow these simple steps to complete your application:
      </p>
      <ul className="flex flex-col gap-4 mt-3 ml-2 md:ml-4 text-xs md:text-sm">
        <ListItem
          index={1}
          title="Sign our Pledge of Friendship"
          subtitle="A commitment to protect, preserve, and positively contribute to
              Bhutan."
        />
        <ListItem
          index={2}
          title="Create an account"
          subtitle="Create an account on the visa portal."
        />
        <ListItem
          index={3}
          title="Add your travel information"
          subtitle="Enter your planned travel dates and details."
        />
        <ListItem
          index={4}
          title="Pay the visa fee and SDF"
          subtitle="Complete the payment for your planned stay."
        />
        <ListItem
          index={5}
          title="Submit your application."
          subtitle="You can save your application anytime and return later to complete
            it."
        />
      </ul>
      <p className="text-xs md:text-sm my-4 bg-gray-100 p-2 rounded-md">
        Once submitted, your visa will be reviewed within
        <span className="font-semibold"> five working days</span>.
      </p>
    </div>
  );
}
