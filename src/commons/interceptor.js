import axios from "axios";

import { bus } from "@/commons/eventBus";

export default function setup() {
  axios.interceptors.response.use(
    (response) => {
      if (response.status === 200 || response.status === 201) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    (error) => {
      console.log("TRACE", error);
      if (error?.response?.status) {
        switch (error.response.status) {
          case 400:
            console.error("Bad request");
            bus.$emit("error", { code: 400, message: "Bad request" });
            break;
          case 404:
            console.error("page not exist");
            bus.$emit("error", { code: 404, message: "Page not exist" });
            break;
        }
        return Promise.reject(error.response);
      }
    }
  );
}
