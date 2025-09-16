import "./styles.css";

export default function App(props) {
  let { name: n, lastName: l } = props;

  return (
    <div className="App">
      <h1>Information about writer:</h1>
      <h2>{props.name}</h2>
      <h2>{props.lastName}</h2>
    </div>
  );
}

App.defaultProps = { name: "William", lastName: "Shakespeare" };
