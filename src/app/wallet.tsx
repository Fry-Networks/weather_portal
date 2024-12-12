"use client";
import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { DaffiWalletConnect } from "@daffiwallet/connect";
import { PeraWalletConnect } from "@perawallet/connect";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import {
  PROVIDER_ID,
  reconnectProviders,
  useInitializeProviders,
  useWallet,
  WalletProvider
} from "@txnlab/use-wallet";
import { WalletConnectModalSign } from "@walletconnect/modal-sign-html";
import { useEffect, useState } from "react";
import Connect from "./components/Connect";

import { AmbientModal } from "./components/KeyModals/AmbientModal";
import { EcowittModal } from "./components/KeyModals/EcowittModal";
import { SensecapModal } from "./components/KeyModals/SensecapModal";
import { WeatherXMModal } from "./components/KeyModals/WeatherXMModal";
import OpenButton from "./components/OpenButton";
import { LacrosseModal } from "./components/KeyModals/LacrosseModal";

export default function Wallet() {
  const walletProviders = useInitializeProviders({
    providers: [
      { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
      { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
      { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
      { id: PROVIDER_ID.MYALGO, clientStatic: MyAlgoConnect },
      {
        id: PROVIDER_ID.WALLETCONNECT,
        clientStatic: WalletConnectModalSign,
        clientOptions: {
          projectId: "74761852c2f607c540bb116a1bc9f011",
          metadata: {
            name: "Fry Foundation",
            description: "Authenticate yourself",
            url: "https://weather.fryfoundation.com",
            icons: ["https://walletconnect.com/walletconnect-logo.png"],
          },
        },
      },
    ],
  });
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [isEcowittModalOpen, setIsEcowittModalOpen] = useState(false);
  const [isWeatherXMModalOpen, setIsWeatherXMModalOpen] = useState(false);
  const [isSensecapModalOpen, setIsSensecapModalOpen] = useState(false);
  const [isLacrosseModalOpen, setIsLacrosseModalOpen] = useState(false);

  const { activeAddress } = useWallet();
  const showModal = () => {
    setModalIsOpen(true);
  };
  const showEcowittModal = () => {
    setIsEcowittModalOpen(true);
  };
  const showWeatherXMModal = () => {
    setIsWeatherXMModalOpen(true);
  };
  const showSensecapModal = () => {
    setIsSensecapModalOpen(true);
  };
  const showLacrosseModal = () => {
    setIsLacrosseModalOpen(true);
  };
  useEffect(() => {
    if (walletProviders !== null) {
      reconnectProviders(walletProviders);
    }
  }, []);
  if (!activeAddress) {
    return (
      <div
        style={{
          ...containerStyle,
        }}
      >
        <WalletProvider value={walletProviders}>
          <div style={{ ...cardStyle }}>
            <Connect />
          </div>
        </WalletProvider>
      </div>
    );
  }

  return (
    <div
      style={{
        ...containerStyle,
      }}
    >
      <WalletProvider value={walletProviders}>
        <div style={{ ...cardStyle, width: "100vw" }}>
          <Connect />
          <div style={{flexDirection: "row", display: "flex", justifyContent: "space-evenly"}}>
            <OpenButton
              showModal={showModal}
              text="Ambient"
              logo="/ambient.png"
            />
            <AmbientModal isOpen={isModalOpen} setOpen={setModalIsOpen} />
            <OpenButton
              showModal={showEcowittModal}
              text="Ecowitt / Froggit / Misol"
              logo="/ecowitt.png"
            />
            <EcowittModal
              isOpen={isEcowittModalOpen}
              setOpen={setIsEcowittModalOpen}
            />
            <OpenButton
            showModal={showWeatherXMModal}
            text="Weather XM"
            logo="/weatherxm.png"
          />
          <WeatherXMModal
            isOpen={isWeatherXMModalOpen}
            setOpen={setIsWeatherXMModalOpen}
          />
          <OpenButton
            showModal={showSensecapModal}
            text="Sensecap"
            logo="/sensecap.webp"
          />
          <SensecapModal
            isOpen={isSensecapModalOpen}
            setOpen={setIsSensecapModalOpen}
          />
          <OpenButton
            showModal={showLacrosseModal}
            text="Lacrosse"
            logo="/lacrosse.jpg"
          />
          <LacrosseModal
            isOpen={isLacrosseModalOpen}
            setOpen={setIsLacrosseModalOpen}
          />
          </div>
          
        </div>
      </WalletProvider>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  background: "rgb(28, 28, 28)",
  padding: "20px",
  margin: "auto",
  width: "90vw", // This will set the width to be the viewport width minus 40px
} as const;

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  background: "#84808a",
  borderRadius: "10px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
  width: "90vw", // This will set the width to be the parent width (which is the modified viewport width) minus 40px
} as const;
