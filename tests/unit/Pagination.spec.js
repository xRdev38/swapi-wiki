import { mount } from "@vue/test-utils";
import Pagination from "@/components/Pagination";

describe("Mounted Pagination", () => {
  let totalPages = 2;
  let perPage = 10;
  let currentPage = 1;

  const factory = (propsData) => {
    return mount(Pagination, {
      propsData: {
        ...propsData,
      },
    });
  };

  describe("wrapper", () => {
    it("component should be exist", () => {
      const wrapper = factory({ totalPages, perPage, currentPage });
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe("component create content", () => {
    it("should be create link", () => {
      const wrapper = factory({ totalPages, perPage, currentPage });
      const list = wrapper.find(".pagination-list");
      expect(list.html()).toContain("1");
      expect(list.html()).toContain("2");
    });

    it("should be have class current to first element", () => {
      const wrapper = factory({ totalPages, perPage, currentPage });
      expect(wrapper.find(".active")).toBeTruthy();
    });

    it("should be page changed", async () => {
      const wrapper = factory({ totalPages, perPage, currentPage });
      await wrapper.find(".pagination-link:nth-child(1)").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("pageChanged");
    });
  });
});
