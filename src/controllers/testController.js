const getTest = (_req, res) => {
  res.json({
    status: "OK!",
    message: "Tu servicio funciona perfectamente! (REST)",
  });
};

export default { getTest };
