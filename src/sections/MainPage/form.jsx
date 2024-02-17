import React from "react";

const FeedBackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[2].value);
  };
  return (
    <div className="px-12 py-4 border-b border-cyan-700">
      <h2 className="mb-8 text-center text-[24px] font-semibold">
        Остались вопросы? Напишите нам
      </h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid grid-cols-2 gap-8 max-md:flex max-md:flex-col"
      >
        <input
          placeholder="Ваше имя"
          name="name"
          className="row-start-1 px-4 py-2 rounded-md outline-none border border-black"
        />
        <input
          placeholder="Ваш email"
          name="email"
          className="row-start-2 px-4 py-2 rounded-md outline-none border border-black"
        />
        <textarea
          placeholder="Сообщение"
          name="message"
          className="row-start-1 row-end-3 resize-none px-4 py-2 outline-none rounded-md border border-black"
        />
        <label className="flex items-center gap-4" htmlFor="check">
          <input
            type="checkbox"
            className="w-[20px] h-[20px]"
            id="check"
          />
          Согласие на обработку информации
        </label>
        <button
          type="submit"
          className="text-white font-semibold px-4 py-2 rounded-md bg-orange-500 row-start-4 hover:bg-orange-600"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default FeedBackForm;
