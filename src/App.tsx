import { useCallback, useState } from "react";
import "./styles.css";
import { Dialog } from "./Dialog";
export default function App() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const setOpenDialogFunc = useCallback(() => {
    setOpenDialog(true);
  }, []);
  return (
    <div className="App">
      {openDialog ? "true" : "false"}
      <h1>Dialog </h1>
      <button onClick={setOpenDialogFunc}>open Dialog</button>
      <Dialog isOpen={openDialog} setIsOpen={setOpenDialog} />
    </div>
  );
}
