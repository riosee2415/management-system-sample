import React from "react";
import Customer from "./components/Customer";
import "./App.css";

const customer = [
  {
    id: 1,
    image:
      "https://avatars2.githubusercontent.com/u/44108636?s=460&u=42afa365599d837455c04171238374a6e093cf08&v=4",
    name: "윤상호",
    birthday: "900224",
    gender: "남자",
    job: "개발자"
  },
  {
    id: 2,
    image:
      "https://avatars2.githubusercontent.com/u/44108636?s=460&u=42afa365599d837455c04171238374a6e093cf08&v=4",
    name: "김한주",
    birthday: "971015",
    gender: "여자",
    job: "개발자"
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        {customer.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
