export const handler = (event: any, context: any, callback: any) => {
  const status = parseInt(event.path.code, 10);
  const type = event.path.type;
  const subType = event.path.subType;

  if (Number.isNaN(status) || !type || !subType) {
    return callback(
      JSON.stringify({
        status: 400,
        message:
          "Invalid parameter." + JSON.stringify({ status, type, subType }),
      })
    );
  }

  const contentType = `${type}/${subType}`;

  if (status === 200) {
    return callback(null, {
      status,
      header: { "Content-Type": contentType },
      message: "successive response.",
    });
  } else {
    return callback(
      JSON.stringify({
        status,
        header: { "Content-Type": contentType },
        message: "error response.",
      })
    );
  }
};
