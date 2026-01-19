export const Meteors = ({ number = 20 }) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className="animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-215"
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/9 -z-100 h-px w-80.5 -translate-y-[90%] bg-linear-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};
