import Button from "./Button";

const FormHead = () => {
  return (
    <>
      <div className="container">
        <div className="col-2">
          <Button text="VIA MESSAGE" />
        </div>
        <div className="col-2">
          <Button text="VIA PHONE" />
        </div>
      </div>
    </>
  );
};

export default FormHead;