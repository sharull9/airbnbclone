"use client";
type Props = {
  onClick: () => void;
  label: string;
};
export default function MenuItem({ onClick, label }: Props) {
  return (
    <div
      className="px-4 py-3 hover:bg-hoverPrimaryBg transition font-semibold"
      onClick={onClick}
    >
      {label}
    </div>
  );
}
