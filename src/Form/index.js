import "./style.css";

const Form = () => (
  <form className="form" type="input">
    <input
      className="form__input"
      type="text"
      name="tasks"
      placeholder="Co jest do zrobienia?" autoFocus />
    <button className="form__addButton">Dodaj zadanie</button>
  </form>
);

export default Form;