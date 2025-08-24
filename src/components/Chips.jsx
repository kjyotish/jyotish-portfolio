// Chips.jsx

const Chips = ({ label, color = "gray" }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
    gray: "bg-[#212121] text-gray-400",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full border border-solid border-width-[1px] border-color-white/10 hover:bg-white/10 ${
        colorClasses[color] || colorClasses.gray
      }`}
    >
      {label}
    </span>
  );
};

export default Chips;
