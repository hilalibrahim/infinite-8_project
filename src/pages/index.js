
'use client'
import { useState } from "react";
import FullPagePopup from "../components/FullPage";
import RewardPopup from "../components/CReward";

export default function HomePage() {
  const [showLevelPopup, setShowLevelPopup] = useState(true); // Initially show FullPagePopup
  const [showRewardPopup, setShowRewardPopup] = useState(false);

  const handleClaimBadge = () => {
    setShowLevelPopup(false); // Hide the FullPagePopup
    setShowRewardPopup(true); // Show the RewardPopup
  };

  return (
    <div className="relative">
      {showLevelPopup && <FullPagePopup level={10} onClaimBadge={handleClaimBadge} />}
      {showRewardPopup && <RewardPopup rewards={[{ icon: '/xp.png', name: "20 XP" }, { icon:'/xp2.png', name: "250,000,000" }]} />}
    </div>
  );
}
