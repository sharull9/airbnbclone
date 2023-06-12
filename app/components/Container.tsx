"use client";
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 sm:px-2 md:px-10 xl:px-20">
      {children}
    </div>
  );
}
