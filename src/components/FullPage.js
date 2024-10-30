// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import XPBar from "./XPBar";
// import Badge from "./Badge";

// export default function FullPagePopup({ level }) {
//   const popupRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(popupRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
//   }, []);

//   return (
//     <div
//       ref={popupRef}
//       className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center text-white p-4"
//       style={{
//         backgroundImage: "url('/bg1.jpg')", // Change this to your image path
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <h2 className="levelup text-xl md:text-3xl lg:text-4xl">Level Up {level}!</h2>
//       <Badge />
//       <p className="desi text-[white] md:text-xl lg:text-2xl">Corporal</p>
//       <XPBar />
//       <button className="button">Claim NFT Badge</button>
//      <div className="paradiv pt-[5%]">
//      <p className="para1">You've leveled up and earned a new badge!</p>
//       <p>Claim your <a className="text-[#fa9000]">NFT badge</a> now,or retrieve it from your inventory.</p>
//       <p>To claim your new badge, you'll need to transfer your previous badge from your wallet for it to be burned in exchange for the new one. <br/>
//       If there's insufficient gas in your wallet, the transaction will be canceled. You can always visit your Inventory and claim your badge at any time.</p>
//      </div>
     
//     </div>
//   );
// }
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import XPBar from "./XPBar";
import Badge from "./Badge";

export default function FullPagePopup({ level, onClaimBadge }) { // Accept onClaimBadge prop
  const popupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(popupRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div
      ref={popupRef}
      className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center text-white p-4"
      style={{
        backgroundImage: "url('/bg1.jpg')", // Change this to your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="levelup text-xl md:text-3xl lg:text-4xl">Level Up {level}!</h2>
      <Badge />
      <p className="desi text-[white] md:text-xl lg:text-2xl">Corporal</p>
      <XPBar />
      <button onClick={onClaimBadge} className="button">Claim NFT Badge</button> {/* Call the function on click */}
      <div className="paradiv pt-[5%]">
        <p className="para1">You've leveled up and earned a new badge!</p>
        <p>Claim your <a className="text-[#fa9000]">NFT badge</a> now, or retrieve it from your inventory.</p>
        <p>To claim your new badge, you'll need to transfer your previous badge from your wallet for it to be burned in exchange for the new one. <br/>
          If there's insufficient gas in your wallet, the transaction will be canceled. You can always visit your Inventory and claim your badge at any time.</p>
      </div>
    </div>
  );
}
