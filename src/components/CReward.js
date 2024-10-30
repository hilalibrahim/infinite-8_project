
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function RewardPopup({ rewards }) {
  const popupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      popupRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  const handleClose = () => {
    window.location.reload(); // Refresh the page when the close button is clicked
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
    style={{
        backgroundImage: "url('/bg1.jpg')", // Set your popup background image path here
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center" // Center the background image
      }}>
      <div ref={popupRef} className="bg-[#333] p-6 rounded-lg shadow-lg text-center text-white relative">
        <button
          onClick={handleClose} // Call handleClose to refresh the page
          className="absolute top-2 right-2 text-white text-xl"
          aria-label="Close"
        >
          &times; {/* Close icon */}
        </button>
        <h2 className="text-2xl font-bold mb-2 text-[#f7d116]">Congratulations!</h2>
        <p className="mb-4 text-sm">Command completed successfully!</p>
        <div className="border-t border-gray-600 my-2"></div>
        <p className="parag text-sm mb-4">
         You have successfully completed a command! Here are your well-earned rewards.<br/> Keep exploring the Command Center roe even more exciting mission and bigger rewards!
        </p>
        <p>You have gained:</p>
        <p className="rewards">Rewards</p>
        <div className="flex justify-center space-x-4 mt-4">
          {rewards.map((reward, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={reward.icon} alt={reward.name} className="w-12 h-12 mb-2" />
              <div className="mt-2">{reward.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
