import TrashIcon from "./assets/icons/trash.svg?react"
import ButtonIcon from "./components/Button-Icon"
import Card from "./components/Card";
import InputText from "./components/InputText";

function App() {
  return (
    <>
    <div className="grid gap-10">
      <div className="flex gap-1">
        <TrashIcon className="fill-pink-base"/>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon}/>
        <ButtonIcon icon={TrashIcon} variant="secondary"/>
        <ButtonIcon icon={TrashIcon} variant="tertiary"/>
      </div>

      <div className="flex gap-1">
        <InputText/>
      </div>
      <div className="flex gap-1">
        <Card size="md">Olá Mundo</Card>
      </div>
    </div>
  </>
  );
}

export default App
