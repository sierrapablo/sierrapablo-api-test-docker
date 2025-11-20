const getTest = (_req, res) => {
  res.status(200).json({
    status: "OK!",
    message: "Tu servicio funciona perfectamente! (REST)",
  });
};

export { getTest };
