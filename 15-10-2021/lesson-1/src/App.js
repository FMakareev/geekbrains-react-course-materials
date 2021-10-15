import logo from './logo.svg';
import styles from './App.module.css';



const Card = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <h4>{props.title}</h4>
      <button
        onClick={() => {
          console.log(props);
        }}
      >
        open
      </button>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="cardList">
      <Card
        title={"hello react 1"}
        alt={"placeholder"}
        src={"https://via.placeholder.com/150"}
      />
      <Card
        title={"hello react 2"}
        alt={"placeholder"}
        src={"https://via.placeholder.com/150"}
      />
      <Card
        title={"hello react 3"}
        alt={"placeholder"}
        src={"https://via.placeholder.com/150"}
      />
    </div>
  );
};


export function App(props) {
  return (
    <div className={`${styles.App} ${props.className} customBg`}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CardList/>
      </header>
    </div>
  );
}
