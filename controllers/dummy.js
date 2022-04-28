const dummy = {
  dummyController: async (req, res) => {
    try {
      return res.json({ status: true, message: "dummy controller" });
    } catch (error) {}
  },
};

export default dummy;
