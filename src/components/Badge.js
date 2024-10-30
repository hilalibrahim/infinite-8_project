import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Badge() {
  const badgeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      badgeRef.current,
      { scale: 0, rotationY: 0 },
      { scale: 1, rotationY: 180, duration: 2, ease: "bounce.out" }
    );
  }, []);

  return (
    <div ref={badgeRef} className="w-40 h-40 rounded-full flex items-center justify-center text-white text-xl">
      <img src="/badge.png" alt="Badge" className="w-full h-full object-contain" />
    </div>
  );
}
