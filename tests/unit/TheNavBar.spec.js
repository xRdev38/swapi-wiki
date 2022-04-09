import { mount } from "@vue/test-utils";
import TheNavBar from "@/components/TheNavBar";

describe("TheNavBar", () => {
  const wrapper = mount(TheNavBar, {
    stubs: ["router-link"],
  });

  describe("wrapper", () => {
    it("component should be exist", () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
