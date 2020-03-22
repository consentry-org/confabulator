import parser from "./parser";

export default class Config {

  constructor(props) {
    this.props = props;
  }

  validate() {
    return parser.validate(this.props);
  }
}
