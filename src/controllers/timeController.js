const getTime = (_req, res) => {
  res.status(200).json({
    time: new Date().toISOString(),
  });
};

export { getTime };
