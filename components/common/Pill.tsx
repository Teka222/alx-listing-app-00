interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => (
  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full cursor-pointer hover:bg-blue-200 transition">
    {label}
  </span>
);

export default Pill;
