import React from "react";
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

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
  },
  {
    id: 3,
    image:
      "https://avatars2.githubusercontent.com/u/44108636?s=460&u=42afa365599d837455c04171238374a6e093cf08&v=4",
    name: "송성민",
    birthday: "950724",
    gender: "여자",
    job: "개발자"
  }
];

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>NO</TableCell>
              <TableCell>AVATAR</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>BIRTHDAY</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell>JOB</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
