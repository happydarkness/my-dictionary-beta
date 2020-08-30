"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Home = function Home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/Home.vue'));
  });
};

var GetStarted = function GetStarted() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/GetStarted.vue'));
  });
};

var Login = function Login() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/Login.vue'));
  });
};

var SignUp = function SignUp() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/SignUp.vue'));
  });
};

var UnknownPage = function UnknownPage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/UnknownPage.vue'));
  });
};

var routes = [{
  path: "/",
  name: "GetStarted",
  component: GetStarted
}, {
  path: "/home",
  name: "Home",
  component: Home
}, {
  path: "/login",
  name: "Login",
  component: Login
}, {
  path: "/signup",
  name: "SignUp",
  component: SignUp
}, {
  path: "/signup",
  name: "SignUp",
  component: SignUp
}, {
  path: "/:catchAll(.*)",
  name: "UnknownPage",
  component: UnknownPage
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;