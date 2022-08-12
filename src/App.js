import "./styles.css";
import { Data } from "./data.js";
import { Hello } from "../components/Hello.js";
import { Heading } from "../components/Heading.js";
import { Card } from "../components/Card";

export default function App() {
  return (
    <div className="App">
      <Hello />
      <Heading />

      <div className="data">
        {Data.map((data, key) => {
          return (
            <div>
              <Card
                name={data.name}
                desc={data.description}
                img={data.image}
                id={data.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
