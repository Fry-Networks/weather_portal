import { useState } from "react";
import Modal from "react-modal";
import LacrosseInput from "../Inputs/LacrosseInput";
import Typography from "../Typography";
import SubmitLacrosseKeyButton from "../SubmitButtons/SubmitLacrosse";

interface LacrosseModalProps {
  isOpen: boolean;
  setOpen: Function;
}

export const LacrosseModal: React.FC<LacrosseModalProps> = ({
  isOpen,
  setOpen,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, updateMessage] = useState({ message: "", color: "white" });
  const [disappear, setDisappear] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpen(false);
    setEmail("");
    setPassword("");
    updateMessage({ message: "", color: "white" });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="bg-[#0CA7E5] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 w-auto sm:w-[600px] rounded-[10px]"
      overlayClassName="fixed inset-0 bg-black/20"
    >
      <div className="flex justify-end">
        <button
          className="text-[20px] rounded-[50%] border-white"
          onClick={handleCloseModal}
        >
          X
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Typography className="mb-3" variant="title">Please enter Lacrosse credentials below:</Typography>
        <LacrosseInput
          token={email}
          setToken={setEmail}
          inputType="server"
          placeholder="Enter Email"
        />
        <LacrosseInput
          token={password}
          setToken={setPassword}
          inputType="id"
          placeholder="Enter Password"
        />
        <SubmitLacrosseKeyButton
          updateMessage={updateMessage}
          email={email}
          password={password}
          disappearInput={setDisappear}
        />

        <Typography variant="p" className={'text-white text-center mt-10 font-bold'}>
        {message.message}
        </Typography>
      </div>
    </Modal>
  );
}
