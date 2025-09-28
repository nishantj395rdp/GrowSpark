import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { miniApp, useRawInitData } from "@telegram-apps/sdk-react";
import user from "../api/User";

import mr_cool from "../assets/mr_cool.gif";
import money_flying from "../assets/money_flying.webp";
import who_care_emoji from "../assets/who_care_emoji.webp";
import silent_emoji from "../assets/silent_emoji.webp";

const Splash: React.FC = () => {
  const [trigger, { isLoading, isError }] = user.LoginUser(); // removed unused data
  const navigate = useNavigate();
  const initData = useRawInitData();
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    if (!initData) return;
    trigger({ key: initData })
      .unwrap()
      .then(() => {
        try {
          if (miniApp.mountSync?.isAvailable && miniApp.mountSync.isAvailable()) {
            console.info("MiniApp mountSync available.");
          }
        } catch (e) {
          console.warn("miniApp mount warning:", e);
        }
        navigate("/app");
      })
      .catch((err) => {
        console.error("Login failed from Splash:", err);
        setLocalError("Login failed. Please retry or continue.");
      });
  }, [trigger, initData, navigate]);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#0A1B2B] to-[#08304A] overflow-hidden">
      <img className="absolute top-0 right-0 w-40 opacity-30" src={money_flying} alt="money" draggable={false} />
      <img className="absolute bottom-0 left-0 w-28 opacity-30" src={who_care_emoji} alt="emoji" draggable={false} />
      <img className="absolute bottom-0 right-0 w-32 opacity-25" src={silent_emoji} alt="emoji2" draggable={false} />

      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
        <img className="w-72" src={mr_cool} draggable={false} alt="the cool guy" />
        <p className="font-montserrat text-2xl font-medium text-center text-white mt-6">
          Get ready to join the coolest people's club.
        </p>
        <div className="mt-6 w-64 text-center">
          {isLoading ? (
            <p className="text-sm">Logging in…</p>
          ) : isError || localError ? (
            <>
              <p className="text-sm text-red-300">{localError ?? "Login failed."}</p>
              <div className="mt-3 flex gap-2 justify-center">
                <button
                  className="bg-white text-black px-4 py-2 rounded"
                  onClick={() => navigate("/intro")}
                >
                  Go to Intro
                </button>
                <button
                  className="bg-transparent border border-white px-4 py-2 rounded"
                  onClick={() => {
                    setLocalError(null);
                    if (initData) trigger({ key: initData });
                  }}
                >
                  Retry
                </button>
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-300">Preparing your experience…</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Splash;
