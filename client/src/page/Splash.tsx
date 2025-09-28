// client/src/page/Splash.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { miniApp, useRawInitData } from "@telegram-apps/sdk-react";
import user from "../api/User";

import mr_cool from "../assets/mr_cool.gif";
import money_flying from "../assets/money_flying.webp";
import who_care_emoji from "../assets/who_care_emoji.webp";
import silent_emoji from "../assets/silent_emoji.webp";

const Splash: React.FC = () => {
  const [trigger, { data, isLoading, isError, error }] = user.LoginUser();
  const navigate = useNavigate();
  const initData = useRawInitData();
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    // If there's no initData yet, wait for it
    if (!initData) return;

    // Trigger login with safe handling
    trigger({ key: initData })
      .unwrap()
      .then((res) => {
        // Successful login — navigate to /app
        try {
          if (miniApp.mountSync?.isAvailable && miniApp.mountSync.isAvailable()) {
            // mark as mounted if required by the SDK
            if (!miniApp.isMounted()) {
              miniApp.mountSync.mount();
            }
          }
        } catch (e) {
          // ignore mount failures; they shouldn't block navigation
          // eslint-disable-next-line no-console
          console.warn("miniApp mount warning:", e);
        }
        navigate("/app");
      })
      .catch((err) => {
        // Log and show a friendly fallback — do not let UI stay stuck
        // eslint-disable-next-line no-console
        console.error("Login failed from Splash:", err);
        setLocalError("Login request failed. Please try again or continue to Intro.");
      });
  }, [trigger, initData, navigate]);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#0A1B2B] to-[#08304A] overflow-hidden">
      {/* decorative/animated background images, keep as in original */}
      <img className="absolute top-0 right-0 w-40 opacity-30" src={money_flying} alt="money" draggable={false} />
      <img className="absolute bottom-0 left-0 w-28 opacity-30" src={who_care_emoji} alt="emoji" draggable={false} />
      <img className="absolute bottom-0 right-0 w-32 opacity-25" src={silent_emoji} alt="emoji2" draggable={false} />

      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center flex-col">
        <img className="w-72" src={mr_cool} draggable={false} alt="the cool guy" />
        <p className="font-montserrat text-2xl font-medium text-center text-white mt-6">
          Get ready to join the coolest people's club.
        </p>

        {/* Loading / Error UI */}
        <div className="mt-6 w-64 text-center">
          {isLoading ? (
            <p className="text-sm">Logging in…</p>
          ) : isError || localError ? (
            <>
              <p className="text-sm text-red-300">{localError ?? "Login failed. Please try again."}</p>
              <div className="mt-3 flex gap-2">
                <button
                  className="bg-white text-black px-4 py-2 rounded"
                  onClick={() => {
                    // fallback: go to /intro so user can continue
                    navigate("/intro");
                  }}
                >
                  Go to Intro
                </button>
                <button
                  className="bg-transparent border border-white px-4 py-2 rounded"
                  onClick={() => {
                    // try trigger again if initData exists
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
