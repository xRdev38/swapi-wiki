import { mount } from "@vue/test-utils";
import LinkedList from "@/components/LinkedList";

describe("LinkedList", () => {
  let currentUrl = "";
  let path = "";
  let items = [""];

  const factory = (propsData) => {
    return mount(LinkedList, {
      propsData: {
        ...propsData,
      },
    });
  };

  describe("wrapper", () => {
    it("component should be exist", () => {
      const wrapper = factory({ currentUrl, path, items });
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe("component create content", () => {
    it("should be have a link into the list", () => {
      const wrapper = factory({
        currentUrl: "https://wiki.github.io",
        path: "pilots",
        items: ["https://swapi.dev/api/pilots/1/"],
      });

      const link = wrapper.find("a:first-child");
      expect(link.exists()).toBe(true);

      const html = wrapper.html();
      expect(html.includes("https://wiki.github.io/pilots/1")).toBe(true);
    });
  });
});
