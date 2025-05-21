import Form from "./Form";

export default function Survey() {
  return (
    <section className="bg-[#132F62] h-screen w-screen flex justify-center items-center">
      <div className="bg-[#ffffffe2] h-[90%] w-[40%] rounded-3xl flex flex-col">
        <Heading text="Shoppers Edge - Survey" />
        <Form />
      </div>
    </section>
  );
}
function Heading({ text }) {
  return (
    <div className="text-3xl font-bold text-[#132F62] flex justify-center my-3">
      {text}
    </div>
  );
}
