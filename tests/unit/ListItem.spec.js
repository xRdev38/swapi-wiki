import { mount } from "@vue/test-utils";
import ListItem from "@/components/ListItem";

describe("Mounted ListItem", () => {
  let slug = "";
  let items = [];

  const factory = (propsData) => {
    return mount(ListItem, {
      stubs: ["router-link"],
      propsData: {
        ...propsData,
      },
    });
  };

  describe("wrapper", () => {
    it("component should be exist", () => {
      const wrapper = factory({ slug, items });
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe("component create content", () => {
    it("should be have a link into the list", () => {
      const wrapper = factory({
        slug: "starships",
        items: [{ id: "1", name: "x-wing" }],
      });

      const link = wrapper.find(".list-item-link");
      expect(link.exists()).toBe(true);
      expect(link.text()).toBe("x-wing");
    });
  });
});
