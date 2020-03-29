const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
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
        "https://avatars1.githubusercontent.com/u/50915526?s=460&u=85d8a47342472de2b51181f73cee4e1da6756bbb&v=4",
      name: "김한주",
      birthday: "971015",
      gender: "여자",
      job: "개발자"
    },
    {
      id: 3,
      image:
        "https://avatars2.githubusercontent.com/u/44108636?s=460&u=42afa365599d837455c04171238374a6e093cf08&v=4",
      name: "송성민",
      birthday: "950724",
      gender: "여자",
      job: "개발자"
    },
    {
      id: 4,
      image:
        "https://avatars2.githubusercontent.com/u/34125457?s=460&u=5b7e6ecd576ba9dfa6e2466743799dbeb5f9d55e&v=4",
      name: "노재민",
      birthday: "971128",
      gender: "남자",
      job: "개발자"
    }
  ]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
