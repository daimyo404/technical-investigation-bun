const run = async (req: Request) => {
  console.log("req");
  console.log(req);
  const url = new URL(req.url);
  const hogeValue = url.searchParams.get("hoge");
  return Response.json({ result: hogeValue });
};

export default run;
