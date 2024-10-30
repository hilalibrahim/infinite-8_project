// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function XPBar() {
//   const barRef = useRef(null);

//   useEffect(() => {
//     gsap.to(barRef.current, { width: "100%", duration: 3, ease: "power2.out" });
//   }, []);

//   return (
//     <div className="w-[60%] bg-gray-200 rounded-full h-4 overflow-hidden">
//       <div ref={barRef} className="bg-[#fac100] h-full w-0"></div>
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function XPBar() {
  const barRef = useRef(null);
  const [xp, setXp] = useState(0); // State to hold XP value

  useEffect(() => {
    const totalXP = 1000; // Total XP to reach
    const duration = 3; // Duration in seconds for the animation
    const increment = totalXP / (duration * 100); // Increment for every 100ms

    // Animate the XP bar width to 100%
    gsap.to(barRef.current, { width: "100%", duration, ease: "power2.out" });

    // Animate the XP value from 0 to totalXP
    const xpAnimation = gsap.to({ xp: 0 }, {
      xp: totalXP,
      duration,
      onUpdate: function() {
        setXp(Math.round(this.targets()[0].xp)); // Update XP state on each animation frame
      },
      ease: "power2.out",
    });

    return () => {
      xpAnimation.kill(); // Cleanup GSAP animation on unmount
    };
  }, []);

  return (
    <div className="w-[60%] flex flex-col items-center">
      <div className="mb-1 text-white">XP: {xp}</div> {/* Display XP value */}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div ref={barRef} className="bg-[#fac100] h-full w-0"></div>
      </div>
    </div>
  );
}
