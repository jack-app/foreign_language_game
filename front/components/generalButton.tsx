type GeneralButton = {
  readonly text: string;
};
const GeneralButton = (generalButton: GeneralButton) => {
  return <button className="p-2">{generalButton.text}</button>;
};

export default GeneralButton;
