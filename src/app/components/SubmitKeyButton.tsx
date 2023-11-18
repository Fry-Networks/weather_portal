import React, { useState } from "react";
import { AmbientLinkKey, LinkKey, weatherXMLinkToken } from "../server/AmbientWeather";
import { useWallet } from "@txnlab/use-wallet";
export function SubmitKeyButton({
  valid,
  apiKey,
  updateMessage,
  disappearInput,
}: {
  valid: boolean;
  apiKey: string;
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void;
  disappearInput: Function;
}) {
  const { activeAddress } = useWallet();
  return (
    <button
      onClick={() =>
        handleSubmit(apiKey, updateMessage, disappearInput, activeAddress!)
      }
      style={{
        ...buttonStyle,
        backgroundColor: valid ? "cyan" : "gray",
        width: "fit-content",
        alignSelf: "center",
      }}
      disabled={!valid}
    >
      Submit API Key
    </button>
  );
}

const handleSubmit = async (
  apiKey: string,
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void,
  disappearInput: Function,
  activeAddress: string
) => {
  disappearInput(true);
  updateMessage({ message: "Submitting Key...", color: "white" });
  const response: {
    verified: boolean;
    data: { message: string; color: string };
  } = await AmbientLinkKey(apiKey, activeAddress);
  updateMessage(response.data);
  if (!response.verified) disappearInput(false);
};
export function SubmitWeatherXMKeyButton({
  valid,
  token,
  updateMessage,
  disappearInput,
}: {
  valid: boolean;
  token: string;
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void;
  disappearInput: Function;
}) {
  const { activeAddress } = useWallet();
  return (
    <button
      onClick={() =>
        handleWeatherXMSubmit(token, updateMessage, disappearInput, activeAddress!)
      }
      style={{
        ...buttonStyle,
        backgroundColor: valid ? "cyan" : "gray",
        width: "fit-content",
        alignSelf: "center",
      }}
      disabled={!valid}
    >
      Submit Token
    </button>
  );
}

const handleWeatherXMSubmit = async (
  token: string,
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void,
  disappearInput: Function,
  activeAddress: string
) => {
  disappearInput(true);
  updateMessage({ message: "Submitting Key...", color: "white" });
  const response: {
    verified: boolean;
    data: { message: string; color: string };
  } = await weatherXMLinkToken(token, activeAddress);
  updateMessage(response.data);
  if (!response.verified) disappearInput(false);
};

export function SubmitEcoWittKeyButton({
  valid,
  appKeyValid,
  appKey,
  apiKey,
  updateMessage,
  disappearInput,
}: {
  valid: boolean;
  appKeyValid: boolean;
  appKey: string;
  apiKey: string;
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void;
  disappearInput: Function;
}) {
  const { activeAddress } = useWallet();
  return (
    <button
      onClick={() =>
        handleEcowittSubmit(
          apiKey,
          appKey,
          updateMessage,
          disappearInput,
          activeAddress!
        )
      }
      style={{
        ...buttonStyle,
        backgroundColor: valid ? "cyan" : "gray",
        width: "fit-content",
        alignSelf: "center",
      }}
      disabled={!valid || !appKeyValid}
    >
      Submit API And App Key
    </button>
  );
}

const handleEcowittSubmit = async (
  apiKey: string,
  appKey: string,
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void,
  disappearInput: Function,
  activeAddress: string
) => {
  disappearInput(true);
  updateMessage({ message: "Submitting Key...", color: "white" });
  const response: {
    verified: boolean;
    data: { message: string; color: string };
  } = await LinkKey(apiKey, appKey, activeAddress);
  updateMessage(response.data);
  if (!response.verified) disappearInput(false);
};

const buttonStyle = {
  backgroundColor: "yellow",
  border: "none",
  color: "black",
  padding: "15px 32px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "5px",
};
