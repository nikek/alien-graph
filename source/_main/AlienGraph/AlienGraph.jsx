'use strict';

class AlienGraph extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [0,1,2,3,4]
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>AlienGraph</h1>
        <ul>
          {this.state.list.map(
            (a, i) =>
              <li key={i}>{a}&sup2; = {a*a}</li>
          )}
        </ul>
      </div>
    );
  }
}