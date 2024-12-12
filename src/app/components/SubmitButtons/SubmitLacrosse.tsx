import { useWallet } from "@txnlab/use-wallet";
import { useState } from "react";
import Button from "../Button";
import { LacrosseKey } from "@/app/server/Lacrosse";

interface SubmitLacrosseKeyButtonProps {
  email: string;
  password: string;
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void;
  disappearInput: (flag: boolean) => void;
}
const SubmitLacrosseKeyButton: React.FC<SubmitLacrosseKeyButtonProps> = ({
  email,
  password,
  updateMessage,
  disappearInput,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { activeAddress } = useWallet();

  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isValidKeys = isValidEmail;

  const handleSensecapKeySubmit = async () => {
    setIsLoading(true);
    disappearInput(true);
    updateMessage({ message: "Submitting Key...", color: "white" });

    try {
      const response = await LacrosseKey(email,password, activeAddress!);
      updateMessage(response.data);
    } catch (error) {
      console.error("Error submitting Awair key:", error);
    } finally {
      setIsLoading(false);
      disappearInput(false);
    }
  };

  return (
    <Button
        onClick={handleSensecapKeySubmit}
        // isValid={true}
        isValid={isValidKeys}
        isLoading={isLoading}
        text="Submit Lacrosse"
        loadingText="Submitting..."
      />
  );
};

export default SubmitLacrosseKeyButton;
