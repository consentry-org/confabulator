import {
  Config,
  required,
  optional,
  runtime
} from "confabulator";

// base config file
const base = new Config({
  assetBase: required.string,
  widget: {
    path: "widget.js",
    auth: {
      key: required.string.or.number,
      username: optional.string
    },
    url: () => `${this.assetBase}/${this.widget.path}`
  },
  styles: {
    path: "styles.css",
    url: () => `${this.assetBase}/${this.styles.path}`
  }
});

// dev env config file
const dev = Config.extend(base, {
  assetBase: "localhost:3000",
  auth: {
    key: "DEV_KEY",
    username: "foobar"
  }
});

dev.compile();

// production config file
const prod = Config.extend(base, {
  assetBase: "consentry.org/assets",
  auth: {
    key: runtime(() => process.env.WIDGET_KEY)
  }
});

prod.compile();
