"use client";
type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};
export default function Heading({ title, subtitle, center }: Props) {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-neutral-500 font-light mt-2">{subtitle}</div>
    </div>
  );
}
